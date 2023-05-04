import { Notification } from 'entities/Notification/model/types/notification';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
   className?: string;
   item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card >
    )

    if (item.href) {
        return (
            <a className={cls.link} target={'blank'} href={item.href}>
                {content}
            </a>
        )
    }

    return content
})