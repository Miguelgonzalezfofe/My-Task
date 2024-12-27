class Datauser{
    constructor(user){
        this.nombre = user.displayname;
        this.email = user.email;
        this.fecha_creacion = user.fecha_creacion;
    }
}
export default Datauser;