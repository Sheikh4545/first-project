import { test, expect } from '@playwright/test';
test('Delete User API Test', async ({ request }) => {
const response = await request.post(
' https://api-testing-postman.vercel.app/api/v1/users/login',
{
 data: {
  "fullname": "faizanali",
  "email": "faizanali@gmail.com",
  "username": "faizanali",
  "password": "faizanali"
}
}
);
expect(response.status()).toBe(200);
const deleteResponse = await request.delete(
'https://api-testing-postman.vercel.app/api/v1/users/delete-account'
);
expect(deleteResponse.status()).toBe(200);
 
});
 
test('Without auth user delete (401)', async ({request}) =>{
 
const deleteResponse = await request.delete(
'https://api-testing-postman.vercel.app/api/v1/users/delete-account'
);
expect(deleteResponse.status()).toBe(401);
 
});
