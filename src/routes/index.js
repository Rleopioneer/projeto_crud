const router = require('express').Router()

const CustomersController = require('../controllers/customers')

const IndexControler = require('../controllers/index')

//rotas
router.get('/', IndexControler.index)

//registro
router.get('/register', CustomersController.index)

//recebendo dados de formulário
router.post('/register/add', CustomersController.add)

//Lister
router.get('/list', CustomersController.list)

//Editar
router.get('/edit', CustomersController.formEdit)
//recebe parâmetro com o edit
router.post('/edit/:id', CustomersController.edit)

//remover 
router.get('/remove/:id', CustomersController.remove)

module.exports = router