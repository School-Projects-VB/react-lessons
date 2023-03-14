import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import NotePage from "./pages/NotePage";
import New from "./pages/New";

export const router = createBrowserRouter([
    {
        path: "/note",
        element: <Home/>,
        children: [
            {
                path: "new",
                element: <New/>,
            },
            {
                path: ":id",
                element: <NotePage/>,
            }
        ]
    }
])