import {test, expect} from '@playwright/test';
test('PUT User API Test', async ({ request }) => {
const response = await request.post(
' https://api-testing-postman.vercel.app/api/v1/users/login',
{
 data: {
  "fullname": "fahadnaveed1",
  "email": "fahad1212@gamil.com",
  "username": "fahad1",
  "password": "fahad1"
}
}
);
console.log(await response.json());
expect(response.status()).toBe(200);
const putResponse = await request.put(
'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
{
 data: {
   fullname: 'Updated User',
   email: 'updateduser@example.com',
   username: 'updatedUser'
 }
}
)});