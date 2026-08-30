import React, { useEffect, useState } from 'react'
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const ViewPaste = () => {

    const {id} = useParams();

    const allPastes = useSelector((state) => state.paste.pastes);

    const paste = allPastes.filter((p) => p._id === id)[0];

    console.log("Final Paste: ", paste);

    return (
        <div>
            <div className='flex justify-center flex-row gap-7 place-content-between'>
                <input
                    className='p-2 rounded-2xl mt-2 w-[60%] pl-4 '
                    type='text'
                    placeholder='enter title here'
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* <button
                    onClick={createPaste}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl transition-colors">
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button> */}


            </div>

            <div className='mt-8'>
                <textarea className='rounded-2xl mt-4, min-w-[500px] p-4'
                    value={paste.content}
                    placeholder='enter content here'
                    disabled
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default ViewPaste
