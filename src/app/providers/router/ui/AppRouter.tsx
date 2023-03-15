import  { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRouteProps } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {

    const renderWithWraper = useCallback((route: AppRouteProps) => {

        const element = (
            <div className='page-wrapper'>
                {route.element}
            </div>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authnOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(renderWithWraper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);