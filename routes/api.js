const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const UsersController = require("../app/controllers/api/UsersController");
const AgendaController = require("../app/controllers/api/AgendaController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)


router.get('/users', UsersController.list)
router.post('/users/login', UsersController.login)
router.get('/users/:id', TasksController.show)
router.post('/users', UsersController.save)
router.delete('/users/:id', UsersController.remove)
// router.put('/users/:id', UsersController.update)

// Rotas da agenda
router.get('/agendas', AgendaController.listAgenda)
router.post('/agendas', AgendaController.createAgenda)
router.get('/agendas/:id', AgendaController.getAgendaById)
router.delete('/agendas/:id', AgendaController.deleteAgenda)
router.put('/agendas/:id', AgendaController.updateAgenda)


router.get('*', function notFound(request, response) {
  return response.status(404).json({ message: 'Página não encontrada' });
});

module.exports = router;