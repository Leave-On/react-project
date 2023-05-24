import AppSvg from '@/shared/assets/icons/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from '../../redesign/Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
	className?: string;
	size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
	const { className, size } = props;

	return (
		<HStack max justify="center" className={classNames(cls.AppLogo, {}, [className])}>
			<AppSvg width={size} height={size} color={'black'} />
			<div className={cls.gradientBig}></div>
			<div className={cls.gradientSmall}></div>
		</HStack>
	);
});
