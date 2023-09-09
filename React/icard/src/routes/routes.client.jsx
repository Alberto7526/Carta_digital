import {ClientLayout} from "../layouts" // importamos los layouts 
import {Home} from "../pages/Client" // importamos las paginas 

const routesClient = [
    // definbimos la primera ruta dentro de un objeto {}
    {
        path:"/",
        layout: ClientLayout,
        component : Home
    }
];

export default routesClient;