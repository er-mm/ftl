context('App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Check Heading and List of Users', ()=>{
		cy
		.get('.MuiTypography-h2')
		.should('have.text', 'Full Throttle Labs - Assessment');
		cy
		.get('.MuiTypography-h3')
		.should('have.text', 'List of Users');
	});

	it('Click on List', () => {
		cy.wait(1000);
		cy.contains('Egon Spengler').click();
		cy.wait(1000);
		cy.contains('Close').click();
		cy.wait(1000);
		cy.contains('Glinda Southgood').click();
		cy.wait(1000);
		cy.contains('Close').click();
	})
})