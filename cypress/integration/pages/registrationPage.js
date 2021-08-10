describe("The registration componet", () => {
    it("Successfully checking components", ()=> {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
         cy.get("div[id=center_column]").should("exist");
         cy.get("div[class=row]").should("exist");
         cy.get("form[id=create-account_form]").should("exist"); 
         cy.get("h3[class=page-subheading]").should("exist");
         cy.get("h3[class=page-subheading]").should("contain","Create an account");
         cy.get("h3[class=page-subheading]").should("have.length", 2);
         cy.get("button[id=SubmitCreate]").should("exist"); 
    })
})