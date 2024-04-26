import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './route.config';

export const AppRouter = () => (
  <Suspense fallback="">
    <Routes>
      {routes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  </Suspense>
);
