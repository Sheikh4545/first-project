import { exec } from 'child_process';
import { promisify } from 'util';
 
const execAsync = promisify(exec);
 
export default async function globalTeardown() {
  console.log('Test completed successfully ...');
  try {
   
    await execAsync('npx allure generate allure-results --clean -o allure-report & npx allure open allure-report');
    console.log('Allure report successfully generated!');
   
   
  } catch (error) {
     console.error('Error generating Allure report :', error);
  }
}
 