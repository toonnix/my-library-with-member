import db from './db';
import Gender from './gender';

const Member = db.sequelize.define('Member', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: db.Sequelize.STRING,
    lastname: db.Sequelize.STRING,
    age: db.Sequelize.INTERGER,
    gender: {
        type: db.Sequelize.INTEGER,
        references: {
            model: Gender,
            key: 'id'
        }
    }
});

export default Member;