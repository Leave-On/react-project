import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/newSearch.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesign/Card';
import { Icon } from '@/shared/ui/redesign/Icon';
import { Input } from '@/shared/ui/redesign/Input';
import { VStack } from '@/shared/ui/redesign/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   typeValue: ArticleType;
   search: string;
   onChangeSearch?: (value: string) => void;
   onChangeOrder: (newOrder: SortOrder) => void;
   onChangeSort: (newSortField: ArticleSortField) => void;
   onChangeType: (type: ArticleType) => void
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        order,
        search,
        sort,
        typeValue,
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch
    } = props;

    const { t } = useTranslation()

    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding='24' >
            <VStack gap='32'>
                <Input
                    addonLeft={<Icon Svg={SearchIcon} width={16} height={16} />}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search') as string}
                />
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleTypeTabs
                    onChangeType={onChangeType}
                    value={typeValue}
                />
            </VStack>
        </Card>
    );
})