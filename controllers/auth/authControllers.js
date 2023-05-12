// Dependencies
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userModel');

// signup
exports.signupControllers = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);

    const { name, username, email, password, profile } = req.body;

    const user = await userModel.create({
      name,
      username,
      email,
      password,
      profile,
    });

    res.status(201).json({ message: `Hello, ${name}! Your Account has been Created.`, user });
  } catch (error) {
    res.status(201).json({ message: 'Something went Wrong!' });
  }
};

// login
exports.loginControllers = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User Unauthorized!' });
    }
    const validated = await bcrypt.compare(password, user.password);

    if (!validated) {
      return res.status(406).json({ message: 'Password dose not Match!' });
    }
    const token = await jwt.sign({ username, _id: user._id }, process.env.PRIVATE_KEY, { expiresIn: '2h' });

    res.status(200).json({ message: 'Login Successfully✌️', token });
  } catch (error) {
    res.status(404).json({ message: 'Not Found!' });
  }
};
