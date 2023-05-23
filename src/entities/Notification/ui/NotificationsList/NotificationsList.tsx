import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesign/Stack';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationsList.module.scss';

interface NotificationsListProps {
   className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000
    })


    if (isLoading) {
        console.log(isLoading);

        return (
            <VStack
                gap='16'
                max
                className={classNames(cls.NotificationsList, {}, [className])}
            >
                <Skeleton width='100%' border='8px' height='80px' />
                <Skeleton width='100%' border='8px' height='80px' />
                <Skeleton width='100%' border='8px' height='80px' />
            </VStack>
        )
    }

    return (
        <VStack
            gap='8'
            className={classNames(cls.NotificationsList, {}, [className])}
            align={'center'}
        >
            {data?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
})