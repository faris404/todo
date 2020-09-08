const express = require('express')


const app = express()


app.use(express.json())
app.use('/api/todos', require('./routes/todos'))

app.get('/', (req, res) => {
    res.json({ msg: "hello world" })
})
const PORT = process.env.PORT | 5000

app.listen(PORT, () => console.log(`server started at ${PORT}`))