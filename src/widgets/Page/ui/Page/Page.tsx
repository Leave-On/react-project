import { StateScheme } from '@/app/providers/StoreProvider';
import { getScrollByPath, ScrollSaveActions } from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const dispatch = useAppDispatch();
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateScheme) => getScrollByPath(state, pathname));

	console.log(scrollPosition + ' scrollposition');

	useInfiniteScroll({
		triggerRef,
		wrapperRef: toggleFeatures({
			name: 'isAppRedesigned',
			off: () => wrapperRef,
			on: () => undefined,
		}),
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			ScrollSaveActions.setScrollPosition({
				position: e.currentTarget.scrollTop,
				path: pathname,
			}),
		);
		console.log('scroll ' + e.currentTarget.scrollTop);
	}, 500);

	return (
		<main
			ref={wrapperRef}
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.PageRedesigned,
					off: () => cls.Page,
				}),
				{},
				[className],
			)}
			onScroll={onScroll}
			onClick={onScroll}
			data-testid={props['data-testid'] ?? 'Page'}
		>
			{children}
			{onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
		</main>
	);
};
