interface SubmitProperties {
    value: string
}

function Submit(props: SubmitProperties) {
    const { value } = props

    return (
        <input type="submit" className="button" value={value}></input>
    )
}

export default Submit;