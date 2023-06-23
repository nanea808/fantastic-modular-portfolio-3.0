const { User } = require("../models");

module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res
          .status(401)
          .json({
            message: "Incorrect username or password. Please try again!",
          });
        return;
      }

      const correctPassword = await user.isCorrectPassword(req.body.password);
      
      if (!correctPassword) {
        res
          .status(401)
          .json({
            message: "Incorrect username or password. Please try again!",
          });
        return;
      }

      res.json({ user, message: "You are logged in!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createUser: async (req, res) => {
    try {
      if (req.body.key === process.env.ACCESS_PASS) {
        const user = await User.create({
          username: req.body.username,
          password: req.body.password,
        });
        res.json(user);
        return;
      }
      res.status(401).json({ message: "can't create user without correct access key"});
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUsers: async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(500).json(error);
    }
  }
};
