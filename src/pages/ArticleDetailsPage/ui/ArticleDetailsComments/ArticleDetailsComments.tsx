import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
   className?: string;
   articleId?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('translation')
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const commentsError = useSelector(getArticleCommentsError)

    const onSendComment = useCallback((value: string) => {
        dispatch(addCommentForArticle(value))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId))
    })

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Comments') as string}
            />
            <Suspense fallback={<Loader/>}>
                <AddNewComment onSendComment={onSendComment} />
            </Suspense>
            <CommentList isLoading={commentsIsLoading}  comments={comments}/>
        </VStack>
    );
})