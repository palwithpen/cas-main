const Mongoose = require('mongoose');

function connector(url) {
    const db = Mongoose.createConnection(url , {useNewUrlParser: true});

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
    /*Mongoose.set('debug', function (col, method, query, doc) {
        console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
    });*/
    console.log(`MongoDB :: connected ${this.name} on ${this.host}:${this.port}`);
});

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

return db;
}


exports.connector = connector;