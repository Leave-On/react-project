import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
   className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            Admin panel
        </Page>
    );
}

export default AdminPanelPage