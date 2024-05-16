const prisma = require("../utils");

const prisma = new PrismaClient();

const TimesController = {

    async create(request, response) {
        const RequestBody = request.body;
        try {
            const newUser = await prisma.user.create({
                data: {
                    name: RequestBody.name,
                    anoFundacao: RequestBody.anoFundacao,
                    pais: RequestBody.pais,
                    tecnico: RequestBody.tecnico,
                },
            });
            response.json(newUser);
        } catch (error) {
            response.status(404).json({ error: 'Erro ao cadastrar usuário' });
        }
    },

    async getUsers(request, response) {
        try {
            const users = await prisma.user.findMany();
            response.json(users);
        } catch (error) {
            request.status(404).json({ error: 'Erro ao obter usuários' });
        }
    },

    async updateUser(request, response) {
        const { id } = request.params;
        const { name, email } = request.body;
        try {
            const updatedUser = await prisma.user.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    name,
                    email,
                },
            });
            response.json(updatedUser);
        } catch (error) {
            response.status(404).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    async deleteUser(request, response) {
        const { id } = request.params;
        try {
            await prisma.user.delete({
                where: {
                    id: parseInt(id),
                },
            });
            response.json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            response.status(404).json({ error: 'Erro ao deletar usuário' });
        }
    },
};

module.exports = TimesController;
