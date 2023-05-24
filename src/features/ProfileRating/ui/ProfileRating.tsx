import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';

export interface ProfileRatingProps {
	className?: string;
	profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
	const { className, profileId } = props;
	const { t } = useTranslation();
	const userData = useSelector(getUserAuthData);

	const { data } = useGetProfileRating({
		profileId,
		userId: userData?.id ?? '',
	});

	console.log(data?.[0].rate);

	const rating = data?.[0];

	const [rateProfileMutation] = useRateProfile();

	const handleRateProfile = useCallback(
		(starCount: number) => {
			try {
				rateProfileMutation({
					userId: userData?.id ?? '',
					profileId,
					rate: starCount,
				});
				console.log('rated');
			} catch (e) {
				console.log(e);
			}
		},
		[profileId, rateProfileMutation, userData?.id],
	);

	const onAccept = useCallback(
		(starCount: number) => {
			handleRateProfile(starCount);
		},
		[handleRateProfile],
	);

	return (
		<RatingCard
			onAccept={onAccept}
			rate={rating?.rate}
			className={className}
			title={t('Rate this profile!')}
			afterRatingText={t('Thanks for rating this profile!') as string}
		/>
	);
});
