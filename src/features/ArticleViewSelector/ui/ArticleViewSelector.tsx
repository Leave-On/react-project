import { ArticleView } from '@/entities/Article';
import BlocksIconDeprecated from '@/shared/assets/icons/blocks.svg';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import ListIcon from '@/shared/assets/icons/newList.svg';
import TilesIcon from '@/shared/assets/icons/newTiles.svg';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesign/Card';
import { Icon } from '@/shared/ui/redesign/Icon';
import { HStack } from '@/shared/ui/redesign/Stack';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.BLOCKS,
		icon: toggleFeatures({
			name: 'isAppRedesigned',
			off: () => BlocksIconDeprecated,
			on: () => TilesIcon,
		}),
	},
	{
		view: ArticleView.LIST,
		icon: toggleFeatures({
			name: 'isAppRedesigned',
			off: () => ListIconDeprecated,
			on: () => ListIcon,
		}),
	},
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
	const { className, view, onViewClick } = props;

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<div className={classNames(cls.ArticleViewSelector, {}, [className])}>
					{viewTypes.map((viewType) => (
						<ButtonDeprecated
							theme={ButtonTheme.CLEAR}
							key={viewType.view}
							onClick={onClick(viewType.view)}
						>
							<IconDeprecated
								width={24}
								height={24}
								Svg={viewType.icon}
								className={classNames(
									'',
									{ [cls.notSelected]: viewType.view !== view },
									[cls.icons],
								)}
							/>
						</ButtonDeprecated>
					))}
				</div>
			}
			on={
				<Card
					border="round"
					className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
				>
					<HStack gap="16">
						{viewTypes.map((viewType) => (
							<Icon
								width={24}
								height={24}
								Svg={viewType.icon}
								className={classNames(
									'',
									{ [cls.notSelected]: viewType.view !== view },
									[cls.icons],
								)}
								clickable
								onClick={onClick(viewType.view)}
								key={viewType.view}
							/>
						))}
					</HStack>
				</Card>
			}
		/>
	);
};
