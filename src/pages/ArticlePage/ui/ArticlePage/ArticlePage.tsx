import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const content = (
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <Page
                data-testid='ArticlePage'
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlePage, {}, [className])}
            >
                <ArticlePageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
            }
            on={
                <StickyContentLayout
                    content={
                    <Page
                        data-testid='ArticlePage'
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.articlePageRedesigned, {}, [className])}
                    >
                        <ArticleInfiniteList className={cls.list} />
                    </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                />


            }
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>

    );
}

export default memo(ArticlePage)