const  express = require ('express')
const app = express()
const port = 2000


// Import Route
const productRoute = require('./src/routes/productRoute')
const storeRoute = require('./src/routes/storeRoute')
const uiRoute = require('./src/routes/uiRoute')

app.use(express.json())
app.use(productRoute)
app.use(storeRoute)
app.use(uiRoute)
app.get(`/`,(req,res)=>{
    res.send({message : 'Akses Berhasil'})
})

// Menghubungkan API
app.listen(port, ()=> console.log(`API sudah terkoneksi`+ port))