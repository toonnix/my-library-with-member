"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Gender', {
            id: { type: Sequelize.INTEGER, unique: true, primaryKey: true },
            name: Sequelize.STRING
        }).then(function () {
            return queryInterface.bulkInsert('Gender', [
                { id: 1, name: 'male' },
                { id: 2, name: 'female' }
            ]).then(function () {
                return queryInterface.createTable('Member', {
                    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                    firstname: Sequelize.STRING,
                    lastname: Sequelize.STRING,
                    age: Sequelize.INTEGER,
                    gender: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'Gender',
                            key: 'id'
                        }
                    }
                })
            })
        })
    },

    down: function (queryInterface) {
        return [
            queryInterface.dropTable('Gender'),
            queryInterface.dropTable('Member')
        ]
    }
};