const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0a8c4851195049d295ffc3a453f32326',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


// app.use('/', express.static(path.join(__dirname, './index.html')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/clicky', (req, res) => {
    rollbar.info('Someone somewhere clicked a lonely button')
    res.status(200).send()
})



const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))