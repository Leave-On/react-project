import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { RoutePath } from "@/shared/const/router";
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface AvatarDropdownProps {
   className?: string;
}


export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManager

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable ?
                    [{
                        content: t('Admin'),
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id

                },
                {
                    content: t('Quit'),
                    onClick: onLogout

                }
            ]}
        />
    )
})