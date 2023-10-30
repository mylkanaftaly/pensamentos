const { findAll } = require('../model/User');
const User = require('../model/User');

module.exports = {
    async createUser(request, response){
        const {name, email, password, confirm_password} = request.body

        const user = await User.create({
            name, 
            email,
            password,
            confirm_password
        });

        return response.json(user);
    },

    async findAllUsers(request, response) {
        const users = await User.findAll({ raw: true });

        return response.json(users);
    },

    async findUser(request, response) {
        const { id } = request.params

        const user = await User.findOne({ where: { id: id} });

        return response.json(user);
    },

    async updateUser(request, response) {
        const { id } = request.params
        const { name, email, password, confirm_password } = request.body
        const user = await User.update({
            name,
            email,
            password,
            confirm_password
        },
        {
            where: { id: id }
        },
    );

       return response.json(user);
    },

    async deleteUser(request, response) {
        const { id } = request.params

        const user = await User.destroy({ where: { id: id }});

        return response.json({ message:"Usuario deletado"});
    },
}