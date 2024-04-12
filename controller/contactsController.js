const asyncHndler = require("express-async-handler");
const contactsModel = require("../models/contactModel");
// هنا بقي زي ما عملنا مع الراوت واتشال من الملف الاساسي هنعمل مع الفانكشن الاساسيه

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHndler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !phone) {
    res.status(400);
    throw new Error("fill the fields");
  } else {
    const createContact = await contactsModel.create({
      name,
      email,
      phone,
      // UserId: req.user.id,
    });
    res.status(201).json(createContact);
  }
});

//@desc Get contact
//@route GET /api/contacts
//@access private
const getContacts = asyncHndler(async (req, res) => {
  const Getcontacts = await contactsModel
    .find
    // {UserId: req.user.id,}
    ();
  res.status(200).json(Getcontacts);
});

//@desc Get contact
//@route GET /api/contacts
//@access private
const getContact = asyncHndler(async (req, res) => {
  const GetContact = await contactsModel.findById(req.params.id);
  if (!GetContact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(GetContact);
});

//@desc Update contact
//@route PUT /api/contacts
//@access private
const updateContact = asyncHndler(async (req, res) => {
  const GetContact = await contactsModel.findById(req.params.id);
  if (!GetContact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  // if (GetContact.UserId.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("user dont have premission to update");
  // }
  const UpdateContact = await contactsModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(UpdateContact);
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHndler(async (req, res) => {
  const GetContact = await contactsModel.findById(req.params.id);
  if (!GetContact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  // if (GetContact.UserId.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("user dont have premission to Delete");
  // }
  const DeleteContact = await contactsModel.deleteOne({ _id: req.params.id });
  res.status(200).json(DeleteContact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
