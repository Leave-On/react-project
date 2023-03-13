import { getUserAuthData } from 'entities/User';
import  { useMemo, Suspense, memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => Object.values(RouteConfig).filter(r =>{
        if(r.authnOnly && !isAuth) {
            return false
        }
        return true
    }), [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);