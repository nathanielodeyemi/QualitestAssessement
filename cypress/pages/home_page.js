class Home_Page{
    selectFirstFourItems(params) {
        for (let index = 1; index < 5; index++) {
            cy.wait(100)
            cy.xpath(`(//*[text()='Add to cart'])[${index}]`)
        .invoke('show').click({ force: true })
        }
    }

    navigateToCart(){
        cy.xpath("//*[text()='Cart']").click({ force: true })
    }
}
export default Home_Page;