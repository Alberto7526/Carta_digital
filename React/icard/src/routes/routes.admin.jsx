import {AdminLayout} from "../layouts" // importamos los layouts 
import {HomeAdmin} from "../pages/Admin" // importamos las paginas 

const routesAdmin = [
    // definbimos la primera ruta dentro de un objeto {}
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    }
];

export default routesAdmin;