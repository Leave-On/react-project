import { ArticleDetails } from 'entities/Article';
import { ArticleRecomendationsList } from 'features/ArticleRecomendationsList';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';
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

    console.log('details');


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