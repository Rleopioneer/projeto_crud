const express = require('express')
const path = require('path')

const app = express()

//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita servidorpara receber dados via post (formulários)
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Título Teste'
    })
})

//404 error (not found)
app.use((req, res) => { //middleware
    res.send('Página Não encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))