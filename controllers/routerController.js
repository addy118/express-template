const { body, validationResult } = require("express-validator");

validateForm = [
  body("name")
    .trim()
    .isAlpha()
    .withMessage("Name should only contain letters!")
    .isLength({ min: 2, max: 30 })
    .withMessage("Name should be between 2 and 30 characters only!"),
];

exports.getRouter = (req, res) => {
  res.send("router works!");
};

exports.postNewRouter = [
  validateForm,
  (req, res) => {
    const { field } = req.body;

    // validation error
    const errors = validationResult(req);
    if (!errors.notEmpty()) {
      return res.status(400).render("view", {
        title: "New Router",
        errors: errors.array(),
      });
    }

    // route handler
    console.log(field);
    res.send("form submitted!");
  },
];
