// Criando modelos de Tabelas com sequelize
module.exports = (sequelize, Datatype) => {
	const Usuario = sequelize.define(	
		'Usuario',
		{
			id_usuario: {
				type: Datatype.INTEGER,
				primarykey: true,
				//autoIncrement: true
			},
			nome: {
				type: Datatype.STRING,
				allowNull: false,
			},	
            sobreNome: {
				type: Datatype.STRING,
				allowNull: false,
			},
			nascimento: {
				type: Datatype.DATE,
				allowNull: false,
			},
			setor: {
				type: Datatype.STRING,
				allowNull: false,
			},
            telefone:{
                type: Datatype.STRING ,
                allowNull: false
            },
            PIS:{
                type: Datatype.STRING ,
                allowNull: false
            },
            funcao:{
                type: Datatype.STRING ,
                allowNull: false
            },
            Matriucla:{
                type: Datatype.STRING ,
                allowNull: false
            },
            entrada:{
                type: Datatype.DATE, 
                allowNull:false
            },
            saida:{
                type: Datatype.DATE
            }
		},
		{
			tableName: 'usuario',
			timestamps: false,
		}
	);
	return Usuario;
};
