import AppSvg from '@/shared/assets/icons/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
   className?: string;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack max justify='center' className={classNames(cls.AppLogo, {}, [className])}>
            <div className={cls.gradientBig} ></div>
            <div className={cls.gradientSmall} ></div>
            <AppSvg />
        </HStack>
    );
})