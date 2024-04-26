import webpack, { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/build';

export const buildPlugins = ({
  paths,
  isDev,
  isProd,
  openAnalyzer,
}: BuildOptions): Configuration['plugins'] => {
  let plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    // new webpack.DefinePlugin({
    //   __IS_DEV__: JSON.stringify(isDev),
    //   __API__: JSON.stringify(apiUrl),
    //   __PROJECT__: JSON.stringify(project),
    // }),
  ];

  if (isDev) {
    plugins = [
      ...plugins,
      new webpack.ProgressPlugin(),
      // Webpack plugin that runs TypeScript type checker on a separate process.
      // https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
          mode: 'write-references',
        },
      }),
      // Webpack plugin to enable "Fast Refresh" for React components.
      // https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin
      new ReactRefreshWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      // new CircularDependencyPlugin({
      //   exclude: /node_modules/,
      //   failOnError: true,
      // }),
    ];
  }

  if (isProd) {
    plugins = [
      ...plugins,
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, 'locales'),
            to: path.resolve(paths.output, 'locales'),
          },
        ],
      }),
    ];
  }

  return plugins;
};
