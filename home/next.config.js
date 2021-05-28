const { BLOG_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/",
        destination: `${BLOG_URL}`,
      },
      {
        source: "/:path*",
        destination: `${BLOG_URL}/:path*`,
      },
    ];
  },
};
