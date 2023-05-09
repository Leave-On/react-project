import { getUserAuthData } from "@/entities/User";
import AboutIcon from '@/shared/assets/icons/about_page_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main_page_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RoutePath } from "@/shared/const/router";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О нас'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Страница профиля',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true
                },)
        }
        return sidebarItemsList
    }
)