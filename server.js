const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('cfb systematic rankings')
})

app.listen(PORT, ()=> { console.log('Server is up and running')})