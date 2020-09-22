const path = require('path');
const envConfig = require('dotenv').config({
  path: path.resolve(__dirname, `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`),
});

function env(key) {
  return envConfig.parsed[key] || process.env[key];
}

module.exports = {
  type: env('DB_DIALECT'),
  database: env('DB_DATABASE'),
  logger: 'advanced-console',
  logging: ['warn', 'error'],
  entities: ['dist/**/*.entity.js'],
  host: env('DB_HOST'),
  port: env('DB_PORT'),
  username: env('DB_USERNAME'),
  password: env('DB_PASSWORD'),
  synchronize: true,
};
