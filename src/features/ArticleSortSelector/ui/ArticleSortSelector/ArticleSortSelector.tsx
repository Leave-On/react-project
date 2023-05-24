import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesign/Popups';
import { VStack } from '@/shared/ui/redesign/Stack';
import { Text } from '@/shared/ui/redesign/Text';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSortField: (newSortField: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
	const { className, onChangeOrder, onChangeSortField, order, sort } = props;
	const { t } = useTranslation('article');

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
		() => [
			{
				value: 'asc',
				content: t('ascending') as string,
			},
			{
				value: 'desc',
				content: t('descending') as string,
			},
		],
		[t],
	);

	const sortFiledOptions = useMemo<SelectOption<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t('creating date') as string,
			},
			{
				value: ArticleSortField.TITLE,
				content: t('title') as string,
			},
			{
				value: ArticleSortField.VIEWS,
				content: t('views') as string,
			},
		],
		[t],
	);

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
					<Select<ArticleSortField>
						options={sortFiledOptions}
						label={t('Sort by') as string}
						value={sort}
						onChange={onChangeSortField}
					/>
					<Select<SortOrder>
						options={orderOptions}
						label={t('by') as string}
						value={order}
						onChange={onChangeOrder}
						className={cls.order}
					/>
				</div>
			}
			on={
				<div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
					<VStack gap="8">
						<Text text={t('Sort by')} />
						<ListBox<ArticleSortField>
							items={sortFiledOptions}
							direction={'bottom right'}
							value={sort}
							onChange={onChangeSortField}
						/>
						<ListBox<SortOrder>
							items={orderOptions}
							direction={'bottom right'}
							value={order}
							onChange={onChangeOrder}
							className={cls.order}
						/>
					</VStack>
				</div>
			}
		/>
	);
};
