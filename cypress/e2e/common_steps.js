class Common_Steps{

    navigateToHomepage(){
        cy.visit('https://cms.demo.katalon.com')
    }

    isHomePageDisplayed() {
        cy.title().should('eq', 'Katalon Shop – Katalon Ecommerce');
    }
}

export default Common_Steps;