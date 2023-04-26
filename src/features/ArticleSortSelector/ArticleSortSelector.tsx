import { ArticleSortField } from 'entities/Article/model/types/article';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSortField: (newSortField: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSortField,
        order,
        sort
    } = props
    const { t } = useTranslation('article')

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending') as string
        },
        {
            value: 'desc',
            content: t('descending') as string
        }
    ], [t])

    const sortFiledOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creating date') as string
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title') as string
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views') as string
        }
    ], [t])


    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFiledOptions}
                label={t('Sort by') as string}
                value={sort}
                onChange={onChangeSortField}

            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('by') as string}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
}