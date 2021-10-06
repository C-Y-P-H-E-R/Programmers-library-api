const app = require('express')()
const path = require('path')
const PORT = '2000'
const hostname = "localhost"
const router = require('./api/libraryroute')

app.use('/', router)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(PORT, hostname, () => console.log(`server listening on the port http://${hostname}:${PORT}/`));
