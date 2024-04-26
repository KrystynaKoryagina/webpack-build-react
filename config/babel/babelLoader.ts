import { BuildOptions } from 'config/webpack/types/build';
import { removeAttributesPlugin } from './plugins/removeAttributesPlugin';

export const buildBabelLoader = ({ isDev, isProd }: BuildOptions) => {
  let plugins: unknown[] = [];

  if (isDev) {
    plugins = [...plugins, require.resolve('react-refresh/babel')];
  }

  if (isProd) {
    plugins = [
      ...plugins,
      [removeAttributesPlugin, { props: ['data-testId'] }],
    ];
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: { plugins },
    },
  };
};
