const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");


router.get("/search", vehicleController.searchVehicles);

router.get("/", vehicleController.getAllVehicles);

router.post(
    "/",
    verifyToken,
    isAdmin,
    vehicleController.addVehicle
);

module.exports = router;