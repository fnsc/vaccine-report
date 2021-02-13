const path = require("path");
const express = require("express");
const router = express.Router();

const rootDirectory = require("./utilities/path");

// Index
router.get("/", (request, response, next) => {
    response.sendFile(
        path.join(rootDirectory, "resources", "views", "index.html")
    );
});

module.exports = router;
