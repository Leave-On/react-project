import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfileRating.module.scss';

interface ProfileRatingProps {
   className?: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ProfileRating, {}, [className])}>

        </div>
    );
})