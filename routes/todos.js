const express = require('express')
const todos = require('../controllers/todos')


const router = express.Router()

router.get('/',todos.getAll)
router.get('/:id',todos.getOne)
router.post('/',todos.createOne)
router.patch('/:id',todos.updateOne)
router.delete('/:id',todos.deleteOne)

module.exports = router