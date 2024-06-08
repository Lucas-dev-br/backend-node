const agendaRepository = require("../../repositories/AgendaRapository");

function AgendaController () {
    async function listAgenda(req, res) {
        const agendas = await agendaRepository.listAgenda();

        res.status(200).json(agendas);
    }

    async function createAgenda(req, res) {
        try{
            const agenda = await agendaRepository.createAgenda(req.body);
            res.status(201).json(agenda);
        }catch (error) {
            res.status(400).json(error.details)
        }
    }

    return {
        listAgenda,
        createAgenda
    }
}

module.exports = AgendaController();