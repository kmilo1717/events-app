const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const eventService = require('../services/eventService');

jest.mock('../services/eventService');

describe("Event Controller - 200 OK Responses", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("getEvents devuelve 200 cuando encuentra eventos", async () => {
        const mockEvent = [{ id: 1, title: "Evento Test", description: "Descripción", date: "2025-03-07", location: "Bogotá" }];
        eventService.getEvents.mockResolvedValue(mockEvent);

        const req = { params: {} };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

        await getEvents(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test("createEvent devuelve 200 cuando se crea un evento", async () => {
        const newEvent = { title: "Nuevo Evento", description: "Desc", date: "2025-03-07", location: "Bogotá" };
        eventService.createEvent.mockResolvedValue(newEvent);

        const req = { body: newEvent };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

        await createEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    test("updateEvent devuelve 200 cuando se actualiza un evento", async () => {
        eventService.updateEvent.mockResolvedValue([1]);

        const req = { params: { id: 1 }, body: { title: "Evento Actualizado" } };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

        await updateEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test("deleteEvent devuelve 200 cuando se elimina un evento", async () => {
        eventService.deleteEvent.mockResolvedValue(1);

        const req = { params: { id: 1 } };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

        await deleteEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

});
