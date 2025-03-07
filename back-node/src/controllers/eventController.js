const eventService = require('../services/eventService');

const getEvents = async (req, res) => {
    try {
        const events = await eventService.getEvents(req.params.id);
        if (!events) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error obteniendo eventos", error: error.message });
    }
};

const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: "Error creando evento", error: error.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const updated = await eventService.updateEvent(req.params.id, req.body);
        if (updated[0] === 0) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json({ message: "Evento actualizado correctamente" });
    } catch (error) {
        res.status(400).json({ message: "Error actualizando evento", error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const deleted = await eventService.deleteEvent(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json({ message: "Evento eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando evento", error: error.message });
    }
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};
