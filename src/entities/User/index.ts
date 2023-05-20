export { UserRole } from './model/consts/consts'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
export { useJsonSettings } from './model/selectors/jsonSettings'
export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors'
export { initAuthData } from './model/services/initAuthData'
export { saveJsonSettings } from './model/services/saveJsonSettings'
export {
    userActions, userReducer
} from './model/slice/userSlice'
export type {
    User,
    UserScheme
} from './model/types/user'
