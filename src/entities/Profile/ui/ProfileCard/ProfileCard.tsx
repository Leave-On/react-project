import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCountry?: (country?: Country) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeUsername,
        onChangeAvatar
    } = props

    if (isLoading) {
        return(
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>

        )
    }

    if (error) {
        return(
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error appeared') as string}
                    text={t('Try to reload page') as string}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.header}>
            </div>
            <div className={cls.data}>
                {data?.avatar && <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} size={150} />
                </div>}
                <Input
                    value={data?.firstname}
                    placeholder={t('Your firstname') as string}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname') as string}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age || ''}
                    placeholder={t('Your age') as string}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                {/* <Input
                    value={data?.country}
                    placeholder={t('Your country') as string}
                    className={cls.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                /> */}
                <Input
                    value={data?.city}
                    placeholder={t('Your city') as string}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Your username') as string}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Upload your profile picture') as string}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>

        </div>
    );
}