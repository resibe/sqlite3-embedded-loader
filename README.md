# SQLite3 Embedded Loader

This plugin allows you to bundle an entire server powered by Express/Fastify + NestJS + typeorm/knex or others into a single JavaScript executable, eliminating the need for a `node_modules` folder.

## Features
- Bundles `sqlite3` into an additional `.node` file in your `dist` folder.
- Uses `node-loader` to load the `sqlite3.node` file.

## Supported Versions
- **SQLite3**: 5.1.7
- **SQLite3 Embedded Loader**: 1.0.0

Please note that this is an alternative to the `sqlite3-loader` package, which allowed bundling `sqlite3` with webpack on `sqlite3` versions <= 5.1.6. Unfortunately, cross-compilation is not supported by the bindings of `node-sqlite3`.

```js
//webpack.config.js
      module: {
        rules: [
          {
            test: /.node$/,
            loader: 'node-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            test: /sqlite3-binding\.js$/,
            loader: 'sqlite3-embedded-loader',
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            use: [
              {
                loader: 'babel-loader',
              },
            ],
          }
        ]
      }
```