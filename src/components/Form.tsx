import React from "react"
import Submit from "./Submit";
import Input from "./Input";

const Form: React.FC = () => (
    <form className="form" action="">
        <Input rows="1" placeholder="Write a title..." />
        <Input rows="5" placeholder="Write a note..." />
        <Submit value="Add note" />
    </form>
);

export default Form;