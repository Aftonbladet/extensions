# Actions for `roc-package-web-app-dev`

## Actions
* [roc-abstract-package-base-dev](#roc-abstract-package-base-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)
* [roc-package-webpack-dev](#roc-package-webpack-dev)
  * [build-webpack](#build-webpack)
  * [run-build-command](#run-build-command)
  * [run-dev-command](#run-dev-command)
* [roc-plugin-start](#roc-plugin-start)
  * [register-runtime](#register-runtime)
* [roc-package-webpack-node-dev](#roc-package-webpack-node-dev)
  * [build-webpack](#build-webpack-1)
  * [create-watchers](#create-watchers)
  * [get-webpack-targets](#get-webpack-targets)
* [roc-package-webpack-web-dev](#roc-package-webpack-web-dev)
  * [build-webpack](#build-webpack-2)
  * [create-watchers](#create-watchers-1)
  * [get-webpack-targets](#get-webpack-targets-1)
* [roc-package-web-app](#roc-package-web-app)
  * [register-runtime](#register-runtime-1)
* [roc-plugin-style-css](#roc-plugin-style-css)
  * [build-webpack](#build-webpack-3)
* [roc-plugin-browsersync](#roc-plugin-browsersync)
  * [server-started](#server-started)
* [roc-plugin-assets-images](#roc-plugin-assets-images)
  * [build-webpack](#build-webpack-4)
* [roc-package-web-app-dev](#roc-package-web-app-dev)
  * [build-webpack](#build-webpack-5)
  * [dev-process-created](#dev-process-created)

## roc-abstract-package-base-dev

### after-clean

Runs after clean command is executed. Logs that the action has been completed successfully.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `after-clean`  

### before-clean

Runs before clean command is executed. Returns an array of paths that should be removed.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `before-clean`  

## roc-package-webpack-dev

### build-webpack

Adds base Webpack configuration and read webpack from the configuration.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

### run-build-command

Build with Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  

### run-dev-command

Run in development mode using Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  

## roc-plugin-start

### register-runtime

Adds the base runtime. Will resolve node paths and enable source map support.

__Connects to extension:__ `roc-plugin-start`  
__Connects to hook:__ `register-runtime`  

## roc-package-webpack-node-dev

### build-webpack

Adds configuration needed for building for Node.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

### create-watchers

Adds a watcher for automatic reload on change.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `create-watchers`  

### get-webpack-targets

Adds __node__ as a valid Webpack target.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `get-webpack-targets`  

## roc-package-webpack-web-dev

### build-webpack

Adds configuration need for web builds for Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

### create-watchers

Adds a web watcher using Webpack Dev Server.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `create-watchers`  

### get-webpack-targets

Adds __web__ as a valid Webpack target.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `get-webpack-targets`  

## roc-package-web-app

### register-runtime

__Connects to extension:__ `roc-plugin-start`  
__Connects to hook:__ `register-runtime`  

## roc-plugin-style-css

### build-webpack

Adds CSS support.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

## roc-plugin-browsersync

### server-started

Adds a Browsersync instance.

__Connects to extension:__ Not specified  
__Connects to hook:__ `server-started`  

## roc-plugin-assets-images

### build-webpack

Adds image support. Also makes `url-loader` and `file-loader` available in the module scope.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

## roc-package-web-app-dev

### build-webpack

Adds needed configuration to being able to build web applications.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

### dev-process-created

__Connects to extension:__ Not specified  
__Connects to hook:__ `dev-process-created`  
