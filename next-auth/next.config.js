/** @type {import('next').NextConfig} */
const {
  HOST
} = process.env

module.exports = {
  reactStrictMode: false,
  // env: {
  //   HOST,
  // },
  basePath: "/auth",
}
