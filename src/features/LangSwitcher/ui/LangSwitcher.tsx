import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesign/Button';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation('translation');
	const toggleLang = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<ButtonDeprecated
					className={classNames('', {}, [className])}
					theme={ButtonTheme.CLEAR}
					onClick={toggleLang}
				>
					{t(short ? 'Короткий язык' : 'Язык')}
				</ButtonDeprecated>
			}
			on={
				<Button
					className={classNames('', {}, [className])}
					variant="clear"
					onClick={toggleLang}
				>
					{t(short ? 'Короткий язык' : 'Язык')}
				</Button>
			}
		/>
	);
});
