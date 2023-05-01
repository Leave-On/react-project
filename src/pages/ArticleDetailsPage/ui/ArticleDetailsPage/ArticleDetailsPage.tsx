import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { ArticleRecomendationsList } from 'features/ArticleRecomendationsList';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageReducer } from '../../model/slices';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import {
    getArticleRecommendations
} from '../../model/slices/ArticleDetailsRecommendationsSlice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducer: ReducerList = {
    articleDetailsPage: ArticleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    console.log('details');


    if(!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('No such article')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsHeader />
                    <ArticleDetails articleId={id}/>
                    <ArticleRecomendationsList />
                    <ArticleDetailsComments articleId={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
}

export default memo(ArticleDetailsPage)