import React, { useState } from 'react'

const Dashboard = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
      });

    const handleSubmit = (e) =>{
        e.preventDefault();
        
            
      }
    
      const onChangeHandler = (e) =>{
        const { name, value } = e.target;
        setFormData(prev =>({
          ...prev,
          [name] : value
        }))
      }

  return (
    <div className='center-text'>
        <div className=' w-6/12 m-auto bg-gray-200 p-8 rounded-lg shadow-md'>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="">Content</label>
                    <textarea
                    rows={5}
                    type="text"
                    className="input-text"
                    placeholder="Content"
                    name="content"
                    value={formData.content}
                    onChange={onChangeHandler}
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className='button-submit'>
                    Submit
                    </button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Dashboard