import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";



const router = createHashRouter([
	{
		path: "/",

		element: <Root/>,

		children: [
			
		]
	}
]);

export { router }