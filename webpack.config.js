const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Tu app de fotos de mascotas',
            short_name: 'Petgram 🐶',
            description: 'Con Petgram puedes enconntrar fotos de animales domésticos muy fácilmente',
            background_color: '#fff',
            theme_color: '#b2a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: 'any maskable'
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5000000,
            runtimeCaching: [
              {
                urlPattern: new RegExp(
                  'https://(res.cloudinary.com|images.unsplash.com)'
                ),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'images'
                }
              },
              {
                urlPattern: new RegExp(
                  'https://petgram-api-edgaredg.vercel.app'
                ),
                handler: 'NetworkFirst',
                options: {
                  cacheName: 'api'
                }
              }
            ]
          })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}