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

    async function updateAgenda(id, dados){
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
            done: dados.done === '1' ? true : false
        }

        const agendaUpdate = await Agenda.update(agenda, {where: {id: id}});
        return agendaUpdate;
    }

    async function deleteAgenda(id) {
        await Agenda.destroy({where: {id: id} });
    }

    async function findAgenda(id) {
        const agenda = await Agenda.findByPk(id);
        return agenda;
    }

    return {
        listAgenda,
        createAgenda,
        updateAgenda,
        deleteAgenda,
        findAgenda
    }

}

module.exports = AgendaRepository();
