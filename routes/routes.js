const express = require("express");

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");

const router = express.Router();

module.exports = () => {
  router.get("/", (request, response) => {
    response.render("pages/index", { pageTitle: "Welcome" });
  });
  // other routes speakers and feedback
  router.use("/speakers", speakersRoute());
  router.use("/feedback", feedbackRoute());
  return router;
};
