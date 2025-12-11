var mongoose = require("mongoose");

var dbURI = process.env.MONGODB_URI ||
            "mongodb+srv://unalsener0_db_user:eleveneleven@cluster0.6fxh9ko.mongodb.net/mekanbul?appName=Cluster0";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", function () {
    console.log("Mongoose " + dbURI + " adresindeki veritabanına bağlandı.");
});

mongoose.connection.on("error", function (err) {
    console.log("Mongoose bağlantı hatası:", err);
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose bağlantısı kesildi.");
});

process.on("SIGINT", function () {
    mongoose.connection.close();
    console.log("Mongoose uygulama sonlandırma nedeniyle bağlantıyı kapattı.");
    process.exit(0);
});

require("./venue");
