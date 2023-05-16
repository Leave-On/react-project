import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticlesRecomendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecomendationsListProps {
   className?: string;
}



export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation()

    const { isLoading, error, data: articles } = useArticlesRecomendationsList(3)
    if (isLoading || error || !articles) {
        return null
    }

    return (
        <VStack
            data-testid='ArticleRecomendationsList'
            gap='8'
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Recommended articles') as string}
            />
            <ArticleList
                articles={articles}
                target='_blank'
            />
        </VStack>
    );
})