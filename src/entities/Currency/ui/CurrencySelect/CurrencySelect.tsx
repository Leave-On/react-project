import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesign/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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
];

export const CurrencySelect = memo(
	({ className, value, onChange, readonly }: CurrencySelectProps) => {
		const { t } = useTranslation('profile');

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Currency);
			},
			[onChange],
		);

		const props = {
			className,
			onChange: onChangeHandler,
			value,
			defaultValue: t('Choose currency'),
			items: options,
			readonly,
			direction: 'top right' as const,
			label: t('Choose currency'),
		};

		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={<ListBoxDeprecated {...props} />}
				on={<ListBox {...props} />}
			/>
		);
	},
);
