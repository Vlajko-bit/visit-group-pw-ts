import { expect, Locator, Page } from "@playwright/test";

let PropertiesReader = require('properties-reader');
let prop = PropertiesReader('./config/prop.properties');

export class SearchPage {
    private page: Page;
    private calendarCheckIn: Locator;
    private calendarCheckOut: Locator;
    private searchButton: Locator;
    private bookNow: Locator;
    private bookButton: Locator;
    private extrasAccomodation: Locator;
    private continueButton: Locator;
    private basketTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.calendarCheckIn = this.page.locator("#Citybreak_trigger_from");
        this.calendarCheckOut = this.page.locator("#Citybreak_trigger_to");
        this.searchButton = this.page.locator("#CB_SearchButton");
        this.bookNow = this.page.locator("(//div/a[contains(text(),'Book now')])[1]");
        this.bookButton = this.page.locator("(//div[@class='cb_inner']//input[@value='Book'])[1]");
        this.extrasAccomodation = this.page.locator("//h1[contains(text(),'Extras for your accommodation')]");
        this.continueButton = this.page.locator("(//div/a[contains(text(),'Continue')])[1]");
        this.basketTitle = this.page.locator("//h1");

    }

    async navigateTo() {
        await this.page.goto(prop.get('BASE_URL'));
    }

    async openCheckInCalendar(): Promise<void> {
        await this.calendarCheckIn.click();
    }

    async openCheckOutCalendar(): Promise<void> {
        await this.calendarCheckOut.click();
    }

    async selectCheckIn(): Promise<void> {
        const today = new Date();
        const threeDaysAhead = new Date(today);
        threeDaysAhead.setDate(today.getDate() + 3);

        const day = threeDaysAhead.getDate();
        const month = threeDaysAhead.getMonth();
        const year = threeDaysAhead.getFullYear();

        const dateSelector = `td.selen-cal-target-date-${day}[data-month="${month}"][data-year="${year}"] a`;

        await this.page.click(dateSelector);
    }

    async selectCheckOut(): Promise<void> {
        const today = new Date();
        const tenDaysAhead = new Date(today);
        tenDaysAhead.setDate(today.getDate() + 10);

        const day = tenDaysAhead.getDate();
        const month = tenDaysAhead.getMonth();
        const year = tenDaysAhead.getFullYear();

        const dateSelector = `td.selen-cal-target-date-${day}[data-month="${month}"][data-year="${year}"] a`;

        await this.page.click(dateSelector);
    }

    async clickOnSearchButton(): Promise<void> {
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async userClickOnBookNowButton(): Promise<void> {
        await this.bookNow.click();
        await this.page.waitForLoadState('networkidle');
    }

    async userBookRoom(): Promise<void> {
        await this.bookButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async userIsOnExtrasPageAndGoFurther(): Promise<void> {
        await expect(this.extrasAccomodation).toContainText('Extras for your accommodation');
        await this.continueButton.click();
    }

    async verifyThatRoomAddedToBasketProperly() {
        await expect(this.basketTitle).toHaveText('Your basket');
    }
}
