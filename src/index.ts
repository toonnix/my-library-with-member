import app from './app';
import db from './model/db';
import config from './config';

db.sequelize.sync().then(function () {
    console.log('Connect to the Database!')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

app.listen(config.express.port, config.express.ip, function (error) {
    if (error) {
        process.exit(10);
    }
    console.log('express is listening on http://' +
        config.express.ip + ':' + config.express.port);
});
