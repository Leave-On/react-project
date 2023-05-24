import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesign/AppLink';
import { Icon } from '@/shared/ui/redesign/Icon';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation('translation');
	const isAuth = useSelector(getUserAuthData);

	if (!isAuth && item.authOnly) {
		return null;
	}

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<AppLinkDeprecated
					to={item.path}
					theme={AppLinkTheme.SECONDARY}
					className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
				>
					<item.Icon className={cls.icon} />
					<span className={cls.link}>{t(item.text)}</span>
				</AppLinkDeprecated>
			}
			on={
				<AppLink
					to={item.path}
					activeClassname={cls.active}
					className={classNames(
						cls.itemRedesigned,
						{ [cls.collapsedRedesigned]: collapsed },
						[],
					)}
				>
					<Icon Svg={item.Icon} />
					<span className={cls.link}>{t(item.text)}</span>
				</AppLink>
			}
		/>
	);
});
