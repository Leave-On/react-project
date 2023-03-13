import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main_page_icon.svg'
import AboutIcon from 'shared/assets/icons/about_page_icon.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О нас'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Страница профиля',
        authOnly: true
    }
]