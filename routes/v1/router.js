const router = require("express").Router();
const formController = require("../../controller/v1/form.controller");
const eventController = require("../../controller/v1/event.controller");


//API START
router.post("/example", (req, res) => {
  console.log(req.body);
  res.send({ message: "Data received", data: { body: req.body } });
});
router.get("/example/:id", (req, res) => {
  console.log(req.query);
  res.send({
    message: "Data received",
    data: { params: req.params, query: req.query },
  });
});

router.get("/form", [], (req, res) => {
    formController.form(req, res);
})
router.post("/submit", [], (req, res) => {
    formController.submit(req, res);
})
router.post("/event", [], (req, res) => {
  eventController.eventExample(req, res);
})

module.exports = router;
