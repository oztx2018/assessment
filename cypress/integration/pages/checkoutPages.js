describe("All checking out process elements", () => {
    it( "Successfully checking components", () => {
     cy.visit("http://automationpractice.com/index.php");
     cy.get(".ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line")
        .contains("Add to cart")
        .click();
     cy.contains("Continue shopping").click();
     cy.get(".ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-mobile-line").contains("Add to cart").click();
     cy.contains("Proceed to checkout").click();
     cy.get("div[class=row]").should("exist");
     cy.get("#order_step").contains("Summary");
     cy.get("img[alt=Blouse]").should("exist");
     cy.get("td[class=cart_unit]").should("exist");  
     cy.get("td[class=cart_total]").should("exist");  
     cy.get("span[id=total_price]").should("exist");
     cy.get(".cart_item.first_item.address_0.odd").should("exist"); 
     cy.get(".button.btn.btn-default.standard-checkout.button-medium").click();
     cy.get("#email").type("osmancaliskan64@gmail.com");
     cy.get("#passwd").type("123456789");
     cy.get("#SubmitLogin").click(); 
     cy.get("#order_step").contains("Address");
     cy.get("label[for=id_address_delivery]").should("exist");
     cy.get("h3[class=page-subheading]").contains("Your delivery address");
     cy.get("h3[class=page-subheading]").contains("Your billing address");
     cy.get("button[name=processAddress]").click();
     cy.get("#order_step").contains("Shipping");
     cy.get('.checker [type="checkbox"]').not('[disabled]').check().should('be.checked');
     cy.get("p[class=carrier_title]").should("exist");  
     cy.get("p[class=carrier_title]").contains("Terms of service");
     cy.get("div[class=delivery_option_price]").contains("$2.00");
     cy.get("button[name=processCarrier]").click();
     cy.get("#order_step").contains("Payment");
     cy.get("img[alt=Blouse]").should("exist");
     cy.get("td[class=cart_unit]").should("exist");  
     cy.get("td[class=cart_total]").should("exist");  
     cy.get("span[id=total_price]").should("exist");
     cy.get("a[class=bankwire]").should("exist");
     cy.get("a[class=cheque]").should("exist");
     cy.get("a[class=bankwire]").click();
     cy.get("h3[class=page-subheading]").contains("Bank-wire payment.");
     cy.get("span").contains("I confirm my order").click()
     cy.get("div[class=box]").contains("Your order on My Store is complete.")
  });
})
