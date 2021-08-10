 describe("Contact us page", () => {
     it("successfully sending a message", ()=> {
        cy.visit("http://automationpractice.com/index.php?controller=contact");
        cy.get("#id_contact").select("Customer service");
        cy.get("input[name=from]").type("johndoe@gmail.com");
        cy.get("input[name=id_order]").type("010203");
        cy.get("textarea[id=message]").type("Order has not been delivered!");
        cy.get("button[name=submitMessage]").click();
        cy.get("p").should("contain", "Your message has been successfully sent to our team.");
     })
 })