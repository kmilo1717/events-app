const db = require('../config/db');

const Event = db.define('events', {
    title: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    location: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Event;