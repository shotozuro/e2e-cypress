const timeouts = [40];
describe('Performance Test', () => {
  timeouts.forEach((timeout) => {
    it(`test whether ${timeout} second is enough to load the page`, () => {
      // cy.server({
      //   whitelist: (request) => {
      //     console.log(request);

      //     return false;
      //   },
      // });

      cy.visit({ url: '/' });
      cy.get('script');
    });
  });
});
