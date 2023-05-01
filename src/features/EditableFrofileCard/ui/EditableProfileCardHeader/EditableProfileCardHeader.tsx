import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
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
                            data-testid={'EditableProfileCardHeader.EditBtn'}
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <HStack gap={'8'}>
                                <Button
                                    theme={ButtonTheme.OUTLINED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelBtn'}
                                >
                                    {t('Cancel')}
                                </Button>
                                <>
                                    <Button
                                        theme={ButtonTheme.OUTLINED_RED}
                                        onClick={onSave}
                                        data-testid={'EditableProfileCardHeader.SaveBtn'}
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