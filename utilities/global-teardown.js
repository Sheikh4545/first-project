import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function globalTeardown() {
  console.log('Test completed successfully ...');
  try {
    // Generate Allure report
    await execAsync('npx -y allure generate allure-results --clean -o allure-report');
    console.log('Allure report successfully generated!');

    // Never run 'allure open' in CI as it starts a blocking web server that hangs CI workflows
    if (!process.env.CI) {
      exec('npx -y allure open allure-report');
    }
  } catch (error) {
    console.error('Error generating Allure report :', error);
  }
}
