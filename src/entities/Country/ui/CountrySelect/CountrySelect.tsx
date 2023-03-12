import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo } from 'react';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: () => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation()



    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose country') as string}
            options = {options}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
})