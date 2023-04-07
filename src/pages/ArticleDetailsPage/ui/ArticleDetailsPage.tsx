import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/ArticleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const commentsError = useSelector(getArticleCommentsError)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])


    const onSendComment = useCallback((value: string) => {
        dispatch(addCommentForArticle(value))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

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
                <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList}>{t('Back')}</Button>
                <ArticleDetails articleId={id}/>
                <Text className={cls.commmentTitle} title={t('Comments') as string}/>
                <AddNewComment
                    onSendComment={onSendComment}

                />
                <CommentList isLoading={commentsIsLoading}  comments={comments}/>
            </Page>
        </DynamicModuleLoader>

    );
}

export default memo(ArticleDetailsPage)