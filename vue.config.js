module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3030",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ["*"],
          }),
        ],
      },
    },
  },
};
