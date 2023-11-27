import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <p>Click <Link to="/blogs">here</Link> to see the blog page</p>
    </div>
  );
}

export default Home;
