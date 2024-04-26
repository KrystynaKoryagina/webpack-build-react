export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

// export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  isProd: boolean;
  openAnalyzer?: boolean;
  // platform: BuildPlatform;
}

export interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
  // platform?: BuildPlatform;
}
