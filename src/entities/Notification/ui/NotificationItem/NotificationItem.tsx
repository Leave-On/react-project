import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesign/Card';
import { Text } from '@/shared/ui/redesign/Text';
import { memo } from 'react';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
   className?: string;
   item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <CardDeprecated theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
                    <TextDeprecated title={item.title} text={item.description} />
                </CardDeprecated >
            }
            on={
                <Card className={classNames(cls.NotificationItem, {}, [className])}>
                    <Text title={item.title} text={item.description} />
                </Card >
            }
        />
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