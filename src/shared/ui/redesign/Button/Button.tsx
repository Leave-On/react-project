import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outlined' | 'filled'


export type ButtonSize  = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        disabled,
        children,
        variant = 'outlined' ,
        square,
        fullWidth,
        size = 'm',
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})