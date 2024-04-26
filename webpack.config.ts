import path from 'path';
import { Configuration } from 'webpack';
import { BuildPaths, EnvVariables } from './config/webpack/types/build';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

module.exports = (env: EnvVariables): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const mode = env.mode || 'production';
  const port = env.port || 3000;

  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const openAnalyzer = env?.analyzer ?? false;

  return buildWebpackConfig({
    mode,
    port,
    paths,
    isDev,
    isProd,
    openAnalyzer,
  });
};
