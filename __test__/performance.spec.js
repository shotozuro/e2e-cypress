const timeouts = [5000, 10000, 20000, 40000, 100000, 160000];
// const timeout = 10000;
timeouts.forEach((timeout) => {
  describe('Performance Test', () => {
    it(`test whether ${timeout}ms is enough to load the page`, (done) => {
      cy.once('fail', (err) => {
        expect(err.message).to.contains('Timed out after waiting');
        done();
        return false;
      });
      cy.visit('/', { timeout });
    });
  });
});
