import { EditableProfileCard } from '@/features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return null;
	}

	return (
		<Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
			{/* <ProfileRating profileId={id} /> */}
			<EditableProfileCard id={id} />
		</Page>
	);
};

export default ProfilePage;
