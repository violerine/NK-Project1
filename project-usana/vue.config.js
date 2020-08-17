module.exports = {
    publicPath: '/',
    chainWebpack: config => {
      config.module.rule('zip')
        .test(/\.(zip)(\?.*)?$/)
        .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'assets/pdf/[name].[hash:8].[ext]'
          })
      config.module.rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/pdf/[name].[hash:8].[ext]'
         })
  
    }
  }