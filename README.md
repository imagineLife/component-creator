# component-creator

This project is intended to be an easy-to-use CLI-First react component creator.  
Each component file will start by including...
- a directory 
  - a javascript file
  - a stylesheet file
  - a unit-test file


- [component-creator](#component-creator)
  - [How To Use](#how-to-use)
    - [Create a Runnable Command](#create-a-runnable-command)
    - [Use The Terminal](#use-the-terminal)

## How To Use
### Create a Runnable Command
- As a suggestion, add a script to your project's `package.json` that run `component-creator`, something like...
```json
  "scripts": {
    "cc": "node ./node_modules/component-creator",
  }
```

### Use The Terminal
- Change directory `cd` into the directory where you'd like to put your new component: something like a `components` directory
- run your recently added package.json script: `npm run cc`
- follow the CLI & you'll end up with a new component