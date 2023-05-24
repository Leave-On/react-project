import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface FiltersContainerProps {
	className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
	const { className } = props;

	const { onChangeOrder, onChangeSearch, onChangeSort, onChangeType, order, search, sort, type } =
		useArticlesFilters();

	return (
		<ArticlesFilters
			className={className}
			onChangeOrder={onChangeOrder}
			onChangeSort={onChangeSort}
			onChangeType={onChangeType}
			order={order}
			search={search}
			sort={sort}
			typeValue={type}
			onChangeSearch={onChangeSearch}
		/>
	);
});
