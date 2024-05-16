const prisma = require("../utils");

const prisma = new PrismaClient();

const JogadorController = {

  async create(request, response) {
    const RequestBody = request.body;
    try {
      const Jogador = await prisma.user.create({
        data: {
          name: RequestBody.name,
          idade: RequestBody.idade,
          posicao: RequestBody.posicao,
          nacionalidade: RequestBody.nacionalidade,
        },
      });
      response.json(Jogador);
    } catch (error) {
      response.status(404).json({ error: 'Erro ao cadastrar usuário' });
    }
  },

  async getUser(request, response) {
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
      const updatedJogador = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
        },
      });
      response.json(updatedJogador);
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

module.exports = JogadorController;
