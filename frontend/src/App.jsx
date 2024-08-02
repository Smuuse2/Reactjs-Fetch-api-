
import TodoForm from './TodoForm';
import Todolist from './Todolist'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Update from './Update';
function App() {


  return (
  
    <div className=''>
     
     <Router>
    
        <div className='flex justify-between   p-10 '>
          <div>
            LOGO
          </div>
          <nav className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/TodoList">Todolist</Link>
            <Link to="/TodoForm">Todo Form</Link>
          </nav>
        </div>

     <Routes>
          <Route path="/TodoList" element={<Todolist />} />
          <Route path="/TodoForm" element={<TodoForm/>} />
          <Route path={`/updated/:id`} element={<Update/>} />
          {/* Add other routes here if necessary */}
        </Routes>
     </Router>


    </div>
  )
}

export default App
