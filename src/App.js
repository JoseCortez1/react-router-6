import { HashRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Footer from "./Footer";

function App() {
	return (
		<>
			<HashRouter>
				<Menu></Menu>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/blog" element={<Blog />}>
						<Route path=":slug" element={<BlogPost />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/*" element={<p>Not Found</p>} />
				</Routes>
				<Footer></Footer>
			</HashRouter>
		</>
	);
}

export default App;
