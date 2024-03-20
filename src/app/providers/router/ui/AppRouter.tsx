import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>&apos;Loading...&apos;</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    element={<div className="page-wrapper">{element}</div>}
                    key={path}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);
