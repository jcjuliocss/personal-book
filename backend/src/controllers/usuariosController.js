connection = require('../database/connection')

module.exports = {
	async create(request, response){
		const { nome, email, senha } = request.body

		const id_usuario = await connection('usuarios')
		.returning('id_usuario')
		.insert({
			nome,
			email,
			senha
		})

		return response.json({ id_usuario })
	},

	async update(request, response){
		const { id_usuario, nome, email, senha } = request.body

		await connection('usuarios')
			.where('id_usuario', request.body.id_usuario)
			.update({
				nome: nome,
				email: email,
				senha: senha
			})

		return response.json({ id_usuario })
	},

	async index(request, response){
		const usuarios = await connection('usuarios').select('*')

		return response.json(usuarios)
	}
}