module.exports = {
  description () {
    return 'generates a smart relay (container) component'
  },

  fileMapTokens () {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
