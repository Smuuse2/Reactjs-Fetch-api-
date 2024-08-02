import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TodoServices from './Services/Todo';

const Update = () => {
    const { id } = useParams();
    const [data, setData] = useState({ title: '' });

    const navigate = useNavigate()

    useEffect(() => {
        TodoServices.update(id).then(res => {
            setData(res.data)
        
        });
        
    }, []);

    // ku shub 

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
    };

    //Form Data Update 
    const handleSubmit = (e) => {
        e.preventDefault();
        TodoServices.update(id, data).then(() => {
            setData(data)
            navigate('/TodoList')
            console.log(data)
            
        }).catch(error => {
            // Handle error
            console.error('There was an error updating the todo!', error);
        });
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen -mt-52">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex items-center space-x-2 mb-6">
                    <h1 className="text-xl font-semibold">Todo App</h1>
                </div>

                <form id="changePasswordForm" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="text-sm font-medium text-gray-700 block mb-2">
                            Title Todo
                        </label>
                        <input
                            name="title"
                            value={data.title}
                            type="text"
                            id="title"
                            onChange={handleChange}
                            className="p-4 form-input block w-full border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
