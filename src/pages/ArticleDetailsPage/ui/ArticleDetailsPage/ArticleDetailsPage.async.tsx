import { AddNewCommentProps } from 'features/AddNewComment/ui/AddNewComment/AddNewComment';
import { FC, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('../ArticleDetailsPage/ArticleDetailsPage')), 400)
}));