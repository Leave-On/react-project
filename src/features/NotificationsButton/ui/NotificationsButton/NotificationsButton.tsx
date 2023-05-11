import { NotificationsList } from '@/entities/Notification';
import NotificationsIcon from '@/shared/assets/icons/bell.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDetectMobile } from '@/shared/lib/hooks/useDetectMobile/useDetectMobile';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { memo, useCallback, useState } from 'react';
import cls from './NotificationsButton.module.scss';


interface NotificationsButtonProps {
   className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useDetectMobile()
    const onOpenDrawer = useCallback(() => {
        console.log('click');

        setIsOpen(true)
    }, [])
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} inverted />
        </Button>
    )

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </>

        )
    } else {
        return (
            <div>
                <Popover
                    className={classNames(cls.NotificationsButton, {}, [className])}
                    trigger={trigger} >
                    <NotificationsList className={cls.notifications} />
                </Popover>
            </div>
        );
    }


})