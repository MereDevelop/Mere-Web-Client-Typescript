import path from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const configuration: webpack.Configuration = {
  // 모듈 해석 방법 설정
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@commons': path.resolve(__dirname, '../src/commons'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@configs': path.resolve(__dirname, '../src/configs'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@custom/types': path.resolve(__dirname, '../src/custom/types'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@routes': path.resolve(__dirname, '../src/routes'),
    },
  },

  // 진입점
  entry: './src/index',

  // 로더
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  // 플러그인
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({ React: 'react', process: 'process/browser' }),
  ],
};

export default configuration;
