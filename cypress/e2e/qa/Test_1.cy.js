describe("Log_in", function() {
    it("Sing in", function() {
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type("email@gmail.com")
        cy.get('input[type="password"]').type("12345")
        cy.get('input[type="submit"]').click()
    })
})