import React from "react"

interface InputProperties {
    rows: number,
    placeholder: string
}

const Input = (props :InputProperties) => (
    <textarea type="text" rows={props.rows} placeholder={props.placeholder}></textarea>
);

export default Input;