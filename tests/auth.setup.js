
import {test as setup ,expect} from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import testdata from '../testdata/LoginData.json';




setup ('setup',async ({page})=>
{
    const Login = new LoginPage(page )
    await Login.gotoUrl();
    await Login.login(testdata.ValidUser[0].username,testdata.ValidUser[0].password); 
    await expect(page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php');
    await page.context().storageState({path:'auth.json'});

});

