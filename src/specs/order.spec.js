import { OrderPage } from "../page-objects";
import { Order } from "../locators";
import { Chainers } from "../chainers";

describe("Order: Add items to cart and go to checkout", () => {
  let orderPage = null;

  beforeEach(() => {
    orderPage = new OrderPage();
    orderPage.navigateTo();
  });

  it("should click on items, add to cart and go to checkout", () => {
    orderPage.click(Order.child(1));
    expect(orderPage.contains(Order.notifyTitle, Order.text));

    orderPage.click(Order.child(9));
    expect(orderPage.contains(Order.notifyTitle, Order.text));

    orderPage.click(Order.child(10));
    expect(orderPage.contains(Order.notifyTitle, Order.text));

    orderPage.click(Order.openCart);
    orderPage.click(Order.firstItem);
    orderPage.select(Order.gender, Order.fetita);
    orderPage.select(Order.hairColor, Order.blond);
    orderPage.select(Order.eyeColor, Order.negri);
    orderPage.type(Order.childrenName, Order.testName);
    orderPage.type(Order.childrenSurname, Order.testName);
    expect(orderPage.should(Order.next, Chainers.notBeDisabled));

    orderPage.click(Order.next);
    orderPage.clickAndType(Order.contactName, Order.name);
    orderPage.clickAndType(Order.contactAddress, Order.address);
    orderPage.clickAndType(Order.contactPhone, Order.phone);
    expect(orderPage.should(Order.back, Chainers.notBeDisabled));
    expect(orderPage.should(Order.continue, Chainers.notBeDisabled));

    orderPage.click(Order.back);
    orderPage.click(Order.next);
    orderPage.click(Order.continue);
    expect(orderPage.should(Order.comandButton, Chainers.notBeDisabled));
  });
});
