const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = function makeWebpackConfig(options) {
  const entry = {
    main: './src/index.js',
  };

  const defaultLoaders = [
    { test: /\.json5$/, use: ['json5-loader'] },
    { test: /\.txt$/, use: ['raw-loader'] },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    },
    { test: /\.html$/, use: ['html-loader'] },

    // font awesome
    {
      test: /\.woff2?(\?v=\d+\.\d+\.\d+|\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+|\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
        },
      },
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+|\?.*)?$/,
      use: ['file-loader'],
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+|\?.*)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/svg+xml',
        },
      },
    },
  ];
  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  };
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  };
  let stylesheetLoaders = [
    {
      test: /\.css$/,
      use: [cssLoader, postCssLoader],
    },
    {
      test: /\.scss$/,
      use: [
        cssLoader,
        postCssLoader,
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            outputStyle: 'expanded',
            sourceMapContents: true,
          },
        },
      ],
    },
  ];

  // var publicPath = options.devServer
  //   ? 'http://localhost:2992/assets/'
  //   : '/assets/';
  const publicPath = '/_assets/';

  const output = {
    path: path.join(__dirname, 'public', '_assets'),
    publicPath,
    filename: `[name].js${(options.longTermCaching ? '?[chunkhash]' : '')}`,
    chunkFilename: (options.devServer ? '[id].js' : '[name].js') + (options.longTermCaching ? '?[chunkhash]' : ''),
    sourceMapFilename: 'debugging/[file].map',
    pathinfo: options.debug,
  };
  const excludeFromStats = [
    // /node_modules[\\/]angular[\\/]/,
  ];

  function statsPlugin() {
    this.hooks.done.tap('statsPlugin', (stats) => {
      const jsonStats = stats.toJson({
        chunkModules: true,
        exclude: excludeFromStats,
      });
      jsonStats.publicPath = publicPath;
      if (!fs.existsSync(path.join(__dirname, '..', 'build'))) {
        fs.mkdirSync(path.join(__dirname, '..', 'build'));
      }
      if (!options.prerender) {
        fs.writeFileSync(path.join(__dirname, 'build', 'stats.json'), JSON.stringify(jsonStats));
      } else {
        fs.writeFileSync(path.join(__dirname, 'build', 'server', 'stats.json'), JSON.stringify(jsonStats));
      }
    });
  }

  const plugins = [];

  if (!options.devServer) {
    plugins.push(statsPlugin);
  }

  const alias = {};
  const externals = [];

  stylesheetLoaders = stylesheetLoaders.map((loaderIn) => {
    const loader = Object.assign({}, loaderIn);
    delete loader.use;

    if (options.isServer) {
      loader.use = ['null-loader'];
    } else if (options.separateStylesheet) {
      loader.loader = [MiniCssExtractPlugin.loader].concat(loaderIn.use);
    } else {
      loader.use = ['style-loader', ...loaderIn.use];
    }
    return loader;
  });

  if (options.separateStylesheet) {
    plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `[name].css${options.longTermCaching ? '?[contenthash]' : ''}`,
      chunkFilename: '[id].css',
    }));
  }
  const definitions = {
    'process.env.NODE_ENV': options.debug ? JSON.stringify('development') : JSON.stringify('production'),
  };

  plugins.push(new webpack.DefinePlugin(definitions));

  let jsRules;

  if (options.cover) {
    jsRules = [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.test\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ];
  } else {
    jsRules = [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ];
  }

  return {
    mode: options.mode || 'development',
    entry,
    output,
    target: 'web',
    module: {
      rules: []
        .concat(jsRules)
        .concat(defaultLoaders)
        .concat(stylesheetLoaders),
    },
    devtool: options.devtool,
    externals,
    resolve: {
      modules: [
        'node_modules',
      ],
      extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'jsnext:main', 'main'],
      alias,
    },
    plugins,
    devServer: {
      stats: {
        cached: false,
        exclude: excludeFromStats,
      },
    },
  };
};
