import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
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
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        disabled,
        children,
        theme = ButtonTheme.OUTLINED,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})