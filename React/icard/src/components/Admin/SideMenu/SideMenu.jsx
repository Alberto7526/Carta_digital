import {Menu, Icon} from "semantic-ui-react" // para dibujar el menu y los iconos 
import {Link, useLocation} from 'react-router-dom' // para asociar rutas a cada item del menu y para saber en que subruta estamos
// importaciones propias 
import "./SideMenu.scss" // hoja de estilos 
import {useAuth} from "../../../hooks" // para mostrar o no el icono del menu deacuerdo a quien este logueado


export  function SideMenu(props) {
    const {children} = props;
    const {pathname} = useLocation(); // permite conocer la url onde actualmente estoy 
    return (
        <div className="side-menu-admin"> 
            <MenuLeft  pathname = {pathname}/> 
            <div className="content">
                {children}
            </div>
        </div>
    )
}

function MenuLeft (props) {
    /**
     * recibimos el pathname como paametro y convertimos el menu iten en un link y lo marcamos
     */
    const {pathname} = props;
    const {auth} = useAuth();

    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item  as = {Link} to={"/admin"} active = {pathname === "/admin"} >
                <Icon name = "home" /> Pedidos
            </Menu.Item>
            <Menu.Item  as = {Link} to={"/admin/table"} active = {pathname === "/admin/table"} >
                <Icon name = "table" /> Mesas
            </Menu.Item>
            <Menu.Item  as = {Link} to={"/admin/payments-history"} active = {pathname === "/admin/payments-history"} >
                <Icon name = "history" /> Historial de pagos
            </Menu.Item>
            <Menu.Item  as = {Link} to={"/admin/categories"} active = {pathname === "/admin/categories"} >
                <Icon name = "folder" /> Categorias
            </Menu.Item>
            <Menu.Item  as = {Link} to={"/admin/products"} active = {pathname === "/admin/products"} >
                <Icon name = "cart" /> Productos
            </Menu.Item>
            {/* valido si el usuario logueado es miembro o no con  */}
            {auth.me?.is_staff && (
            <Menu.Item  as = {Link} to={"/admin/users"} active = {pathname === "/admin/users"} >
            <Icon name = "users" /> Usuarios
            </Menu.Item>
            )}
            
        </Menu>
    )

}
