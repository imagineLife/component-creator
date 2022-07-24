import inquirer  from 'inquirer';

const startingQuestions = [
  {
    type: 'input',
    name: 'componentName',
    message: 'what is the name of the component?',
  },
];

async function createTheComponent() {
  let { componentName } = await inquirer.prompt(startingQuestions); 
  const cased = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  console.log(`creating directory ${cased} in ${process.cwd()}`)
}

createTheComponent();
