import inquirer  from 'inquirer';

const startingQuestions = [
  {
    type: 'input',
    name: 'componentName',
    message: 'what is the name of the component?',
  },
];

async function doWork() {
  let initialAnswers = await inquirer.prompt(startingQuestions);
  console.log({
    initialAnswers,
  });
  
}

doWork()

// module.exports = {
//   doWork
// }
// see "a-cli" for inquirer example
