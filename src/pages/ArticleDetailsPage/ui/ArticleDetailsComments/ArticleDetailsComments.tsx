import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { AddNewComment } from 'features/AddNewComment';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSize } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsCommentsProps {
   className?: string;
   articleId: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article')
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
        <div className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Comments') as string}
            />
            <AddNewComment
                onSendComment={onSendComment}

            />
            <CommentList isLoading={commentsIsLoading}  comments={comments}/>
        </div>
    );
})