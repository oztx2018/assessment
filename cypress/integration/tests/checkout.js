describe("All checking out process", () => {
       it("successful checking out", () => {
         cy.visit("http://automationpractice.com/index.php");
         cy.get("a[data-id-product='1'").contains("Add to cart").click();
         cy.contains("Continue shopping").click();
         cy.get("a[data-id-product='2'").contains("Add to cart").click();
         cy.contains("Proceed to checkout").click();
         cy.get(".icon-plus").click({ multiple: true });
         cy.get(".icon-minus").click({ multiple: true });
         cy.get(".button.btn.btn-default.standard-checkout.button-medium").click();
         cy.get("#email").type("osmancaliskan64@gmail.com");
         cy.get("#passwd").type("123456789");
         cy.get("#SubmitLogin").click();
         cy.get('.addressesAreEquals [type="checkbox"]').not("[disabled]").uncheck().should("not.be.checked");
         cy.get('.addressesAreEquals [type="checkbox"]').not("[disabled]").check().should("be.checked");
         cy.get(".button.button-small.btn.btn-default").eq(1).click({ force: true });
         cy.get("#firstname").clear().type("Ozy");
         cy.get("#lastname").clear().type("Mozy");
         cy.get("input[name=address1").clear().type("123 Abc Street");
         cy.get("input[name=city").clear().type("Addison");
         cy.get("#id_state").select("Texas");
         cy.get("input[name=postcode]").clear().type(75063);
         cy.get("input[name=phone]").clear().type("2312665696");
         cy.get("input[name=phone_mobile]").clear().type("2312665123");
         cy.get("input[name=alias]").clear().type(Math.random().toString(32).replace(/[^a-z]+/g, ""));
         cy.get("button[name=submitAddress]").click();
         cy.get("button[name=processAddress]").click();
         cy.get('.checker [type="checkbox"]').not("[disabled]").check().should("be.checked");
         cy.get("button[name=processCarrier]").click();
         cy.get("a[class=bankwire]").should("exist");
         cy.get("a[class=cheque]").should("exist");
         cy.get("a[class=bankwire]").click();
         cy.get("span").contains("I confirm my order").click();
         cy.get("div[class=box]").contains("Your order on My Store is complete.");
       });
})

