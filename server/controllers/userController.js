const { User } = require('../models');

module.exports = {
    login: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                res.status(401).json({ message: "Incorrect username or password. Please try again!" });
                return;
            }

            const correctPassword = user.isCorrectPassword(req,body.password);
            
            if(!correctPassword) {
                res.status(401).json({ message: "Incorrect username or password. Please try again!" });
                return;
            }

            res.json({ user, message: "You are logged in!" });
        } catch(error) {
            res.status(500).json(error);
        }
    }
}