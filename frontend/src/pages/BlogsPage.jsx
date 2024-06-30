import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BlogsPage = ({display, displaySight, postList}) => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Dashboard postList={postList}/>
        <Sidebar display={display} displaySight={displaySight}/>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
