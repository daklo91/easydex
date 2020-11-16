module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_typeColor.scss";`
      }
    }
  }
}
