const express = require('express')
require('./db/mongoose.js')
const User = require('./models/users.js')
const Task = require('./models/tasks.js')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT

// app.use((req,res,next) => {
//     res.status(503).send('Maintenance mode. Try again later.')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server on port', port)
})
