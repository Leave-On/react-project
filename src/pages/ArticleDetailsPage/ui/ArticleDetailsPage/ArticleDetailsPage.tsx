import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducer: ReducerList = {
	articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();
	const { t } = useTranslation('article');

	if (!id) {
		return null;
	}

	const ArticleRatingCard = toggleFeatures({
		name: 'isArticleRatingEnabled',
		on: () => <ArticleRating articleId={id} />,
		off: () => <Card>{t('Article rating will be available soon')}</Card>,
	});

	return (
		<DynamicModuleLoader reducers={reducer} removeAfterUnmount>
			<Page className={classNames(cls.articleDetailsPage, {}, [className])}>
				<VStack gap="16" max>
					<ArticleDetailsHeader />
					<ArticleDetails articleId={id} />
					<ToggleFeatures
						feature='isArticleRatingEnabled'
						on={<ArticleRating articleId={id} />}
						off={<Card>{t('Article rating will be available soon')}</Card>}
					/>
					<ArticleRecomendationsList />
					<ArticleDetailsComments articleId={id} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
