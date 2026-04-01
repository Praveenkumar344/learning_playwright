class pdp{
constructor(page){
    this.page=page;
    this.addToBagLocator=page.locator(".emphasis.expanded.button");
    this.viewBagLocator=page.locator(".secondary.button.cell.margin-bottom-xs");
    

}

async addTOBag(item){
   await this.addToBagLocator.click();
  }
async viewBag(item){
   await this.viewBagLocator.click();
  }
}

module.exports = pdp;