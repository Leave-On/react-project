import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesign/Avatar';
import { Dropdown } from '@/shared/ui/redesign/Popups';
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

    const items = [
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
    ]

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                    items={items}
                />
            }
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={<Avatar size={48} src={authData.avatar} />}
                    items={items}
                />
            }
        />


    )
})