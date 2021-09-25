const port = 3000;

class Server {
  constructor(app) {
    this.app = app;
  }

  listen() {
    this.app.listen(port, () => {
      console.log(`app listening on port: ${port}`);
    });
  }
}

module.exports.Server = Server;
