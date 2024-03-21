// cypress/e2e/spec.cy.js
describe('Die Startseite', () => {
    it('wird erfolgreich geladen', () => {
        cy.visit('http://localhost:3000/')
    })
})