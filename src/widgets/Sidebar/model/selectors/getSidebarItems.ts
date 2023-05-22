import { getUserAuthData } from "@/entities/User";
import AboutIconDeprecated from '@/shared/assets/icons/about_page_icon.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/article.svg';
import MainIconDeprecated from '@/shared/assets/icons/main_page_icon.svg';
import AboutIcon from '@/shared/assets/icons/newAbout.svg';
import ArticlesIcon from '@/shared/assets/icons/newArticles.svg';
import ProfileIcon from '@/shared/assets/icons/newAvatar.svg';
import MainIcon from '@/shared/assets/icons/newMain.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';


import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/shared/const/router";
import { toggleFeatures } from "@/shared/lib/features";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon:  toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => MainIconDeprecated,
                    on: () => MainIcon
                }),
                text: 'Главная'
            },
            {
                path: getRouteAbout(),
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => AboutIconDeprecated,
                    on: () => AboutIcon
                }),
                text: 'О нас'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: toggleFeatures({
                        name: "isAppRedesigned",
                        off: () => ProfileIconDeprecated,
                        on: () => ProfileIcon
                    }),
                    text: 'Страница профиля',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: toggleFeatures({
                        name: "isAppRedesigned",
                        off: () => ArticlesIconDeprecated,
                        on: () => ArticlesIcon
                    }),
                    text: 'Статьи',
                    authOnly: true
                },)
        }
        return sidebarItemsList
    }
)