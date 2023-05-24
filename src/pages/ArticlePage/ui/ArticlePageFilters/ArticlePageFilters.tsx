import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
	className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const {
		onChangeOrder,
		onChangeSearch,
		onChangeSort,
		onChangeType,
		onViewChange,
		order,
		search,
		sort,
		type,
		view,
	} = useArticlesFilters();

	return (
		<div className={classNames(cls.ArticlePageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					onChangeOrder={onChangeOrder}
					onChangeSortField={onChangeSort}
					order={order}
					sort={sort}
				/>
				<ArticleViewSelector view={view} onViewClick={onViewChange} />
			</div>
			<Card className={cls.search}>
				<Input
					value={search}
					onChange={onChangeSearch}
					placeholder={t('Search') as string}
				/>
			</Card>
			<ArticleTypeTabs onChangeType={onChangeType} value={type} />
		</div>
	);
});
