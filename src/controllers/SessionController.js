const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const{email, senha, type} = request.body;
        console.log(email,senha,type);
        const userInput = await connection('users')
            .where('email', email)
            .andWhere('senha', senha)
            .first();

            if(!userInput) {
                return response.status(400).json({ error: 'No user found'});
            }

            return response.json(userInput);
    }
}