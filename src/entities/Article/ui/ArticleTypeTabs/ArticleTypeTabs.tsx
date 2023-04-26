import { ArticleType } from 'entities/Article/model/types/article';
import { getArticlesPageType } from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation()
    const type = useSelector(getArticlesPageType)

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all') as string
        },
        {
            value: ArticleType.IT,
            content: t('IT') as string
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('economics') as string
        },
        {
            value: ArticleType.SCIENCE,
            content: t('science') as string
        },

    ], [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
        />
    );
})