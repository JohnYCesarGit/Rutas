// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Cambia esto según tu estructura de archivos
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Cambia 'dist' según tu preferencia
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'   },
            },
          ],
        },
      ],
    },
  };