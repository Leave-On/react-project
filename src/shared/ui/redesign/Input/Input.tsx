import { Currency } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number | Currency;
	label?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
	size?: InputSize;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		placeholder,
		type = 'text',
		autofocus,
		size = 'm',
		readonly,
		addonLeft,
		addonRight,
		label,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	const onBlur = () => {
		setIsFocused(false);
	};
	const onFocus = () => {
		setIsFocused(true);
	};

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	};

	const input = (
		<div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
			<div className={cls.addonLeft}>{addonLeft}</div>
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				placeholder={placeholder}
				onBlur={onBlur}
				readOnly={readonly}
				{...otherProps}
			/>
			<div className={cls.addonRight}>{addonRight}</div>
		</div>
	);

	if (label) {
		return (
			<HStack max gap="8">
				<Text text={label} />
				{input}
			</HStack>
		);
	}

	return input;
});
