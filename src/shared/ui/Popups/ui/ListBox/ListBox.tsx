import { Listbox as HListBox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import { mapDirectionClass } from '../../styles/consts'
import cls from './ListBox.module.scss'
import popupCls from '../../styles/Popup.module.scss'

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'top right'
    } = props

    const [selectedPerson, setSelectedPerson] = useState()


    const optionsClasses = [mapDirectionClass[direction]]


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
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
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
                                            [popupCls.disabled]: item.disabled
                                        },
                                        []
                                    ) }
                                >
                                    {selected && ' this  -->'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}