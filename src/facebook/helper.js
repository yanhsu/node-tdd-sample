import FB from 'fb'

// export default (userid, token, cb) => {
//   FB.setAccessToken(token);
//   return FB.api(userid + '/friends', function(res) {
//     return cb(null, res.data);
//   });
// };

export default class FacebookHelper {

  constructor({token, userId}) {
    this.FB = FB;
    this.FB.setAccessToken(token);
    this.userId = userId;
  }

  async getFriends() {
    try {
      let result = await new Promise((resolve, reject) => {
        this.FB.api(`${this.userId}/friendlists`, function(res, error) {
          if(error) reject(error);
          resolve(res.data);
        });
      });
      return result;

    } catch (e) {
      throw e;
    }
  }

  async publishPost({message}) {
    try {
      let result = await new Promise((resolve, reject) => {
        this.FB.api(`${this.userId}/feed`, 'post', { message }, function(res, error) {
          if(error) reject(error);
          resolve(res);
        });
      });
      return result;

    } catch (e) {
      throw e;
    }
  }
  async message(){
    try{
      let result = await new Promise((resolve, reject) => {
        this.FB.api(`${this.userId}/inbox`,  function(res, error) {
          if(error) reject(error);
          resolve(res);
        });
      });
      return result;

    } catch (e) {
      throw e;
    }
    }

}
