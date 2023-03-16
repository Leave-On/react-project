import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    if(!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('No such article')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails articleId={id}/>
        </div>
    );
}

export default memo(ArticleDetailsPage)