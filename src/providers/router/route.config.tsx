import { About } from '@/pages/About';
import { Main } from '@/pages/Main';
import { Shop } from '@/pages/Shop';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  // roles?: UserRole[];
};

export const routes: AppRoutesProps[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
    // authOnly: true,
  },
  {
    path: '/shop',
    element: <Shop />,
    authOnly: true,
  },
  // {
  //   path: '/admin',
  //   element: <Admin />,
  //   authOnly: true,
  //   roles: [UserRole.ADMIN, UserRole.OWNER],
  // },
];
