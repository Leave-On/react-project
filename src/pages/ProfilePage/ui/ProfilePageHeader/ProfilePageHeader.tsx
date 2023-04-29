import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(()=> {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(()=> {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Text title={t('Profile') as string} />
            {canEdit && (
                <>
                    { readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINED}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <HStack gap={'8'}>
                                <Button
                                    theme={ButtonTheme.OUTLINED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <>
                                    <Button
                                        theme={ButtonTheme.OUTLINED_RED}
                                        onClick={onSave}
                                    >
                                        {t('Save')}
                                    </Button>
                                </>
                            </HStack>
                        )
                    }
                </>
            )}

        </HStack>
    );
}