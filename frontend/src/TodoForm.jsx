
import TodoServices from "./Services/Todo";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function TodoForm() {
  
  // 
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/TodoList");
    TodoServices.create({ title: title }).then((res) => {
      console.log(res.data);
      //Toast Design saved 
      toast.success("Book created successfully!");
      setTitle("");
    });
  };
  return (
    <div className=" flex items-center justify-center h-screen-mt-52">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border">
        <div className="flex items-center space-x-2 mb-6 ">
          <h1 className="text-xl font-semibold">Todo App</h1>
        </div>

        <form
          id="changePasswordForm"
          className="space-y-6 "
          onSubmit={onSubmitHandler}
        >
          <div>
          
            <input
            placeholder="Please Enter Title Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="currentPassword"
              className="p-4 password-input form-input block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="">
            <button onClick={toast}
              type="submit"
              
              className="px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
            <ToastContainer />
              Save todo
            </button>
          </div>
        </form>

        
      </div>


      
    </div>
  );
}

export default TodoForm;
