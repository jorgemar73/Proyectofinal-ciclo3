export default {
    data() {
        return{
            usuarios:[],
            usuario:{activo:"",rol:"",documentoId:"",nombre:"",email:"",pasword:"",f_ult_modificacion:""},
            editar: false,
            usuarioEditar:{}
        }

    },

    created() {
        this.listarUsers();

    },

    methods: {

        listarUsers(){
            this.axios.get('/usuario')
            .then(res=>{
                console.log(res.data);
                    this.usuarios = res.data;

            })
            .catch(e=>{
                console.log(e.response)
            })
        },

        agregarUserWeb(){
            this.axios.post('/newUsuario',this.usuario)
            .then(res=>{
                this.usuarios.push(res.data)
                //this.usuarios.rol = "";
                this.usuarios.documentoID = "";
                this.usuarios.nombre = "";
                this.usuarios.email = "";
                //this.mensaje.color="success";
                this.mensaje.texto="Usuario creado";
                this.showAlert();

            })
            .catch(e=>{
                console.log(e.response)
            })
        },

        agregarUserMasivo(){
            this.axios.post('/newUsuario',this.usuario)
            .then(res=>{
                this.usuarios.push(res.data)
                this.usuarios.rol = "";
                this.usuarios.documentoID = "";
                this.usuarios.nombre = "";
                this.usuarios.email = "";
                //this.mensaje.color="success";
                this.mensaje.texto="Usuario creado";
                this.showAlert();

            })
            .catch(e=>{
                console.log(e.response)
            })
        },

        eliminarUsuario(id){
            this.axios.delete(`/usuario/${id}`)
            .then(res=>{
                const index = this.usuarios.findIndex(item => item._id === res.data._id);
                this.usuarios.splice(index,1);   
                //this.mensaje.color="success";
                this.mensaje.texto="Usuario eliminado";
                this.showAlert();

            })
            .catch(e=>{
                console.log(e.response)
            })
        },

        activarEdicion(id){
            this.editar = true;
            this.axios.get(`/usuario/${id}`)
            .then( res=>{
                this.userEditar = res.data;
 
            })
            .catch(e=>{
                console.log(e.response)
            })
        },

        editarUsuario(item){
            this.axios.put(`/usuario/${item._id}`,item)
            .then(res=>{
                const index = this.usuarios.findIndex( n=> n._id === res.data._id);
                this.usuarios[index].documentoID = res.data.documentoID;
                this.usuarios[index].nombre =res.data.nombre;
                this.usuarios[index].email = res.data.email;
                this.usuarios[index].rol =res.data.rol;
                //this.mensaje.color="success";
                this.mensaje.texto="Usuario editado";
                this.showAlert();
                this.editar = false;

            })
            .catch(e=>{
                console.log(e.response)
            })
        },


        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }


    }

}
