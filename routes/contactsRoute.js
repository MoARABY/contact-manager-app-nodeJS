const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contactsController");
const tokenHandler = require("../middleware/validateTokenHandler");

// ---> default way
// router.route("/").post(createContact);
// router.route("/").get(getContacts);
// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

// ---> advanced way
router.route(tokenHandler);
router.route("/").post(createContact).get(getContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
module.exports = router;
