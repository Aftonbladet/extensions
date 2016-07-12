# Commands for `roc-abstract-package-base-dev`

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
* [development](#development)
    * [build](#build)
    * [clean](#clean)
    * [dev](#dev)
* [meta](#meta)
    * [docs](#docs)
    * [list-settings](#list-settings)

## development
__Project development__

```
roc development <command>
```
Commands for development purposes.


### build
__Used to build the current project.__

```
roc development build [targets]
```

#### Arguments
| Name    | Description                                                                      | Default | Type       | Required | Can be empty |
| ------- | -------------------------------------------------------------------------------- | ------- | ---------- | -------- | ------------ |
| targets | The targets the project should be built for, overrides the settings if provided. |         | `[String]` | No       | Yes          |

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-core/extensions/roc-abstract-package-base-dev/docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev

### clean
__Cleans the current project.__

```
roc development clean
```

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-core/extensions/roc-abstract-package-base-dev/docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev

### dev
__Used to start the current project in development mode.__

```
roc development dev [targets]
```

#### Arguments
| Name    | Description                                                                      | Default | Type       | Required | Can be empty |
| ------- | -------------------------------------------------------------------------------- | ------- | ---------- | -------- | ------------ |
| targets | The targets the project should be built for, overrides the settings if provided. |         | `[String]` | No       | Yes          |

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-core/extensions/roc-abstract-package-base-dev/docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev

## meta
__Meta commands__

```
roc meta <command>
```
Meta commands that can be used to generate meta data about the current project.


### docs
__Generates documentation for the current project.__

```
roc meta docs
```

#### Command options
| Name            | Description | Default        | Type | Required | Can be empty |
| --------------- | ----------- | -------------- | ---- | -------- | ------------ |
| --hide-commands |             |                |      | No       | Yes          |
| --html          |             | `false`        |      | No       | Yes          |
| --markdown      |             | `true`         |      | No       | Yes          |
| --mode          |             | `"github.com"` |      | No       | Yes          |
| --output        |             | `"docs"`       |      | No       | Yes          |

####  Defined by extensions
roc

### list-settings
__Prints all the available settings that can be changed.__

```
roc meta list-settings
```

####  Defined by extensions
roc

