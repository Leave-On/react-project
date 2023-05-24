import { Currency } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>


interface InputProps extends  HTMLInputProps {
  className?: string;
  value?: string | number | Currency;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props


    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight)
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    type={type}
                    value={value}
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
})