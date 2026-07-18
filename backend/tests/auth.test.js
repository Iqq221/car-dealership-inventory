const request = require("supertest");
const app = require("../app");

describe("POST /api/auth/register", () => {

    test("should register a new user", async () => {

        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Ira",
                email: "unique@gmail.com",
                password: "123456"
            });

        expect(response.statusCode).toBe(201);

    });

});

describe("POST /api/auth/login", () => {

    test("should login an existing user", async () => {

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "iqra@gmail.com",
                password: "123456"
            });

        expect(response.statusCode).toBe(200);

    });

});