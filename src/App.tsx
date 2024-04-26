import { Link } from 'react-router-dom';
import no_image from '@/assets/no_image.png';
import no_image2 from '@/assets/no-image.webp';
import Icon from '@/assets/grid.svg';
import { AppRouter } from '@/providers/router/AppRouter';
import classes from './App.module.scss';

export const App = () => {
  return (
    <>
      <div data-testId="AppId" className={classes.block}>
        <img width={100} height={100} src={no_image} />
        <img width={100} height={100} src={no_image2} />
        <div className={classes.icon}>
          <Icon width={50} height={50} />
        </div>

        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <AppRouter />
    </>
  );
};
