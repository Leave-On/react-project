import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input';
import { useSelector,  } from 'react-redux';
import { memo, useCallback,  } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { TextTheme } from '@/shared/ui/Text';
import { Text } from '../../../../shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';


export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)



    const dispatch = useAppDispatch()
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])



    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
        //@ts-ignore
            onSuccess()
        }


    }, [dispatch, onSuccess, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Auth from') as string} />
                {error && <Text text={t('Wrong Login or password') as string} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter name') as string}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password') as string}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINED}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    { t('Enter') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
})

export default LoginForm
