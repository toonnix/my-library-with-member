import db from './db';

const Gender = db.sequelize.define('Gender', {
    id: db.Sequelize.INTEGER,
    name: db.Sequelize.STRING
});

export default Gender;