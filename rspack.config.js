const path = require('path');
module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'less-loader'
                }
            ],
            type: 'css'
        }
    ]
  },
  resolve: {
    alias: {
        "@": path.resolve(__dirname, './src'),
        "assets$": path.resolve(__dirname, './src/assets')
    }
  },
  builtins: {
    html: [{ template: './src/index.html'}]
  }

};