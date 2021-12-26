const Link = (props) => {
    return (
        <li className="px-7 "><a className="text-white" href={props.id}>{props.content}</a></li>
    )
}

export default Link
