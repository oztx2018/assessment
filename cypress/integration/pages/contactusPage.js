describe("Contact us page", () => {
    it("Successfully checking components", ()=> {
       cy.visit("http://automationpractice.com/index.php?controller=contact");
       cy.get("div[id=center_column]").should("exist");
       cy.get("h1").should("exist");
       cy.get("h3[class=page-subheading]").should("contain","send a message");
       cy.get("label[for=id_contact]").should("contain","Subject Heading");
       cy.get("label[for=email]").should("contain","Email address");
       cy.get("label").should("contain","Order reference");
       cy.get("label[for=fileUpload]").should("contain","Attach File");
       cy.get("label[for=message]").should("contain","Message");

    })
})