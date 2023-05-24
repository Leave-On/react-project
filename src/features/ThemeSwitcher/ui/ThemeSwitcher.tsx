import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/newTheme.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesign/Icon';

import { memo, useCallback } from 'react';

interface ThemeSwitcherProps {
	className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const dispatch = useAppDispatch();
	const onToggleHandler = useCallback(() => {
		toggleTheme((newTheme) => {
			dispatch(saveJsonSettings({ theme: newTheme }));
		});
	}, [dispatch, toggleTheme]);

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			off={
				<ButtonDeprecated
					theme={ButtonTheme.OUTLINED}
					className={classNames('', {}, [className])}
					onClick={onToggleHandler}
				>
					<IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
				</ButtonDeprecated>
			}
			on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
		/>
	);
});
