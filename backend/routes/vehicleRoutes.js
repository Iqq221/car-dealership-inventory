const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");


router.get("/search", vehicleController.searchVehicles);

router.get("/:id", vehicleController.getVehicleById);

router.get("/", vehicleController.getAllVehicles);

router.post(
    "/",
    verifyToken,
    isAdmin,
    vehicleController.addVehicle
);

router.put(
    "/:id",
    verifyToken,
    isAdmin,
    vehicleController.updateVehicle
);

router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    vehicleController.deleteVehicle
);

module.exports = router;