// import { test, expect } from '@playwright/test';
// test('Update User API', async ({ request }) => {
// const response = await request.put(
// 'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
// {
//  data: {
//   "fullname": "alitester1",
//   "email": "alitester1@gmail.com",
//   "username": "alitester1",
//   "password": "alitester1"
// },
//  data:{
//   "fullname": "ahmad1",
//   "email": "ahmad1@gmail.com",
//   "username": "ahmad1",
//   "password": "ahmad1"
// }
// }
// );

// expect(response.status()).toBe(200);

// });

import { test, expect } from '@playwright/test';
// import { attachStepScreenshot } from '../../utilities/screenshot';
import { attachApiLog } from '../../utilities/apiLogger';
 
test('Patch', async ({ request, page }, testInfo) => {

  const endpoint = 'https://api-testing-postman.vercel.app/api/v1/users/update-account';

  const patch = await request.patch(

    endpoint,

    {

      data: {

        fullname: 'fahadna',
        email: 'fahadna@gmail.com',

      },
      data:{
       "fullname": "ahmad1",
       "email": "ahmad1@gmail.com",
       "username": "ahmad1",
      "password": "ahmad1"
}

    }

  );
 
  const patchResponse = await patch.json();
 
  console.log('PATCH Response:', patchResponse);
 
  await attachApiLog('PATCH API Output', {

    method: 'PATCH',

    url: endpoint,

    status: patch.status(),

    statusText: patch.statusText(),

    response: patchResponse

  }, page, testInfo);
 
  expect(patch.status()).toBe(200);

});
 
