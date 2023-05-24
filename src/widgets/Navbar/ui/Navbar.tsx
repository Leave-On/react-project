import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationsButton } from '@/features/NotificationsButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesign/Stack';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation('translation');

	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if (authData) {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				off={
					<header className={classNames(cls.Navbar, {}, [className])}>
						<Text
							className={cls.appName}
							title={t('React PrOjEcT') as string}
							theme={TextTheme.INVERTED}
						/>
						<AppLink
							to={getRouteArticleCreate()}
							theme={AppLinkTheme.SECONDARY}
							className={cls.createBtn}
						>
							{t('Create article')}
						</AppLink>
						<HStack gap="16" className={cls.actions}>
							<NotificationsButton />
							<AvatarDropdown />
						</HStack>
					</header>
				}
				on={
					<header className={classNames(cls.NavbarRedesigned, {}, [className])}>
						<HStack gap="16" className={cls.actions}>
							<NotificationsButton />
							<AvatarDropdown />
						</HStack>
					</header>
				}
			/>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
				{t('Войти')}
			</Button>
			{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
		</div>
	);
});
