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
        res.redirect("/agendas/save")
    }

    async function deleteAgenda(req, res) {
        await AgendaRepository.deleteAgenda(req.params.id);
        res.redirect('/agendas')
      }

    return {
        listAgenda,
        createAgenda,
        deleteAgenda
    }
}

module.exports = AgendaController();