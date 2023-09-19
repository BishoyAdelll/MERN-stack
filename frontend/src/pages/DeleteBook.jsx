import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';

const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const{id}=useParams();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
      alert('An error happend.please check console');
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="tex-3xl my-4">Delete book</h1>
      {loading ? <Spinner/> : ''}
      <div className="flex flex-col items-center border-2 border-sky-400 w-[600px] rounded-xl p-8 mx-auto">
        <h3 className="text-3xl">are you shure you want delete this Book</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
          yes,Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook