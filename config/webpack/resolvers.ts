import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/build';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src,
    },
  };
};
