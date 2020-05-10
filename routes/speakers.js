const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (request, response) => {
    return response.send("Speakers List");
  });
  router.get("/:shortname", (request, response) => {
    return response.send(`Details of the Page ${request.params.shortname}`);
  });

  return router;
};
