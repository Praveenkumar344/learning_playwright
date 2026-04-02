class pdp{
constructor(page){
    this.page=page;
    this.addToBagLocator=page.locator(".emphasis.expanded.button");
    this.viewBagLocator=page.locator(".secondary.button.cell.margin-bottom-xs");
    this.addToRegistory=page.locator(".margin-top-xs.link-sm.no-text-decoration");
    

}

async addTOBag(item){
   await this.addToBagLocator.click();
  }
async viewBag(item){
   await this.viewBagLocator.click();
  }
async viewBag(item){
   await this.addToBagLocator.click();
  }
}

module.exports = pdp;