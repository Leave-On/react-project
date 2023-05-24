import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import DoneIcon from '@/shared/assets/icons/done.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo, useState } from 'react';
import { Button } from '../../../../redesign/Button/Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps<T extends string> {
	items?: ListBoxItem<T>[];
	className?: string;
	value?: T;
	defaultValue?: string;
	onChange: (value: T) => void;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		label,
		direction = 'top right',
	} = props;

	const [selectedPerson, setSelectedPerson] = useState();

	const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

	const selectedItem = useMemo(() => {
		return items?.find((item) => item.value === value);
	}, [items, value]);

	return (
		<HStack gap={'4'}>
			{label && <span>{label + ' > '}</span>}
			<HListBox
				as={'div'}
				className={classNames(popupCls.Popup, {}, [className])}
				value={value}
				onChange={onChange}
				disabled={readonly}
			>
				<HListBox.Button className={popupCls.trigger}>
					<Button
						variant="filled"
						disabled={readonly}
						addonRight={<Icon Svg={ArrowIcon} className={cls.arrowIcon} />}
					>
						{selectedItem?.content ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={classNames(
										cls.item,
										{
											[popupCls.active]: active,
											[popupCls.disabled]: item.disabled,
											[popupCls.selected]: selected,
										},
										[],
									)}
								>
									{selected && (
										<Icon
											Svg={DoneIcon}
											width={24}
											height={24}
											className={cls.icon}
										/>
									)}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	);
}
