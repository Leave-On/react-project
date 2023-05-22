import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassname?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassname = '',
        ...otherProps
    } = props


    return (
        <NavLink
            to={to}
            className={({isActive}) => classNames(
                cls.AppLink,
                {[activeClassname]: isActive},
                [className, cls[variant]]
            )}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
})