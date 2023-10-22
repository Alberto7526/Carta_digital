import {Button} from "semantic-ui-react"
import "./HeaderPage.scss"

export function HeaderPage(props) {
    const {title, btTitle, btclick, btTitleTwo, btClickTwo}  = props
    return (
        <div className="header-page-admin">
            <h2>{title}</h2>
            <div>
                {btTitle && (
                    <Button positive onClick={btclick}>
                        {btTitle}
                    </Button> 
                )}
                {btTitleTwo && (
                    <Button negative onClick={btClickTwo}>
                        {btTitleTwo}
                    </Button> 
                )}
            </div>
            
        </div>
    )
}
