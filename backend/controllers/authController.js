const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if email already exists
        db.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            async (err, result) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database error"
                    });
                }

                if (result.length > 0) {
                    return res.status(409).json({
                        message: "Email already exists"
                    });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                db.query(
                    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
                    [name, email, hashedPassword],
                    (err) => {

                        if (err) {
                            return res.status(500).json({
                                message: "Registration failed"
                            });
                        }

                        return res.status(201).json({
                            message: "User registered successfully"
                        });

                    }
                );

            }
        );

    } catch (error) {

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
};