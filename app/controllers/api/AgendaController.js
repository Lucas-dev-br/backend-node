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

    async function getAgendaById(req, res){
        try {

            const agenda = await agendaRepository.findAgenda(req.params.id);
      
            if (!agenda) {
              return res.status(404).send({
                message: "Agenda não encontrada."
              })
            }
      
            res.status(200).json(agenda);
      
          } catch (error) {
            res.status(500).json({
              message: "Agenda não encontrada"
            });
          }
    }

    async function updateAgenda(req, res){
        const agenda = await agendaRepository.findAgenda(req.params.id);

        if(!agenda) {
            return res.status(404).send({
                message: "Agenda não encontrada."
            })
        }

        await agendaRepository.updateAgenda(req.params.id, req.body);

        res.json({
            message: "Agenda atualizada com sucesso"
        })
    }

    async function deleteAgenda(req, res) {
        const agenda = await agendaRepository.deleteAgenda(req.params.id);

        if (!agenda) {
            return res.status(404).send({
              message: "Agenda não encontrada."
            })
        }

        await agendaRepository.deleteAgenda(req.params.id);

        res.status(200).json({
            message: "Agenda deletada com sucesso"
        })
    }

    return {
        listAgenda,
        createAgenda,
        updateAgenda,
        deleteAgenda,
        getAgendaById
    }
}

module.exports = AgendaController();