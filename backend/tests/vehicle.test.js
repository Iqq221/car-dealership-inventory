const request = require("supertest");
const app = require("../app");

describe("GET /api/vehicles", () => {

    test("should return all vehicles", async () => {

        const response = await request(app)
            .get("/api/vehicles");

        expect(response.statusCode).toBe(200);

    });

});

describe("GET /api/vehicles/search", () => {

    test("should search vehicles", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?search=Toyota");

        expect(response.statusCode).toBe(200);

    });

});

describe("GET /api/vehicles/:id", () => {

    test("should return vehicle by id", async () => {

        const response = await request(app)
            .get("/api/vehicles/1");

        expect(response.statusCode).toBe(200);

    });

});