// Importando o model Thought
const Thought = require("../model/Thought");

module.exports = {
    // Função responsável por renderizar a pagina dashboard
    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true });
        return response.render("thoughts/dashboard", { thoughts });
    },

    // Função que renderiza a página de cadastrar o pensamento
    async registerThought(request, response){
        return response.render("thoughts/register")
    },
    
    async createThought(request, response){
        const { title, description } = request.body
        // A função create é responsável por criar ou inserir os dados.
        // Nesse caso, a função create está cadastrando os dados da aplicação no banco de dados.
        const thought = await Thought.create({title, description});
    
        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error){
            return response.error(error);
        }
    },

    // Função responsável por buscar todos os pensamentos cadastrados
    // async findAllThoughts(request, response){
    //     const thoughts = await Thought.findAll({ raw:true });
    
    //     return response.json(thoughts);
    // },

    async findThought(request, response){
        const { id } = request.params;
        const thought = await Thought.findOne({ where: { id:id }});

        return response.json(thought);
    },


    async showPageEditThough(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: { id: id }, raw: true});

        return response.render("thoughts/edit", { thought });0
    },

    async updateThought(request, response){
        const { id } = request.params;
        const { title, description } = request.body;
        const thought = await Thought.update({
            title,
            description
        },
        {
            where:{ id:id }
        },
    );

    try{
        if(thought){
            return response.redirect("/thoughts/dashboard");
        }
    }catch(error){
        console.error(error);
    }

},
 
    async deleteThought(request, response){
        const { id } = request.params;
        const thought = await Thought.destroy({ where: {id:id}});
 
        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error);
        }
    },
}