import { test, expect, chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";

test.describe("Accommodation Booking Flow", () => {
    let searchPage: SearchPage;
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();

        searchPage = new SearchPage(page);
        await searchPage.navigateTo();
        const cookiesButton = page.locator("(//button[.='Godkänn alla'])[1]");
        if (await cookiesButton.isVisible()) {
            await cookiesButton.click();
        }
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

    test("Successful end-to-end accommodation booking flow", async () => {
        await searchPage.openCheckInCalendar();
        await searchPage.selectCheckIn();
        await searchPage.openCheckOutCalendar();
        await searchPage.selectCheckOut();
        await searchPage.clickOnSearchButton();
        await searchPage.userClickOnBookNowButton();
        await searchPage.userBookRoom();
        await searchPage.userIsOnExtrasPageAndGoFurther();
        await searchPage.verifyThatRoomAddedToBasketProperly();
    });
});
