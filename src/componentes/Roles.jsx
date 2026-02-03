import MenuAcordeon from './MenuAcordeon.jsx';

const Roles = (props) => {
    return(
        <aside>
        <p>{props.usuario} {props.token} {props.menú} ROLES</p>
        <MenuAcordeon />
        </aside>
    )
}

export default Roles;