# Commands for `roc-package-base-dev`

## General Information
All commands can be called with some additional options as can be seen below.

### General options

| Name            | Description                                                                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -c, --config    | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --directory | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help      | Output usage information.                                                                                     | No       |
| -V, --verbose   | Enable verbose mode.                                                                                          | No       |
| -v, --version   | Output version number.                                                                                        | No       |

## Commands
* [build](#build)
* [clean](#clean)
* [dev](#dev)
* [list-settings](#list-settings)
* [markdown-actions](#markdown-actions)
* [markdown-hooks](#markdown-hooks)
* [markdown-settings](#markdown-settings)

## build
__Used to build the current project.__

```
roc-package-base-dev build
```

## clean
__Cleans the current project.__

```
roc-package-base-dev clean
```

### Settings options
* [build](/packages/roc-package-base-dev/docs/Settings.md#build)

## dev
__Used to start the current project in development mode.__

```
roc-package-base-dev dev
```

## list-settings
__Prints all the available settings that can be changed.__

```
roc-package-base-dev list-settings
```

## markdown-actions
__Prints all the registered actions in a markdown format.__

```
roc-package-base-dev markdown-actions
```

## markdown-hooks
__Prints all the registered hooks in a markdown format.__

```
roc-package-base-dev markdown-hooks
```

## markdown-settings
__Prints all the available settings that can be changed in a markdown format.__

```
roc-package-base-dev markdown-settings
```
