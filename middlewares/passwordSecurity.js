import passwordValidator from "password-validator";

const passwordSecurity = (req, res, next) => {
  try {
    if (req.body.password === undefined) {
      return res.status(400).json({ err: "Password can't be empty" });
    }
    const schema = new passwordValidator();
    schema
      .is().min(10) // prettier-ignore
      .is().max(20) // prettier-ignore
      .has().uppercase(1) // prettier-ignore
      .has().lowercase(3) // prettier-ignore
      .has().digits(2) // prettier-ignore
      .has().not().spaces(); //  prettier-ignore
    if (schema.validate(req.body.password) === true) {
      next();
    } else {
      return res
        .status(400)
        .json(schema.validate(req.body.password, { details: true }));
    }
  } catch (err) {
    res.status(401).json(err);
  }
};

export default passwordSecurity;
