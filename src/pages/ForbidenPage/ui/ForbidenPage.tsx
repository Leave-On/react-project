import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ForbidenPagePageProps {
   className?: string;
}

const ForbidenPage = (props: ForbidenPagePageProps) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            {t('No acccess')}
        </Page>
    );
}

export default ForbidenPage