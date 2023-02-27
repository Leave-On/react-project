/* eslint-disable @typescript-eslint/no-var-requires */
const fs  = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const cors = require('cors')
const server = jsonServer.create()


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))




server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
// delay sim
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

server.post('/login', cors(corsOptions), (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'))
        const { users } = db

        const userFromBd = users.find(user =>
            user.username === username && user.password === password
        )

        if (userFromBd) {
            return res.json(userFromBd)
        }

        return res.status(403).json({ message: 'auth error' })
    } catch (e) {
        console.log(e.message)
        return res.status(500).json({ message: e.message });
    }

})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'auth error' })
    }
    next()
})
server.use(router)
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
