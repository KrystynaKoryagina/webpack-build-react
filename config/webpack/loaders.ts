import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/build';
import { buildBabelLoader } from '../babel/babelLoader';

export const buildLoader = (options: BuildOptions): ModuleOptions['rules'] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  };

  const assets = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    type: 'asset/resource',
  };

  const scssLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // NOTE css-loader v7 css modules - undefined import. namedExport: false - fixed it
            namedExport: false,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const babelLoader = buildBabelLoader(options);

  /*
    // Use babel-loader or ts-loader
    // https://www.npmjs.com/package/ts-loader
    const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };
  */

  return [assets, scssLoader, babelLoader, svgLoader];
};
