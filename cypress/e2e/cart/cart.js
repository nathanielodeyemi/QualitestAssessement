import Common_Steps from "../common_steps";
import Home_Page from "../../pages/home_page";
import Cart_Page from "../../pages/cart_page";

const commonSteps = new Common_Steps();
const homepage =  new Home_Page();
const cart = new Cart_Page();

Given('I navigate to Katalon homepage', () => {
    commonSteps.navigateToHomepage();
    commonSteps.isHomePageDisplayed();
})

When('I add four random items to my cart', () => {
    homepage.selectFirstFourItems();
})

When('I view my cart', () => {
    homepage.navigateToCart();
})

Then('I find total {string} items listed in my cart', (number) => {
    cart.getNumberOfItems(number);
})

When('I find lowest price items', () => {
    cart.getLowestPricedItem();
})

When('I am able to remove the lowest price item from my cart', () => {
    cart.removeLowestPricedItem();
})