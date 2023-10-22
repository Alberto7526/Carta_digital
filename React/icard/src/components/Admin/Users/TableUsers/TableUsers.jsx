import {Table, Button, Icon} from "semantic-ui-react";
import {map} from "lodash";
import "./TableUsers.scss"

export function TableUsers(props) {
    const {users} = props;
    console.log(users)
    
    return (
        <Table className="table-users-admin" striped>
            <Table.Header>
                <Table.Row>
                {users && (
                    map(Object.keys(users[0]),key=>(
                        (!(key==="password") &&
                        <Table.HeaderCell>{key}</Table.HeaderCell>
                        )
                    ))
                    
                )}
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {map(users,(user, index) => (
                <Table.Row key={index}>
                    {map(user,(item,key) => (
                        key !== "password" ? (
                            key === "is_active" 
                            ? (
                                <Table.HeaderCell key={key} className="status">
                                    {item ? <Icon name="check" /> : <Icon name="close" />}
                                </Table.HeaderCell>
                            ) : key === "is_staff" 
                                ? (
                                    <Table.HeaderCell key={key} className="status">
                                        {item ? <Icon name="check" /> : <Icon name="close" />}
                                    </Table.HeaderCell>
                                ) : (
                                    <Table.HeaderCell key={key}>
                                        {item}
                                    </Table.HeaderCell>
                                )
                        ) : null
                    ))}
                    <Actions user= {user} />
                </Table.Row>
            ))}
            </Table.Body>

        </Table>
    )
}

function Actions(props) {
    const {user} = props;

    return (
        <Table.Cell textAlign="right">
            <Button 
            icon 
            onClick={() =>console.log(`Editar usuario ${user.email}`)} 
            title = "Editar">
                <Icon name="pencil" />
            </Button>
            <Button 
            icon 
            onClick={() =>console.log(`Eliminar usuario ${user.email}`)} 
            title = "Eliminar"
            color='blue'>
                <Icon name="delete" />
            </Button>

        </Table.Cell>
    )
} 
