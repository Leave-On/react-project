import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesign/Avatar';
import { Card } from '@/shared/ui/redesign/Card';
import { Input } from '@/shared/ui/redesign/Input';
import { Skeleton } from '@/shared/ui/redesign/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesign/Stack';
import { Text } from '@/shared/ui/redesign/Text';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from './ProfileCard';
import cls from './ProfileCard.module.scss';

export const ProfileCardRedesignedError = () => {
	const { t } = useTranslation('Profile');

	return (
		<HStack max justify={'center'} className={cls.error}>
			<Text
				variant="primary"
				title={t('Error appeared') as string}
				text={t('Try to reload page') as string}
				align="center"
			/>
		</HStack>
	);
};

export const ProfileCardRedesignedSkeleton = () => {
	return (
		<Card padding="24" max>
			<VStack gap="32">
				<HStack max justify="center">
					<Skeleton border={'50%'} width={128} height={128} />
				</HStack>
				<HStack gap="32" max>
					<VStack gap="16" max>
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
					</VStack>
					<VStack gap="16" max>
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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

	return (
		<Card max className={classNames(cls.ProfileCardRedesigned, {}, [className])}>
			<VStack gap="32">
				{data?.avatar && (
					<HStack max justify={'center'} className={cls.avatarWrapper}>
						<Avatar src={data?.avatar} size={128} />
					</HStack>
				)}
				<HStack gap="24" max>
					<VStack gap="16" max>
						<Input
							value={data?.firstname}
							label={t('Firstname') as string}
							onChange={onChangeFirstname}
							readonly={readonly}
							data-testid={'ProfileCard.FirstnameInput'}
						/>
						<Input
							value={data?.lastname}
							label={t('Lastname') as string}
							onChange={onChangeLastname}
							readonly={readonly}
							data-testid={'ProfileCard.LastnameInput'}
						/>
						<Input
							value={data?.age || ''}
							label={t('Age') as string}
							onChange={onChangeAge}
							readonly={readonly}
							data-testid={'ProfileCard.AgeInput'}
						/>
						<Input
							value={data?.city}
							label={t('City') as string}
							onChange={onChangeCity}
							readonly={readonly}
							data-testid={'ProfileCard.CityInput'}
						/>
					</VStack>
					<VStack gap="16" max>
						<Input
							value={data?.username}
							label={t('Username') as string}
							onChange={onChangeUsername}
							readonly={readonly}
							data-testid={'ProfileCard.UsernameInput'}
						/>
						<Input
							value={data?.avatar}
							label={t('Profile picture') as string}
							onChange={onChangeAvatar}
							readonly={readonly}
							data-testid={'ProfileCard.AvatarInput'}
						/>
						<CurrencySelect
							value={data?.currency}
							onChange={onChangeCurrency}
							readonly={readonly}
							data-testid={'ProfileCard.CurrencyInput'}
						/>
						<CountrySelect
							value={data?.country}
							onChange={onChangeCountry}
							readonly={readonly}
							data-testid={'ProfileCard.CountryInput'}
						/>
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
};
