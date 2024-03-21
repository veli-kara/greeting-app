describe('Greeting App', () => {
    it('should display a greeting message after submitting a nam', () => {
        const name = 'John Doe';
        // Type a name in the input field
        cy.get('#nameInput').type(name);
        // Click the submit button
        cy.get('button').click();
        // Verify that the greeting message is displayed
        cy.get('#greetingMessage').should('have.text', `Hello, ${name}!`);
    });
});