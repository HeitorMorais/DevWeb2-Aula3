const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("aula3", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar " + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type:Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type:Sequelize.INTEGER
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    },
    observacao:{
        type:Sequelize.STRING
    }
})

//Agendamentos.sync({force:true})

/*Agendamentos.create({
    nome: "Heitor Morais da Silva",
    endereco: "Rua Nelsinho, 245",
    bairro: "Ponte Rasa",
    cep: 08358305,
    cidade: "São Paulo",
    estado: "São Paulo",
    observacao: "Apenas um teste"
})*/

app.get("/", function(req,res){
    res.send("Tela inicial")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    Agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao

    })
    res.redirect("/")
})

app.listen(8081, function(){
    console.log("Servidor Web carregado!")
})