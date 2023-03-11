import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль') as string} />
                <Button theme={ButtonTheme.OUTLINED} className={cls.editBtn}>{t('Редактировать')}</Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.firstname} placeholder={t('Ваше имя') as string} className={cls.input} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия') as string} className={cls.input} />
            </div>

        </div>
    );
}