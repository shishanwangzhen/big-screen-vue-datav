const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const px2rem = require('postcss-px2rem')
 
const postcss = px2rem({
  remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@',resolve('src'))
      .set('@asset',resolve('src/assets'))
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }

}