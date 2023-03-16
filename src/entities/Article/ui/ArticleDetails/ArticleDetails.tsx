import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/ArticleDetails';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
   className?: string;
   articleId: string;
}

const reducers: ReducerList = {
    articleDetails: ArticleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const data = useSelector(getArticleDetailsData)



    useEffect(() => {
        //@ts-ignore
        dispatch(fetchArticleById(articleId))
    }, [articleId, dispatch])

    let content;

    if(isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32}  />
                <Skeleton className={cls.skeleton} width={600} height={24}  />
                <Skeleton className={cls.skeleton} width={'100%'} height={200}  />
                <Skeleton className={cls.skeleton} width={'100%'} height={200}  />
            </div>
        )
    } else if(error) {
        content = (
            <Text
                title={t('Loading error') as string}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <div>Article details</div>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
})