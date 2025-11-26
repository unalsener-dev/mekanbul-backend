var mongoose = require('mongoose');

var dbURI = 'mongodb+srv://unalsener0_db_user:eleveneleven@cluster0.6fxh9ko.mongodb.net/mekanbul?appName=Cluster0';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlantı hatası\n: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose bağlantısı kesildi\n');
});

process.on("SIGINT", function () {
    mongoose.connection.close();
    console.log('Bağlantı kapatıldı');
    process.exit(0);
});

require("./venue");