const inquirer = require("inquirer");
const { mkdir } = require("fs").promises;
const { capitalizeFirst, createComponentDirPath } = require("./helpers");

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
    console.log(`Creating ${formattedComponentName} now...`);

    const componentDirPath = createComponentDirPath({
      componentName: formattedComponentName,
      cwd: process.cwd(),
    });

    await mkdir(componentDirPath);
  } catch (error) {
    console.log("GLOBAL ERROR");
    console.log(error.message);
  }
}

// module.exports = createComponent;
createComponent();
