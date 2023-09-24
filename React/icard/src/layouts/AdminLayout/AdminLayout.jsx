import "./AdminLayout.scss";
import {LoginAdmin} from "../../pages/Admin"
import { useAuth } from "../../hooks";
import {TopMenu, SideMenu } from "../../components/Admin"

export function AdminLayout(props) {
    const {children} = props;
    const {auth} = useAuth();

    if (!auth) return <LoginAdmin/>
    return (
        <div className="admin_layout">
            <div className="admin_layout__menu">
                <TopMenu />
            </div>
            <div className="admin_layout__main-content">
                <SideMenu>
                    {children}
                </SideMenu>
            </div>
        </div> 
    )
}

