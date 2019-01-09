module.exports = {
    module: {
      rules: [
        {
            test: /\.md$/,
            use: [
              {
                loader: 'markdown-loader',
                options: {
                  pedantic: true,
                  renderer: markdownRenderer
                }
              }
            ]
          }
      ]
    }
  }