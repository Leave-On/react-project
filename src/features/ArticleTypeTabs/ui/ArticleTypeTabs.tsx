import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesign/Tabs';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation()

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
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <TabsDeprecated
                    className={classNames('', {}, [className])}
                    onTabClick={onTabClick}
                    tabs={typeTabs}
                    value={value}
                />
            }
            on={
                <Tabs
                    className={classNames('', {}, [className])}
                    onTabClick={onTabClick}
                    tabs={typeTabs}
                    value={value}
                    direction='column'
                />
            }
        />

    );
})