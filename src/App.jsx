import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "./components/mainHeader";
import Cards from "./components/Cards";
import {useBlogsContext} from "./hooks/useBlogsContext"
import { useState } from "react";

function App() {
  const {blogs,dispatch} = useBlogsContext()
  const [find,setFind] = useState('')


  return (
    <>
      <div className="container w-10/12 my-5">
        <MainHeader setFind={setFind} />
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
          {blogs.map((blog,number) => {
            if(blog.title.toLowerCase().includes(find.toLowerCase()))
             return <Cards title={blog.title} recipe={blog.recipe} components={blog.components} key={number}></Cards>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
