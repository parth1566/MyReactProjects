import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }
    return (
        <div>
            <input className='p-2 rounded-2xl min-w-[600px] mt-5'
                type="search"
                placeholder='search here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='flex flex-col gap-5'>
                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div key={paste._id} className="border border-gray-700 rounded-lg p-4 mt-5 ">
                                    <div>
                                        {paste.title}
                                    </div>
                                    <div>
                                        {paste.content}
                                    </div>
                                    <div className="flex flex-row gap-3 place-content-evenly mt-3">
                                        <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors mt-3">
                                            <a href={`/?pasteId=${paste?._id}`}>
                                                Edit
                                            </a>
                                        </button>
                                        <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors mt-3">
                                          <a href={`/paste/${paste?._id    }`}>
                                            View
                                          </a>
                                        </button>
                                        <button onClick = {() => handleDelete(paste?._id)}
                                        className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors mt-3">
                                            Delete
                                        </button>
                                        <button onClick={() => {
                                            navigator.clipboard.writeText(paste?.content)
                                            toast.success("copied to clipboard");
                                        }}
                                         className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors mt-3">
                                            Copy
                                        </button>
                                        <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors mt-3">
                                            Share
                                        </button>
                                    </div>
                                    <div>
                                        {paste.createdAt}
                                    </div>
                                </div>

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Paste
