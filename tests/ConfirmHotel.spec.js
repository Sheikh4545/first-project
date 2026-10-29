

import ConfirmHotel from '../Pages/ConfirmHotel';
import LoginPage from '../Pages/LoginPage';
import SearchHotel from '../Pages/SearchHotel';
import SelectHotel from '../Pages/SelectHotel';
import BookHotel from '../Pages/BookHotel';
import LoginData from '../testdata/LoginData.json';
import SearchData from '../testdata/SearchData.json';
import BookData from '../testdata/BookData.json';
import { test, expect } from '../Fixture/TestSetup';
import { attachStepScreenshot } from '../utilities/screenshot';
import AssertionData from '../testdata/AssertionData.json';
import { AppConfig } from '../testdata/AppConfig';

test.describe('Confirm Hotel Suite', () => {
  let confirmHotelPage;
  let loginPage;
  let searchHotelPage;
  let selectHotelPage;
  let bookHotelPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    searchHotelPage = new SearchHotel(page);
    selectHotelPage = new SelectHotel(page);
    bookHotelPage = new BookHotel(page);
    confirmHotelPage = new ConfirmHotel(page);

    const sData = SearchData.ValidUser[0];
    const bData = BookData.BookingData[0];
   // const creds = LoginData.ValidUser[0];

    // 1. Login
    await loginPage.gotoUrl(AppConfig.loginUrl);
    await loginPage.login(AppConfig.username, AppConfig.password);

    // 2. Search Hotel
    await searchHotelPage.searchHotel(
      sData.searchLocation,
      await step.attachScreenshot(page, 'Search Hotel Page Location'),
      sData.searchHotel,
      await step.attachScreenshot(page, 'Search Hotel Page hotel'),
      sData.searchRoomType,
      await step.attachScreenshot(page, 'Search Hotel Page Roomtype'),
      sData.searchNumberOfRooms,
      await step.attachScreenshot(page, 'Search Hotel Page NumberofRooms'),
      sData.searchCheckInDate,
      await step.attachScreenshot(page, 'Search Hotel Page Checkin'),
      sData.searchCheckOutDate,
      await step.attachScreenshot(page, 'Search Hotel Page Checkout'),
      sData.searchAdultsPerRoom,
      await step.attachScreenshot(page, 'Search Hotel Page Adults '),
      sData.searchChildrenPerRoom
    );

    // 3. Select Hotel
    await selectHotelPage.selectHotel(sData.selectHotelRadioButton, sData.continueButton);

    // 4. Book Hotel 
    await bookHotelPage.bookingHotel(
      bData.FirstName,
      await step.attachScreenshot(page, 'Book Hotel Page Firstname'),
      bData.LastName,
      await step.attachScreenshot(page, 'Book Hotel Page Lastname'),
      bData.BillingAddress,
      await step.attachScreenshot(page, 'Book Hotel Page Billing'),
      bData.CreditCardNo,
      await step.attachScreenshot(page, 'Book Hotel Page CreditCardNo'),
      bData.CreditCardType,
      await step.attachScreenshot(page, 'Book Hotel Page CreditCardType'),
      bData.ExpiryMonth,
      await step.attachScreenshot(page, 'Book Hotel Page ExpiryMonth'),
      bData.ExpiryYear,
      await step.attachScreenshot(page, 'Book Hotel Page ExpiryYear'),
      bData.CVVNumber
    );
  });

  test('Confirm Hotel and View Itinerary Test Case', async ({ page }) => {
    await test.step('Verify Confirmation Page URL', async () => {
        await expect(page).toHaveURL(AssertionData.assertions[0].book_hotel_url);
        await attachStepScreenshot(page, 'Confirm Hotel Page Loaded');
    });

    // Navigates directly to the Booked Itinerary page after booking confirmation
    await test.step('Navigate to My Itinerary', async () => {
        await confirmHotelPage.goToMyItinerary();
    });
  });
});