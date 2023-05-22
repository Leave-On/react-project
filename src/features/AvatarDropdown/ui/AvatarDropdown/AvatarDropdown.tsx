import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface AvatarDropdownProps {
   className?: string;
}


export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
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
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable ?
                    [{
                        content: t('Admin'),
                        href: getRouteAdmin()
                    }]
                    : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id)

                },
                {
                    content: t('Quit'),
                    onClick: onLogout

                }
            ]}
        />
    )
})