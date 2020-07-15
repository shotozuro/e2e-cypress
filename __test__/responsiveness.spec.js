/// <reference types="Cypress" />

describe('Responsiveness Test', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.get('#imdbHeader-navDrawerOpen').as('drawerButton');
    cy.get('#imdbHeader-navDrawerOpen--desktop').as('drawerButtonDesktop');
    cy.get('[data-testid="panel"]').as('drawer');
    cy.get('#suggestion-search').as('searchForm');
    cy.get('[class*="WithPeekEditorialContainer"]').as('editorialChoice');
    cy.get('.navbar__imdbpro').as('imdbProButton');
    cy.get('[class*="watchlist-button"]').as('watchlistButton');
  });

  describe('Display on large size screen (TV, desktop monitor)', () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
    });
    it('shows icon "menu"', () => {
      cy.get('@drawerButtonDesktop').should('be.visible');
      cy.get('@drawerButton').should('not.be.visible');
    });

    it('should show large drawer (1024px) after clicking icon "menu"', () => {
      cy.get('@drawer').should('not.be.visible');
      cy.get('@drawerButtonDesktop')
        .should('be.visible')
        .click();
      cy.get('@drawer')
        .should('be.visible')
        .find('[data-testid="panel-content"]')
        .should('have.css', 'width', '1024px');
      cy.get('[title="Close Navigation Drawer"]')
        .should('be.visible')
        .click();
    });

    it('shows search input', () => {
      cy.get('@searchForm').should('be.visible');
    });

    it('shows link to watchlist page', () => {
      cy.get('@watchlistButton').should('be.visible');
    });

    it('shows link for logging in to IMDb Pro account', () => {
      cy.get('@imdbProButton').should('be.visible');
    });

    it('shows sidebar: upnext movies', () => {
      cy.get('@editorialChoice').should('be.visible');
    });

    it('shows footer which contains links', () => {
      cy.get('.imdb-footer')
        .should('be.visible')
        .find('.imdb-footer__links')
        .find('a')
        .its('length')
        .should('be.greaterThan', 1);
    });
  });

  describe('Display on medium screen size device (ipad)', () => {
    beforeEach(() => {
      cy.viewport(768, 1024);
    });

    it('does not show sidebar: upnext movies', () => {
      cy.get('@editorialChoice').should('not.be.visible');
    });

    it('shows icon "menu" on header', () => {
      cy.get('#imdbHeader').should('be.visible');
      cy.get('@drawerButton').should('be.visible');
    });

    it('shows drawer (280px) after click the icon "menu"', () => {
      cy.get('@drawer').should('not.be.visible');
      cy.get('@drawerButton')
        .should('be.visible')
        .click();
      cy.get('@drawer')
        .should('be.visible')
        .should('have.css', 'width', '280px')
        .find('[data-testid="nav-link-category"]')
        .its('length')
        .should('be.greaterThan', 2);
      cy.get('[title="Close Navigation Drawer"')
        .should('be.visible')
        .click();
    });

    it('shows search input', () => {
      cy.get('@searchForm').should('be.visible');
    });

    it('shows footer which contains links', () => {
      cy.get('.imdb-footer')
        .should('be.visible')
        .find('.imdb-footer__links')
        .find('a')
        .its('length')
        .should('be.greaterThan', 1);
    });
  });

  describe('Display on mobile phones', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('does not show sidebar: upnext movies', () => {
      cy.get('@editorialChoice').should('not.be.visible');
    });

    it('shows icon "menu" on header', () => {
      cy.get('#imdbHeader').should('be.visible');
      cy.get('@drawerButton').should('be.visible');
    });

    it('shows drawer (280px) after click the icon "menu"', () => {
      cy.get('@drawer').should('not.be.visible');
      cy.get('@drawerButton')
        .should('be.visible')
        .click();
      cy.get('@drawer')
        .should('be.visible')
        .should('have.css', 'width', '280px')
        .find('[data-testid="nav-link-category"]')
        .its('length')
        .should('be.greaterThan', 2);
      cy.get('[title="Close Navigation Drawer"')
        .should('be.visible')
        .click();
    });

    it('does not show search form', () => {
      cy.get('@searchForm').should('not.be.visible');
    });

    it('shows search form after click the search icon', () => {
      cy.get('@searchForm').should('not.be.visible');
      cy.get('#imdbHeader-searchOpen')
        .should('be.visible')
        .click();
      cy.get('@searchForm').should('be.visible');
      cy.get('#imdbHeader-searchClose')
        .should('be.visible')
        .click();
    });

    it('shows footer which contains links', () => {
      cy.get('.imdb-footer')
        .should('be.visible')
        .find('.imdb-footer__links')
        .find('a')
        .its('length')
        .should('be.greaterThan', 1);
    });
  });
});
