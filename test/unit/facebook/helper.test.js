import FacebookHelper from '../../../src/facebook/helper.js'

describe.skip('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "861198730563404";
    let token = "EAACEdEose0cBAPh4KFxDSHWdWekcmp9R9jZBbRsC6lIqHkrZB9yOFggUns2vkfBhmp1kJM4QcEaCMLinddyCgUaA7niHhVRuoXC6yFfkoQccKiiPgaxqT0NNVXHAvNTHg3p4ZBv86Djjh1Cb2N5M6gprnhbfSZAcgpGLshDPHwZDZD";
    facebookHelper = new FacebookHelper({userId, token});
    console.log(facebookHelper);
    done();
  });

  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name","list_type" ,"id");
      done();
    } catch (e) {
      done(e);
    }
  });


  it("publish post", async (done) => {
    try {
      let post = {
        message: 'test facebook post api'
      }
      let result = await facebookHelper.publishPost(post);
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
  it("message",async (done)=>{
    try {
      let result = await facebookHelper.message();
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
});
