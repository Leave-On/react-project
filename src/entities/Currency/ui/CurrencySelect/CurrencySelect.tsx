import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: 'Euro' },
    { value: Currency.RUB, content: 'Rubbles' },
    { value: Currency.USD, content: 'US dollars' },
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Choose currency') as string}
            items={options}
            readonly={readonly}
            direction="top right"
            label={t('Choose currency') as string}
        />
    )


    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Choose currency') as string}
    //         options = {options}
    //         value={value}
    //         onChange={onChange}
    //         readonly={readonly}
    //     />
    // );
})