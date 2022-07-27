const inquirer = require("inquirer");
const { mkdir, open, appendFile } = require("fs").promises;
const {
  capitalizeFirst,
  createComponentDirPath,
  componentIndexString,
  componentTestFileString,
} = require("./helpers");

const startingQuestions = [
  {
    type: "input",
    name: "componentName",
    message: "what is the name of the component?",
  },
];

async function createComponent() {
  try {
    const { componentName } = await inquirer.prompt(startingQuestions);
    const formattedComponentName = capitalizeFirst(componentName);

    console.log(`Creating ${formattedComponentName} dir...`);
    const componentDirPath = createComponentDirPath({
      componentName: formattedComponentName,
      cwd: process.cwd(),
    });
    await mkdir(componentDirPath);
    console.log(`SUCCESS! now creating index.js file`);

    /*
      create index.js file
    */
    const indexContent = componentIndexString({
      componentName: formattedComponentName,
    });
    const fileDescriptor = await open(`${componentDirPath}/index.js`, "a");
    await appendFile(fileDescriptor, `${indexContent}\n`);
    await fileDescriptor.close();

    /*
      create index.css file
    */
    const cssFileDescriptor = await open(
      `${componentDirPath}/${formattedComponentName}.css`,
      "a"
    );
    await cssFileDescriptor.close();

    /*
      create Component.spec.js
    */

    const testContent = componentTestFileString({
      componentName: formattedComponentName,
    });
    const testFileDescriptor = await open(
      `${componentDirPath}/${formattedComponentName}.spec.js`,
      "a"
    );
    await appendFile(testFileDescriptor, `${testContent}\n`);
    await testFileDescriptor.close();
  } catch (error) {
    console.log("GLOBAL ERROR");
    console.log(error.message);
  }
}

// module.exports = createComponent;
createComponent();
