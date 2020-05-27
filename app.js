const path = require('path')
const http = require('http')


const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.set('view engine', 'ejs')
app.set('views','views')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const notfoundPath = path.join(__dirname,'views','404.html')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404Page)


app.listen(3000)