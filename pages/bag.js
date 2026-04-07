class Bag{
    constructor(page){
        this.page=page;
        this.checkoutButton=page.locator('.primary.button.flex-button-content.align-middle.button.emphasis.expanded.margin-bottom-xs');

    }

    async gotoCheckOutPage(){
        await checkoutButton.click();

    }
}

module.exports =Bag;