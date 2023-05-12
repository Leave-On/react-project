import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsHeaderProps {
   className?: string;
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const userData = useSelector(getUserAuthData)
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
        if(article) {
            navigate(getRouteArticleEdit(article.id))
        }
    }, [article, navigate])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINED}
                onClick={onBackToList}
            >
                {t('Back')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINED}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}

        </HStack>
    );
})