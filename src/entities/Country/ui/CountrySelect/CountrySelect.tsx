import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange: () => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile')

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChange}
            value={value}
            defaultValue={t('Choose country') as string}
            items={options}
            readonly={readonly}
            direction="top right"
            label={t('Choose country') as string}
        />
    )
})