import TodoServices from "./Services/Todo";
import { MdDeleteOutline } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import 'primeicons/primeicons.css';
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Todolist() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoadig] = useState(true);

  useEffect(() => {
    TodoServices.findAll().then((response) => {
      setTodo(response.data);
      setLoadig(false);
    });
  }, []);

  if (loading) return <h1>loading ....</h1>;

  const removeTodo = (id) => {
  
    TodoServices.elete(id)
      .then((response) => {
        console.log(response)
       setTodo(todo.filter((todo)=>{
          return todo.id !== id;
       }))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-100">
   
    <div className="w-full px-5 mx-auto lg:container">
      <div className="max-w-screen-lg mx-auto">
        <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
          <table className="min-w-full bg-white rounded whitespace-nowrap">
            <thead className="border-b bg-gray-50">
              <tr className="">
                <th className="px-3 py-3 text-center ">
                  <div className="flex place-content-center">
                    <input
                      type="checkbox"
                      name="select_all"
                      id="select_all"
                      className="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700"
                    />
                  </div>
                </th>

                <th className="px-3 py-3 text-xs font-bold text-left text-gray-900 uppercase align-middle">
                  ID
                </th>
                <th className="px-3 py-3 text-xs font-bold text-left text-gray-900 uppercase align-middle">
                  Todo Title
                </th>
                <th className="px-3 py-3 text-xs font-bold text-left text-gray-900 uppercase align-middle">
                  Edit
                </th>
                <th className="px-3 py-3 text-xs font-bold text-right text-gray-900 uppercase align-middle">
                  Delete
                </th>
                <th className="px-3 py-3 text-xs font-mediumtext-left text-gray-900 uppercase align-middle"></th>
              </tr>
            </thead>
            <tbody className="text-sm bg-white divide-y divide-gray-200">
              {todo.map((todo) => {
                return (
                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {todo.id}
                    </td>
                    <td className="px-3 py-4">{todo.title}</td>
                    
                    <td className="px-3 py-4 ">
                    <Link
                      className="mt-10 text-right text-green-600 cursor-pointer"
                      to={`/updated/${todo.id}`}
                    >
                      <LiaEditSolid className="text-2xl text-green-500-500"/>
                    </Link>
                    </td>
                    <td
                      
                      className="w-20 px-3 py-2 text-center text-gray-500"
                    >
                      <button onClick={() => removeTodo(todo.id)}>
                          <MdDeleteOutline className="text-2xl text-red-500"  />
                          </button>
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Todolist;
