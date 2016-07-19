import multi_startServer from '../../../src/server/multi';


describe('node server multi', () => {

  let app = null;
  beforeEach(async (done) => {
    try {
      app = await multi_startServer()
      done()
    } catch (e) {
      done(e)
    }
  });

  it('check server', async (done) => {
    try {
      let result = await request(app).get("/").expect(200)
      result.text.should.be.eq('multinumber=25')

      let {text} = await request(app).get("/").expect(200)
      text.should.be.eq('multinumber=25')
      done()
    } catch (e) {
      done(e)
    }
  });

  afterEach(async (done) => {
    app.close(() => {
      done();
    });
  })

});
