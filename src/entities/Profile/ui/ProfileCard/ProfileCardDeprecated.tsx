import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesign/Stack';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from './ProfileCard';
import cls from './ProfileCard.module.scss';

export const ProfileCardDeprecatedLoader = () => {
	return (
		<HStack max justify={'center'} className={cls.loading}>
			<Loader />
		</HStack>
	);
};

export const ProfileCardDeprecatedError = () => {
	const { t } = useTranslation('Profile');
	return (
		<HStack max justify={'center'} className={cls.error}>
			<TextDeprecated
				theme={TextTheme.PRIMARY}
				title={t('Error appeared') as string}
				text={t('Try to reload page') as string}
				align={TextAlign.CENTER}
			/>
		</HStack>
	);
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const {
		className,
		data,
		readonly,
		onChangeLastname,
		onChangeFirstname,
		onChangeAge,
		onChangeCity,
		onChangeCountry,
		onChangeCurrency,
		onChangeUsername,
		onChangeAvatar,
	} = props;

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<VStack gap={'16'} max className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.header}></div>
			{data?.avatar && (
				<HStack max justify={'center'} className={cls.avatarWrapper}>
					<AvatarDeprecated src={data?.avatar} size={150} />
				</HStack>
			)}
			<InputDeprecated
				value={data?.firstname}
				placeholder={t('Your firstname') as string}
				className={cls.input}
				onChange={onChangeFirstname}
				readonly={readonly}
				data-testid={'ProfileCard.FirstnameInput'}
			/>
			<InputDeprecated
				value={data?.lastname}
				placeholder={t('Your lastname') as string}
				className={cls.input}
				onChange={onChangeLastname}
				readonly={readonly}
				data-testid={'ProfileCard.LastnameInput'}
			/>
			<InputDeprecated
				value={data?.age || ''}
				placeholder={t('Your age') as string}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
				data-testid={'ProfileCard.AgeInput'}
			/>
			<InputDeprecated
				value={data?.city}
				placeholder={t('Your city') as string}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
				data-testid={'ProfileCard.CityInput'}
			/>
			<InputDeprecated
				value={data?.username}
				placeholder={t('Your username') as string}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
				data-testid={'ProfileCard.UsernameInput'}
			/>
			<InputDeprecated
				value={data?.avatar}
				placeholder={t('Upload your profile picture') as string}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
				data-testid={'ProfileCard.AvatarInput'}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
				data-testid={'ProfileCard.CurrencyInput'}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
				data-testid={'ProfileCard.CountryInput'}
			/>
		</VStack>
	);
};
