import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINED = 'outlined',
	OUTLINED_RED = 'outlined_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	children?: ReactNode;
	fullWidth?: boolean;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
	const {
		className,
		disabled,
		children,
		theme = ButtonTheme.OUTLINED,
		square,
		fullWidth,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			className={classNames(cls.Button, mods, [className, cls[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
