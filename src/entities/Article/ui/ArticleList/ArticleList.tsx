import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
	return new Array(view === ArticleView.BLOCKS ? 9 : 3)
		.fill(0)
		.map((i, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		isLoading,
		target,
		view = ArticleView.BLOCKS,
	} = props;
	const { t } = useTranslation();

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				article={article}
				view={view}
				className={cls.card}
				key={article.id}
				target={target}
			/>
		);
	};

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}	>
				<Text
					size={TextSize.L}
					title={t('Articles not found') as string}
				/>
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.ArticleList, {}, [className, cls[view]])}
			data-testid="ArticleList"
		>
			{articles.length > 0 ? articles.map(renderArticle) : null}
			{isLoading && getSkeletons(view)}
		</div>
	);
});
