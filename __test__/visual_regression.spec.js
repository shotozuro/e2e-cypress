/// <reference types="Cypress" />
import { fixCypressSpec } from '../cypress/support';

const sizes = [
  [320, 568],
  [768, 1024],
  [1440, 900],
];

describe('Home page visual regression testing', () => {
  sizes.forEach((size) => {
    const device =
      size[0] < 1024 ? (size[0] < 768 ? 'mobile' : 'tablet') : 'desktop';

    describe(`visual testing: ${size[0]} x ${size[1]} px`, () => {
      beforeEach(() => {
        fixCypressSpec(__filename);
        cy.viewport(...size);
        cy.wait(500);
        cy.visit('/');
      });

      it(`match with header snapshot`, () => {
        cy.get('#imdbHeader')
          .should('be.visible')
          .wait(200)
          .toMatchSnapshot({
            name: `header-${size[0]}`,
            threshold: 0.01,
          });
      });

      it(`match with drawer menu snapshot`, () => {
        if (device !== 'desktop') {
          cy.get('#imdbHeader-navDrawerOpen')
            .should('be.visible')
            .click();
        } else {
          cy.get('#imdbHeader-navDrawerOpen--desktop')
            .should('be.visible')
            .click();
        }
        cy.wait(200);
        cy.get('[data-testid="panel"]').toMatchImageSnapshot({
          name: `drawer-${size}`,
          threshold: 0.02,
        });

        cy.get('[title="Close Navigation Drawer"')
          .should('be.visible')
          .click();
      });

      it(`match with search bar form snapshot`, () => {
        if (device === 'mobile') {
          cy.get('#imdbHeader-searchOpen').click();
          cy.wait(1000);
        }

        cy.get('#suggestion-search-container')
          .scrollIntoView()
          .toMatchSnapshot({
            name: `search-form-${size}`,
          });

        if (device === 'mobile') {
          cy.get('#imdbHeader-searchClose').click();
        }
      });
    });
  });
});

describe('Login page visual regression testing', () => {
  before(() => {
    cy.visit('/registration/signin');
  });

  sizes.forEach((size) => {
    describe(`visual testing: ${size[0]} x ${size[1]} px`, () => {
      beforeEach(() => {
        fixCypressSpec(__filename);
        cy.viewport(...size);
        cy.wait(1000);
      });

      it(`match with signin-options snapshot`, () => {
        cy.get('#signin-options')
          .should('be.visible')
          .toMatchSnapshot({
            name: `signin-option-${size[0]}`,
          });
      });

      it(`match with benefit snapshot`, () => {
        cy.get('#signin-perks')
          .should('be.visible')
          .toMatchSnapshot({
            name: `signin-perks-${size[0]}`,
          });
      });
    });
  });
});
