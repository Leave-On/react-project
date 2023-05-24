import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
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
	direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, value, onTabClick, direction = 'row' } = props;

	const clickHandle = useCallback(
		(tab: TabItem) => {
			return () => {
				onTabClick(tab);
			};
		},
		[onTabClick],
	);

	return (
		<Flex
			className={classNames(cls.Tabs, {}, [className])}
			direction={direction}
			gap="8"
			align="start"
		>
			{tabs.map((tab) => {
				const isSelected = tab.value === value;
				return (
					<Card
						onClick={clickHandle(tab)}
						className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
						key={tab.value}
						variant={isSelected ? 'light' : 'normal'}
						border="round"
					>
						{tab.content}
					</Card>
				);
			})}
		</Flex>
	);
});
