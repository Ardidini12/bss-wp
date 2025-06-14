const rules = require('./webpack.rules');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

// Add rule for image files
rules.push({
  test: /\.(png|jpe?g|gif|webp|svg)$/i,
  type: 'asset/resource',
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  // Don't bundle native Node.js modules and WhatsApp Web.js
  externals: {
    'whatsapp-web.js': 'commonjs whatsapp-web.js',
    'puppeteer': 'commonjs puppeteer',
    'qrcode-terminal': 'commonjs qrcode-terminal'
  }
};
