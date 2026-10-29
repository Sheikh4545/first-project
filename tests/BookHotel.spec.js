
import BookHotel from '../Pages/BookHotel';
import BookData from '../testdata/BookData.json';
import Logout from '../Pages/Logout';
import { test, expect } from '../Fixture/TestSetup';
import { attachStepScreenshot } from '../utilities/screenshot';
import AssertionData from '../testdata/AssertionData.json';
import { AppConfig } from '../testdata/AppConfig';
test.describe('Book Hotel Suite', () => {
  let bookHotel;
  let logout;
  let bookData;

 
  test.beforeEach(async ({ page }) => {
    bookHotel = new BookHotel(page);
    logout = new Logout(page);
    await page.goto(AppConfig.bookurl);
    bookData = BookData.BookingData[0];
  });

  test.afterEach(async () => {
    await logout.performLogout();
  });

  test('Book Hotel Test Case', async ({ page }) => {
    await test.step('Fill Booking Details and Submit', async () => {
      await bookHotel.bookingHotel( 
        bookData.FirstName, 
        bookData.LastName, 
        bookData.BillingAddress,  
        bookData.CreditCardNo,
        bookData.CreditCardType,
        bookData.ExpiryMonth,
        bookData.ExpiryYear,
        bookData.CVVNumber
      );
    });

    await test.step('Verify Booking Success', async () => {
      await expect(page).toHaveURL(AssertionData.assertions[0].book_hotel_url);
      await attachStepScreenshot(page, 'Book Hotel Successful');
    });
  });
});