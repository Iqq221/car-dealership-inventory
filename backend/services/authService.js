const authService = require("../services/authService");

describe("User Registration", () => {

    test("should register a new user", async () => {

        const user = {
            name: "Iqra",
            email: "iqra@gmail.com",
            password: "123456"
        };

        const result = await authService.register(user);

        expect(result).toBeDefined();

    });

});