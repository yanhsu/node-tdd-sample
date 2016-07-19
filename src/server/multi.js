export default function multi(x,y){
  return x*y;
}
import http from 'http'

export default async function multi_startServer() {

  let app = await new Promise((resolve, reject) => {
    let app = http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      var result=multi(5,5);
        console.log("multinumber="+result);
      response.write("multinumber="+result);
      response.end();
    }).listen(8888);
    resolve(app);
  })

  return app;
}
