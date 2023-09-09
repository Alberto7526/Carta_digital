import {AdminLayout} from "../layouts" // importamos los layouts 
import {LoginAdmin} from "../pages/Admin" // importamos las paginas 

const routesAdmin = [
    // definbimos la primera ruta dentro de un objeto {}
    {
        path: "/admin",
        layout: AdminLayout,
        component: LoginAdmin
    }
];

export default routesAdmin;