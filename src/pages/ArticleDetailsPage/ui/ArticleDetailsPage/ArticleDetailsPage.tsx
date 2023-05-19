import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlags } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetailsPageReducer } from '../../model/slices';
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
    const { id } = useParams<{ id: string }>()
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlags('isCounterEnabled')
    console.log('details');

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsHeader />
                    <ArticleDetails articleId={id}/>
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecomendationsList />
                    <ArticleDetailsComments articleId={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
}

export default memo(ArticleDetailsPage)