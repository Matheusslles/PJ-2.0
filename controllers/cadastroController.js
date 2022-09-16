//const {funcionarios} = require ('../models')

const Funcionario = require('../controllers/UserController');


const cadastroController = {
    viewCadastro: async (req,res) =>{
        res.render('cadastro')
    },
    create: async (req, res) =>{
        const {first_name, data_nascimento, sexo, setor, Matricula,Pis,entrada,saida,sobreNome,telefone} = req.body
    // criamos um try catch com o nome das tabelas, usamos uma let com newUser = 
    //que vai cadastrar um novo usuario, toda vez que tentar fazer algum cadastro no banco.
    //temos que passar todos os parametros que esta no banco de dados.
        try {
            let novoFuncionario = await Funcionario.create({
            first_name,
            sobreNome, 
            telefone,
            PIS,
            função,
            Matricula,
            setor,
            Nascimento,
            entrada,
            saida
            })

            res.render()
        // o cath passamos ele com o parametro de (erro), para toda que vez que o codigo do try
        // nao rodar ele aparecera uma mensagem de erro (nao foi possivel cadastrar o Usuario).
        } catch (error) {
            res.status(400).json({
                result: error,
                message: "Não foi possível cadastrar o usuário."
              });
        }
    },
        store: async (req,res) => {
            const {Nome, sobreNome, telefone, PIS, Nascimento, entrada, saida, função, Matricula,setor} = req.body

         await Funcionario.create({ first_name,
                sobreNome, 
                telefone,
                PIS,
                função,
                Matricula,
                setor,
                Nascimento,
                entrada,
                saida

            })
            return res.redirect('/usuarios')
        }
    };




module.exports = cadastroController;