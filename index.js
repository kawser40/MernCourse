
const app = require("./app");
const express = require("express");
const router = express.Router();
//const app = express();






app.listen(5500, () => {
    console.log("Server is listening on port 5500");
});

module.exports = router;