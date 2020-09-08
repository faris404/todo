const Todo = require('../models/todos')

//  create new todos

exports.createOne = async function (req, res) {
    try {
        const title = req.body.title
        const body = req.body.body
        const d = req.body.date

        todo = new Todo({ title, body, date: d })
        const result = await todo.save()
        res.status(200).json(result)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }


}


//  get all todos
exports.getAll = async function (req, res) {
    try {
        result = await Todo.find().sort({ modifiedDate: -1 }).exec()
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}


//  get one todo
exports.getOne = async function (req, res) {
    try {
        const id = req.params.id
        result = await Todo.findById(id).exec()
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

//  update one
exports.updateOne = async function (req, res) {
    try {
        const id = req.params.id
        const updateDoc = req.body.updateDoc
        // const updateKeys = req.body.updateKeys
        // const updateVals = req.body.updateVals

        // let updateDoc = updateKeys.reduce((obj, key, i) => ({ ...obj, [key]: updateVals[i] }), {})

        const result = await Todo.updateOne({ _id: id }, { $set: updateDoc }).exec()
        res.status(200).json(result)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

//  delete one
exports.deleteOne = async function (req, res) {
    try {
        const id = req.params.id
        result = await Todo.deleteOne({ _id: id }).exec()
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

