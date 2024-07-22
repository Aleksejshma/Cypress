// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.get(".ml-auto > .ml-2").click();
  if (email) cy.get("#mail").type(email);
  if (password) cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

// Cypress.Commands.add("book", (Title, Description, Authors) => {
//   cy.get(".p-0 > .btn").click();
//   if (Title) cy.get('#title').type(Title);
//   if (Description) cy.get('#description').type(Description);
//   if (Authors) cy.get('#authors').type(Authors);
//   cy.get('form > .ml-2').click();
//   cy.get('#favorite').click();
// });
