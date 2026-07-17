const db = require("../config/db");

exports.addVehicle = (req, res) => {

    const {
        make,
        model,
        year,
        category,
        price,
        quantity,
        image
    } = req.body;

    if (
        !make ||
        !model ||
        !year ||
        !price ||
        quantity === undefined
    ) {
        return res.status(400).json({
            message: "Required fields are missing"
        });
    }

    const sql = `
        INSERT INTO vehicles
        (make, model, year, category, price, quantity, image)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            make,
            model,
            year,
            category,
            price,
            quantity,
            image
        ],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Failed to add vehicle"
                });
            }

            return res.status(201).json({
                message: "Vehicle added successfully"
            });

        }
    );

};

exports.getAllVehicles = (req, res) => {

    db.query(
        "SELECT * FROM vehicles",
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );

};

exports.searchVehicles = (req, res) => {

    const { search } = req.query;

    const sql = `
        SELECT *
        FROM vehicles
        WHERE
        make LIKE ?
        OR model LIKE ?
        OR category LIKE ?
    `;

    db.query(
        sql,
        [
            `%${search}%`,
            `%${search}%`,
            `%${search}%`
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );

};