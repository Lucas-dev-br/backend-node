const AgendaRepository = require("../repositories/AgendaRapository")

function AgendaController() {

    async function listAgenda(req, res) {
        const agendas = await AgendaRepository.listAgenda();

        res.render('agendas/list', {
            title: "Agendas",
            agendas: agendas
        })
    }

    async function createAgenda(req, res) {
        await AgendaRepository.createAgenda(req.body);
        res.redirect("/agendas")
    }

    return {
        listAgenda,
        createAgenda
    }
}

module.exports = AgendaController();