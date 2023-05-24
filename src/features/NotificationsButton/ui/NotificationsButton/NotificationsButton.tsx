import { NotificationsList } from '@/entities/Notification';
import NotificationsIconDeprecated from '@/shared/assets/icons/bell.svg';
import NotificationsItem from '@/shared/assets/icons/newBell.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDetectMobile } from '@/shared/lib/hooks/useDetectMobile/useDetectMobile';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesign/Icon';
import { Popover } from '@/shared/ui/redesign/Popups';
import { memo, useCallback, useState } from 'react';
import cls from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
	className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
	const { className } = props;

	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useDetectMobile();
	const onOpenDrawer = useCallback(() => {
		console.log('click');

		setIsOpen(true);
	}, []);
	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const trigger = (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
					<IconDeprecated Svg={NotificationsIconDeprecated} inverted />
				</ButtonDeprecated>
			}
			on={<Icon Svg={NotificationsItem} clickable onClick={onOpenDrawer} />}
		/>
	);

	if (isMobile) {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={
					<>
						{trigger}
						<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
							<NotificationsList />
						</Drawer>
					</>
				}
				on={
					<>
						{trigger}
						<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
							<NotificationsList />
						</Drawer>
					</>
				}
			/>
		);
	} else {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={
					<PopoverDeprecated
						className={classNames(cls.NotificationsButton, {}, [className])}
						trigger={trigger}
					>
						<NotificationsList className={cls.notifications} />
					</PopoverDeprecated>
				}
				on={
					<Popover
						className={classNames(cls.NotificationsButton, {}, [className])}
						trigger={trigger}
					>
						<NotificationsList className={cls.notifications} />
					</Popover>
				}
			/>
		);
	}
});
