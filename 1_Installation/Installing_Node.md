# 1. Installing Node
## What is Node?
* Introduced at European JSConf in 2009
* Platform built on Google's V8 JavaScript engine, an event library for asynchronous, non blocking operations
* It provides a lightweight environment for event-driven programming in JavaScript, using I/O model

***Node allows us to easily construct fast and scalable network services***

## Why Node is so popular?

* JavaScript the most widely used programming language. Most web programmers are used to writing JavaScript in the browser, and the server is a natural extension of that.

* Simplicity of Node.
  * Node's core functionalities are kept to minimum
  * Elegant APIs
  * Minimum complexity is exposed to programmers
  * To build something more complex, we can easily pick, install and use several available third-party modules
* Easy to get started. Download & Install in minutes without any complex configurations

## Installing on macOS
*Needs system user credentials, so need to have sudo privileges*

1. Go to https://nodejs.org/en/
2. Download the node-v*.pkg by clicking on the link
3. Run the downloaded file
4. Complete the wizard steps

Node gets installed at `/usr/local/bin/node`

Make sure that `/usr/local/bin` is in your path

## Installing Node using the Source Code

### Dependencies for Node
* https://nodejs.org/en/docs/meta/topics/dependencies

### Download the Node Source code
```
curl -O https://nodejs.org/dist/v10.16.0/node-v10.16.0.tar.gz
```
### Building Node
Execute the below commands in the terminal
```
$ tar xfz node-v10.16.0.tar.gz

$ cd node-v10.16.0

$ ./configure

$ make
```

### Installing Node
```
$ make install

```
It will copy the Node executable into /usr/local/node

### Running Node

**Run Node as a CLI**
```
$ node

> console.log("Welcome to Node world!!!");
Welcome to Node world!!!
undefined

```

**Run JavaScript file**
```
node welcome.js
Welcome to Node world!!!
```

## Node Package Manager (NPM)

1. NPM is a third-party package repository, a way to manage packages installed in  the computer and a standard to define dependencies on other packages
2. NPM provides a public registry that contains all packages that programmers publish in NPM
3. NPM provides a command-line tool to download, install and manage the packages

* Since Node version 0.6.0, NPM is included as part of Node. So separate installation is not needed.

### Using NPM

* NPM has two modes of operation - **global and local (default)**

#### Global Mode (-g)
* Suited for installing modules that should always be available globally, like the ones that provide command-line utilities and that are not directly used by applications

* In Global mode, NPM installs packages into /usr/local/lib/node_modules (if Node was installed using default directory)

```
sudo npm install -g <package name>
```

#### Local Mode
* Default Mode of Operation
* Recommended dependency resolution mechanism
* Installs in the current directory (where the command is being executed)
* Never touches any global settings

```
npm install <package name>
```

#### Installing a Module
* To install latest version of package
```
npm install <package name>
```

* To install spe version of package
```
npm install <package name>@<version spec>
```
* Examples
```
//To install 4.17.0 version
npm install express@4.17.0
```
```
//To install latest version of the branch 4.17
npm install express@4.17.x
```
```
//To install latest version before 4.17
npm install express@"<4.17"
```
```
// More sophisticated usage
npm install express@">=4.0.0 <4.16.0"
```

#### Uninstalling a Module
```
npm uninstall <package name>

sudo npm unistall -g <package name>
```

#### Updating a Module
```
npm update <package name>

sudo npm update -g <package name>
```

#### Using *package.json* to Define Dependencies
* package.json should be placed at the root of the application
* In this, we can define application metadata such as name, authours, repository, version, dependencies etc..

```
{
  "name": "welcomeApp",
  "version": "1.0.0",
  "dependencies": {
    "http": "*"
  }
}

```

* On the application root, run `npm install or npm update` to install missing packages
