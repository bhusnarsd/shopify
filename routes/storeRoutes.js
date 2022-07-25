const express = require("express");
const storeController = require("../controllers/storeController");
const router = express.Router();


router.get("/",storeController.store_index);

router.post("/" , storeController.store_create_post);

router.get("/create", storeController.store_create_get);

router.get("/:id" , storeController.store_details);

router.put("/:id", storeController.store_update);



module.exports = router;