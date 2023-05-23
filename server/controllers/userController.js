const { User } = require('../models');

module.exports = {
    login: async (req, res) => {
        try {
            const user = await User.findOne(req.body);
            res.json(user);
        } catch(error) {

        }
    }
}