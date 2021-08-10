/// <reference types="cypress" />

describe("The Registration Component", () => {
     it("checking email input functionality", () => {
          cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
          cy.get("#email_create").type("fake@email.com").should("have.value", "fake@email.com");
          cy.get("#email_create").clear().type("{del}{selectall}{backspace}");
          cy.get("#email_create").type("spacee@space.com").should("have.value", "spacee@space.com").clear().should("have.value", "");
          const validateEmail = (email) => {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
          };
          const testEmail = "fake@fake.com";
          const EmailState = validateEmail(testEmail);
          cy.get("#email_create").type(testEmail);
          cy.get("#SubmitCreate").click();
          if (!EmailState) {
            cy.get("#create_account_error").should("be.visible");
          } else {
            cy.get("#create_account_error").should("not.be.visible");
          }
          cy.get("#SubmitCreate").click();
     })
}) 

