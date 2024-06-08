const Agenda = require('../models/Agenda');

function AgendaRepository () {

    async function listAgenda() {
        const agendas = await Agenda.findAll({raw : true})
        return agendas
    }

    async function createAgenda(dados) {
        const agenda = {
            nome: dados.nome,
            celular: dados.celular,
            email: dados.email,
            rua: dados.rua,
            numero: dados.numero,
            bairro: dados.bairro,
            cidade: dados.cidade,
            estado: dados.estado,
            cep: dados.cep,
            complemento: dados.complemento,
            done: false,
        }

        const criarAgenda = await Agenda.create(agenda);
        return criarAgenda
    }

    return {
        listAgenda,
        createAgenda
    }

}

module.exports = AgendaRepository();
