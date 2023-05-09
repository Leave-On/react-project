import { EditableFrofileCard } from '@/features/EditableFrofileCard';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';

interface ProfilePageProps {
  className?: string;
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Page className={classNames('', {}, [className])}>
            {/* <ProfileRating profileId={id} /> */}
            <EditableFrofileCard id={id}/>
        </Page>
    );
}

export default ProfilePage