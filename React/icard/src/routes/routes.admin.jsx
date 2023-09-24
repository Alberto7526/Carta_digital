import {AdminLayout} from "../layouts" // importamos los layouts 
import {HomeAdmin,UsersAdmin } from "../pages/Admin" // importamos las paginas 

const routesAdmin = [
    // definimos la primera ruta dentro de un objeto {}
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin
    }
];

export default routesAdmin;