const User = require('../models/user.models');

class UserServices {
    static async create(newUser) {
        try {
            const user = await User.create(newUser);
            return user;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserServices;