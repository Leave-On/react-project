import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from "@/shared/const/router";
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
   className?: string;
   article: Article;
   view: ArticleView;
   target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target
    } = props;
    const { t } = useTranslation()


    const types = <Text text={article.type.join(', ')} className={cls.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(b => b.type === ArticleBlockType.TEXT) as ArticleTextBlock

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                data-testid='ArticleListItem'
            >
                <Card className={cls.card} >
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    {types}
                    <Text title={article.title} className={cls.title} />
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button theme={ButtonTheme.OUTLINED}>
                                {t('Read more')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>

        )
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid='ArticleListItem'
        >
            <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={cls.card}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                        />
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
})