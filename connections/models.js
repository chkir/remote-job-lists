const Sequelize = require('sequelize');
const sequelize = require('./db');


let models = {
    job: sequelize.define('Job', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        company: Sequelize.TEXT,
        link: Sequelize.STRING,
        slug: Sequelize.STRING,
        referrer: Sequelize.TEXT,
        publishDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        tags: Sequelize.STRING
    }),

    user: sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        tags: Sequelize.STRING,
        subscribed: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        lastEmailSent: Sequelize.DATE,
        numberOfEmailsSent: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    })
}


module.exports = models;