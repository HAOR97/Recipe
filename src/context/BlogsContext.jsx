import { createContext, useReducer } from 'react'
import Blogs from "../data/blogs.json"

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      {console.log('pokrece')
      return {
        blogs: [action.payload, ...state.blogs],
      };}
    default:
      return state;
  }
}

export const BlogContextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(blogsReducer,{
    blogs: Blogs
  })

  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  )
};
