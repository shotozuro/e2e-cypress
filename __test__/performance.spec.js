const timeouts = [1, 2, 5, 10, 20, 40, 100];
describe('Performance Test', () => {
  timeouts.forEach((timeout) => {
    it(`test whether ${timeout} second is enough to load the page`, (done) => {
      cy.on('fail', (err) => {
        expect(err.message).to.contains('Timed out after waiting');
        done();
        return false;
      });
      cy.visit({ url: '/', timeout: timeout * 1000 }).then(() => {
        done();
      });
    });
  });
});
