import * as Sequelize from 'sequelize'
import config from '../config'

const sequelize = new Sequelize(config);

export default {
    sequelize,
    Sequelize
};
