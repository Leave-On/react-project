import { Popover } from 'shared/ui/Popups';
import { NotificationsList } from 'entities/Notification';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationsIcon from 'shared/assets/icons/bell.svg';
import cls from './NotificationsButton.module.scss';


interface NotificationsButtonProps {
   className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;

    return (

        <Popover
            className={classNames(cls.NotificationsButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationsIcon} inverted />
                </Button>
            )} >
            <NotificationsList className={cls.notifications} />
        </Popover>
    );
})