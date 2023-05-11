import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface ArticleRatingProps {
   className?: string;
   articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })

    const rating = data?.[0]

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starCount,
                feedback
            })
        } catch(e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onCancel = useCallback((starCount: number) => {
        handleRateArticle(starCount)
    }, [handleRateArticle])

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateArticle(starCount, feedback)
    }, [handleRateArticle])

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Rate this article!')}
            afterRatingText={t('Thanks for rating this article!') as string}
            feedbackTitle={t('Leave your feedback') as string}
            hasFeedback
        />
    );
})

export default ArticleRating