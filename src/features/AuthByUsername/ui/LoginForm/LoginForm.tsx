import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/Text';
import { Text } from '../../../../shared/ui/Text/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateScheme';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)



    const dispatch = useDispatch()
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])



    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Auth from')} />
                {error && <Text text={t('Wrong Login or password')} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter name')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password')}
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
