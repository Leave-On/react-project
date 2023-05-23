import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import UserIcon from '../../../assets/icons/user-avatar.svg';
import { AppImage } from '../../redesign/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
        fallbackInverted
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return{
            width: size,
            height: size
        }
    }, [size])

    const fallback = <Skeleton width={size} height={size} border={'50%'}/>
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
}