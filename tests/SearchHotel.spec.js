
import LoginPage from '../Pages/LoginPage';
import SearchHotel from '../Pages/SearchHotel';
import SearchData from '../testdata/SearchData.json';
import { test, expect } from '../Fixture/TestSetup';
import { attachStepScreenshot } from '../utilities/screenshot';
import AssertionData from '../testdata/AssertionData.json';

test.describe('Search Hotel Suite', () => {
  let searchHotelPage;
  const sData = SearchData.ValidUser[0];

  test.beforeEach(async ({ page }) => {
    searchHotelPage = new SearchHotel(page);
    await page.goto('https://adactinhotelapp.com/SearchHotel.php');
  });

  test('SearchHotel with valid data', async ({ page }) => {
    await searchHotelPage.searchHotel(
      sData.searchLocation,
      sData.searchHotel,
      sData.searchRoomType,
      sData.searchNumberOfRooms,
      sData.searchCheckInDate,
      sData.searchCheckOutDate,
      sData.searchAdultsPerRoom,
      sData.searchChildrenPerRoom
    );
    await expect(page).toHaveURL(AssertionData.assertions[0].select_hotel_url);
    await attachStepScreenshot(page, 'Search Page loaded');
  });
});