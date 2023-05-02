import { EditableFrofileCard } from 'features/EditableFrofileCard';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>()

    return (
        <Page className={classNames('', {}, [className])}>
            <EditableFrofileCard id={id}/>
        </Page>
    );
}

export default ProfilePage