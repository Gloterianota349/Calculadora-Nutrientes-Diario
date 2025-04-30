let carbohydrate
let protein
let lipid
let i

describe ('Validating fields and displaying results', () => {

    beforeEach(() => {
      cy.visit('index.html')
    })

    it ('Fields filled in correctly', () => {
        for (i=1; i<=4; i++) {
          cy.get('.form-control').type('70')
          let peso = 70
          cy.get('select').select(i).should('have.value', i)

          cy.contains('Calcular').click()

          if (i == "1"){
              cy.get('#col1').should('contains.text', 3.5*peso)
              cy.get('#col2').should('contains.text', 0.9*peso)
              cy.get('#col3').should('contains.text', 0.9*peso)
          }
          else if (i == "2"){
              cy.get('#col1').should('contains.text', 6*peso)
              cy.get('#col2').should('contains.text', 1.4*peso)
              cy.get('#col3').should('contains.text', 0.9*peso)
          }
          else if (i == "3"){
              cy.get('#col1').should('contains.text', 5*peso)
              cy.get('#col2').should('contains.text', 1.9*peso)
              cy.get('#col3').should('contains.text', 1*peso)
          }
          else if (i == "4"){
              cy.get('#col1').should('contains.text', 6*peso)
              cy.get('#col2').should('contains.text', 1.9*peso)
              cy.get('#col3').should('contains.text', 1.1*peso)
          }
        }
      })
    it('Shows error when weight is invalid', () => {
            cy.get('Select').select('1');
            
            cy.window().then((win) =>{
              cy.stub(win, 'alert').as('erro')

            cy.contains('Calcular').click();

            cy.get('@erro').should('have.been.calledWith', 'Insira seu peso')

            })

        })
    it('Shows error when the life style field is not selected', () => {
      cy.get('.form-control').type('70')

      cy.window().then((win) =>{
        cy.stub(win, 'alert').as('erro')

      cy.contains('Calcular').click();

      cy.get('@erro').should('have.been.calledWith', 'Escolha um estilo de vida')

      })
    }) 
})