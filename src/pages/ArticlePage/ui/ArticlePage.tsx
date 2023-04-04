import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlesPageActions.initState())
    })

    const reducers: ReducerList = {
        articlesPage: articlesPageReducer
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewChange} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>

    );
}

export default memo(ArticlePage)