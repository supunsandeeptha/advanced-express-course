const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (request, response) => {
    return response.send("Feedback List");
  });

  router.post("/", (request, response) => {
    return response.send("Form Submitted");
  });

  return router;
};
