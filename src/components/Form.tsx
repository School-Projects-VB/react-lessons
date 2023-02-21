import React from "react"
import Input from "./Input";

const Form: React.FC = () => (
    <form className="form" action="">
        <Input rows="1" placeholder="Write a title..." />
        <Input rows="5" placeholder="Write a note..." />
        <button className="button" type="submit">Add a note</button>
    </form>
);

export default Form;