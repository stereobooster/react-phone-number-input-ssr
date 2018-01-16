# Webpack issue

Can not reproduc issue reported in https://github.com/samccone/bundle-buddy/issues/29#issuecomment-356245392

```
yarn build

...

  160852 Jan 16 12:22 0.a879c613.chunk.js
     474 Jan 16 12:22 0.a879c613.chunk.js.map
  167430 Jan 16 12:22 bundle.1bb261cb.js
    5107 Jan 16 12:22 bundle.1bb261cb.js.map
```

TODO: need to fix sourcemaps https://github.com/jaredpalmer/razzle/issues/290#issuecomment-357935845

```
source-map-explorer build/public/static/js/bundle.1bb261cb.js
Your source map only contains one source ( webpack:/webpack/bootstrap 6a97ef73520e2ab54233 )
This typically means that your source map doesn't map all the way back to the original sources.
This can happen if you use browserify+uglifyjs, for example, and don't set the --in-source-map flag to uglify.
See  https://github.com/danvk/source-map-explorer/blob/master/README.md#generating-source-maps
```
