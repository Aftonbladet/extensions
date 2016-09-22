# Hooks for `roc-package-module-dev`

## Hooks
* [roc](#roc)
  * [update-settings](#update-settings)
* [roc-abstract-package-base-dev](#roc-abstract-package-base-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)
  * [run-build-command](#run-build-command)
  * [run-dev-command](#run-dev-command)
* [roc-package-module-dev](#roc-package-module-dev)
  * [after-clean](#after-clean-1)
  * [babel-load-plugins](#babel-load-plugins)
  * [babel-load-presets](#babel-load-presets)

## roc

### update-settings

Expected to return new settings that should be merged with the existing ones.

Makes it possible to modify the settings object before a command is started and after potential arguments from the command line and configuration file have been parsed. This is a good point to default to some value if no was given or modify something in the settings.

__Initial value:__ _Nothing_  
__Expected return value:__ `{}`

#### Arguments

| Name        | Description                                                                  | Type       | Required | Can be empty |
| ----------- | ---------------------------------------------------------------------------- | ---------- | -------- | ------------ |
| getSettings | A function that returns the settings after the context has been initialized. | `Function` | No       |              |

## roc-abstract-package-base-dev

### after-clean

Hook point for adding code that runs after the clean command is invoked.

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

### before-clean

Hook point for adding code that runs before the clean command is invoked.

__Initial value:__ _Nothing_  
__Expected return value:__ `[String]`

### run-build-command

Use to add things that should react to the build command being called.

__Initial value:__ _Nothing_  
__Expected return value:__ `Function`

#### Arguments

| Name    | Description                                                                            | Type       | Required | Can be empty |
| ------- | -------------------------------------------------------------------------------------- | ---------- | -------- | ------------ |
| targets | The targets to build for, will be based on settings or a possible argument if defined. | `[String]` | Yes      | No           |

### run-dev-command

Use to add things that should react to the dev command being called.

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

#### Arguments

| Name    | Description                                                                           | Type       | Required | Can be empty |
| ------- | ------------------------------------------------------------------------------------- | ---------- | -------- | ------------ |
| targets | The targets use for dev, will be based on settings or a possible argument if defined. | `[String]` | Yes      | No           |

## roc-package-module-dev

### after-clean

Expected to return a presets to add to the array of presets to use.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

#### Arguments

| Name   | Description                                       | Type     | Required | Can be empty |
| ------ | ------------------------------------------------- | -------- | -------- | ------------ |
| target | The target, will by default be either es5 or es6. | `String` | No       | Yes          |

### babel-load-plugins

Expected to return a concatenated array with the final presets to use.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

#### Arguments

| Name   | Description                                       | Type     | Required | Can be empty |
| ------ | ------------------------------------------------- | -------- | -------- | ------------ |
| target | The target, will by default be either es5 or es6. | `String` | No       | Yes          |

### babel-load-presets

Expected to return a presets to add to the array of presets to use.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

#### Arguments

| Name   | Description                                       | Type     | Required | Can be empty |
| ------ | ------------------------------------------------- | -------- | -------- | ------------ |
| target | The target, will by default be either es5 or es6. | `String` | No       | Yes          |
