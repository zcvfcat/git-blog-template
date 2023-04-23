const { env } = require('process')

/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: env.NODE_ENV !== 'production',
}
