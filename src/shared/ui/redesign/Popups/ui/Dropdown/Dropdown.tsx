import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
	const { className, items, trigger, direction = 'bottom right' } = props;

	const menuClasses = [mapDirectionClass[direction], popupCls.menu];

	return (
		<Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.Popup])}>
			<Menu.Button className={cls.btn}>{trigger}</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							type="button"
							className={classNames(cls.item, { [popupCls.active]: active }, [])}
							onClick={item.onClick}
							disabled={item.disabled}
						>
							{item.content}
						</button>
					);

					if (item.href) {
						return (
							<Menu.Item
								as={AppLink}
								to={item.href}
								disabled={item.disabled}
								key={index}
							>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item as={Fragment} disabled={item.disabled} key={index}>
							{content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
}
