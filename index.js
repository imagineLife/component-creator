const inquirer = require("inquirer");
const { capitalizeFirst } = require("./helpers");

const startingQuestions = [
  {
    type: "input",
    name: "componentName",
    message: "what is the name of the component?",
  },
];

async function createComponent() {
  const { componentName } = await inquirer.prompt(startingQuestions);
  const formattedComponentName = capitalizeFirst(componentName);
  console.log(
    `${formattedComponentName} component directory wil be created in ${process.cwd()}`
  );
}

// module.exports = createComponent;
createComponent();
