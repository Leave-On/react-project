import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tav: TabItem) => void;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, value, onTabClick } = props;

	const clickHandle = useCallback(
		(tab: TabItem) => {
			return () => {
				onTabClick(tab);
			};
		},
		[onTabClick],
	);

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((tab) => (
				<Card
					onClick={clickHandle(tab)}
					className={cls.tab}
					key={tab.value}
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
});
