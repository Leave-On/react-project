import { getUserAuthData } from "@/entities/User";
import AboutIcon from '@/shared/assets/icons/about_page_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main_page_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/shared/const/router";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О нас'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Страница профиля',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true
                },)
        }
        return sidebarItemsList
    }
)