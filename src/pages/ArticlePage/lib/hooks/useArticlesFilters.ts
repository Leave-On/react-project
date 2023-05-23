import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

export function useArticlesFilters() {
	const view = useSelector(getArticlesPageView);
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);
	const dispatch = useAppDispatch();

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onViewChange = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
			// dispatch(articlesPageActions.initState())
			// dispatch(fetchArticlesList({}))
		},
		[dispatch, fetchData],
	);

	const onChangeSort = useCallback(
		(sort: ArticleSortField) => {
			dispatch(articlesPageActions.setSort(sort));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			dispatch(articlesPageActions.setOrder(order));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlesPageActions.setSearch(search));
			dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData],
	);

	const onChangeType = useCallback(
		(value: ArticleType) => {
			dispatch(articlesPageActions.setType(value));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[fetchData, dispatch],
	);

	return {
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
	};
}
