import { Configuration } from 'webpack';
import { BuildOptions } from './types/build';
import { buildPlugins } from './plugins';
import { buildLoader } from './loaders';
import { buildDevServer } from './devServer';
import { buildResolvers } from './resolvers';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'eval-cheap-source-map' : undefined,
  };
};
