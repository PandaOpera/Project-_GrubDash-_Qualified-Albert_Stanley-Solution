const controller = require("./dishes.controller")
const { get } = require("express/lib/response");
const router = require("express").Router();

// TODO: Implement the /dishes routes needed to make the tests pass

router.route("/:dishId").get(controller.read);

router.route("/").get(controller.list);

router.route("/").get(controller.create);

module.exports = router;
