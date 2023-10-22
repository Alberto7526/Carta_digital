import {useEffect} from "react"
import {Loader} from "semantic-ui-react"
// mis importaciones 
import {HeaderPage,TableUsers} from "../../components/Admin"
import {useUser} from "../../hooks"

export  function UsersAdmin() {
    const {loading, users, getUsers} = useUser(); // llamamos nuestro hook useusers para traer la información de nuestros usuarios

    // vamos a utilizar el useEffect para que nuestra petición se haga unicamente cuando carguemos el componentet 
    useEffect(()=>{getUsers()},[]);
    return (
        <>
            <HeaderPage  
            title = "Usuarios" 
            btTitle = "Nuevo Usuario" />
            {loading ? (
                <Loader active inline = "centered">
                    Cargando...
                </Loader>
            ):(
                <TableUsers  users = {users} />
            )}
        </>
    )
}
