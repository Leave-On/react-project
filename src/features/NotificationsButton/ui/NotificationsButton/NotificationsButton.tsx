import { NotificationsList } from '@/entities/Notification';
import { memo, useCallback, useState } from 'react';
import NotificationsIcon from '@/shared/assets/icons/bell.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationsButton.module.scss';


interface NotificationsButtonProps {
   className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        console.log('click');

        setIsOpen(true)
    }, [])
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    function detectMobile() {
        const isMobile = window.matchMedia
        if (!isMobile) return false

        const device = isMobile("(pointer:coarse)")
        return device.matches
    }

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} inverted />
        </Button>
    )

    if (detectMobile()) {
        return (
            <>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationsList />
                    </Drawer>
                </AnimationProvider>

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