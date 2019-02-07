import jwt from "jsonwebtoken";

const generateToken = userId => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "6 hours" });
};

export { generateToken as default };
