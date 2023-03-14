import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Button from "src/components/Button";
import NotesList from "../components/Notes/NotesList";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/note/new");
    }

    return (
        <div className="Home">
            <h1>Notes App</h1>
            <Button onClick={handleSubmit} text={"Add note"}/>
            <Outlet/>
            <NotesList/>
        </div>
    )
}

export default Home;