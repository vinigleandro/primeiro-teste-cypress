describe('Teste simples de busca no Wikipédia', () => {
  it('Abre o Wikipédia e pesquisa algo', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click()
    cy.get('#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > .cdx-text-input__input').type('São Paulo FC{enter}')
  })
})
