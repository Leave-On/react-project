import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

interface ForbiddenPagePageProps {
	className?: string;
}

const ForbiddenPage = (props: ForbiddenPagePageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<Page data-testid="ForbiddenPage" className={classNames('', {}, [className])}>
			{t('No acccess')}
		</Page>
	);
};

export default ForbiddenPage;
