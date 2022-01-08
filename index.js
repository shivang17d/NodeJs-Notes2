// Http module
const http = require('http');

// createServer takes function callback which has two parameter request and response
const app = http.createServer((req,res) => {
    // res.end('Welcome')   // for ending refreshing condition (respond end)

    // We can send HTML also
    res.end('<h1>Hello from server.<h1>')

})

// Port 3000 might not be available on the server then we write below line
// .env file stores all environment variables (during deploy)
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})