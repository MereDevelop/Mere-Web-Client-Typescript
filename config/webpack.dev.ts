import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import RefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import common from './webpack.common';

const env = JSON.stringify(
  dotenv.config({ path: path.resolve(__dirname, '../.env') }).parsed,
);

const configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new RefreshWebpackPlugin(),
    new webpack.DefinePlugin({ 'process.env': env }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    open: true,
    compress: true, // 모든 항목을 `gzip`으로 압축
    historyApiFallback: true, // 존재하지 않는 "URL" 접근 시 "index.html"로 대체
    hot: true, // "Hot Mourle Replacement" 사용
  },
  watchOptions: {
    ignored: /node_modules/, // 감시하지 않을 항목 설정
  },
};

export default merge(common, configuration);
