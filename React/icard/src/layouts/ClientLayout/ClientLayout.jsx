import "./ClientLayout.scss";

export function ClientLayout(props) {
    const { children } = props;
    return (
        <div>
            <p>Client Layout</p>
            {children}
            <p>Fin del children</p>
        </div>
    )
}
