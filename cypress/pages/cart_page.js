class Cart_Page{
    getNumberOfItems(number){
        cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']").should('have.length', number)
    }

    getLowestPricedItem(){
        cy.xpath("(//*[@aria-label='Remove this item'])[1]").as('lowestprice');
        cy.wait(2000)
    }

    removeLowestPricedItem(){
        cy.get("@lowestprice").click();
        cy.wait(3000)
    }
}
export default Cart_Page;