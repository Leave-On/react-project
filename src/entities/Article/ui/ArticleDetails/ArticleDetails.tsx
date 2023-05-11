import { ArticleBlockType } from '../../model/consts/consts';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DateIcon from '@/shared/assets/icons/date.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/ArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
   className?: string;
   articleId?: string;
}

const reducers: ReducerList = {
    articleDetails: ArticleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('articles')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }

    }, [])


    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId))
        }

    }, [articleId, dispatch])

    let content;

    if(isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32}  />
                <Skeleton className={cls.skeleton} width={600} height={24}  />
                <Skeleton className={cls.skeleton} width={'100%'} height={200}  />
                <Skeleton className={cls.skeleton} width={'100%'} height={200}  />
            </>
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
            <>
                <HStack max justify={'center'} className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </HStack>
                <VStack gap={'4'} max>
                    <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L}/>
                    <HStack max className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack max className={cls.articleInfo}>
                        <Icon Svg={DateIcon} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack gap={'16'} max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
})