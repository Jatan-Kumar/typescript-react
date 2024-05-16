const Todo: React.FC<{listing: string[]}> = (props) => {
    return (
        <div>
            <ul>
                {
                    props.listing.map((item, index) => {
                    return (
                    <li key={index}>{item}</li>
                    )})
                }
            </ul>
        </div>
    )
}

export default Todo;