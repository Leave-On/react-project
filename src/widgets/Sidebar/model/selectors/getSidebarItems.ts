import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { SidebarItemType } from "../types/sidebar";
import MainIcon from 'shared/assets/icons/main_page_icon.svg'
import AboutIcon from 'shared/assets/icons/about_page_icon.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/article.svg'

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
                    text: 'Articles page',
                    authOnly: true
                },)
        }
        return sidebarItemsList
    }
)