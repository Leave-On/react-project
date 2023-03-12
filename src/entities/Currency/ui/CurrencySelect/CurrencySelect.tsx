import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: () => void;
  readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: 'Euro' },
    { value: Currency.RUB, content: 'Rubbles' },
    { value: Currency.USD, content: 'US dollars' },
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation()



    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose currency') as string}
            options = {options}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
})