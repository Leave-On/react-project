import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { Profile } from '../../model/types/profile';
import {
	ProfileCardDeprecated,
	ProfileCardDeprecatedError,
	ProfileCardDeprecatedLoader,
} from './ProfileCardDeprecated';
import {
	ProfileCardRedesigned,
	ProfileCardRedesignedError,
	ProfileCardRedesignedSkeleton,
} from './ProfileCardRedesigned';

export interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeLastname?: (value?: string) => void;
	onChangeFirstname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeCountry?: (country: Country) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { isLoading, error } = props;

	if (isLoading) {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={<ProfileCardDeprecatedLoader />}
				on={<ProfileCardRedesignedSkeleton />}
			/>
		);
	}

	if (error) {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={<ProfileCardDeprecatedError />}
				on={<ProfileCardRedesignedError />}
			/>
		);
	}

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={<ProfileCardDeprecated {...props} />}
			on={<ProfileCardRedesigned {...props} />}
		/>
	);
};
