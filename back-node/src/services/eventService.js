const events = require('../models/event');

const getEvents = async (id = null) => {
    if (id) {
        return await events.findByPk(id);
    }
    return await events.findAll({ raw: true });
};

const createEvent = async (event) => {
    return await events.create(event);
};

const updateEvent = async (id, event) => {
    return await events.update(event, { where: { id } });
};

const deleteEvent = async (id) => {
    return await events.destroy({ where: { id } });
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};