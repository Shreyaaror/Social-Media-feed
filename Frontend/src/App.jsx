import React from "react"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from "./Pages/CreatePost.jsx"
import Feed from "./Pages/Feed.jsx"

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<CreatePost />} />
        <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
