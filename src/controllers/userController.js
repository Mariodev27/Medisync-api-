const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = await User.create(name, email, password);

    res.status(201).json({
      message: 'User registered successfully',
      userId,
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const isMatch = await User.comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    res.status(200).json({
      message: 'User logged in successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};