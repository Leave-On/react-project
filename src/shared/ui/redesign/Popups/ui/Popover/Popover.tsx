import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
	className?: string;
	trigger: ReactNode;
	direction?: DropdownDirection;
	children: ReactNode;
}

export function Popover(props: PopoverProps) {
	const { className, trigger, direction = 'bottom left', children } = props;

	const menuClasses = [mapDirectionClass[direction], popupCls.menu];

	return (
		<HPopover className={classNames(cls.Popup, {}, [className, popupCls.Popup])}>
			<HPopover.Button as={'div'} className={popupCls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
}
