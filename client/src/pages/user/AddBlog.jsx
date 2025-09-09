import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { parse } from 'marked'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const { axios } = useAppContext()
    const navigate = useNavigate()
    const [isAdding, setIsAdding] = useState(false)
    const [loading, setLoading] = useState(false)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    const [image, setImage] = useState(false);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [category, setCategory] = useState('Startup');
    const [isPublished, setIsPublished] = useState(false);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }
            });
        }
    }, []);

    const generateContent = async () => {
        if (!title) return toast.error('Please enter a title')

        try {
            setLoading(true);
            const { data } = await axios.post('/api/blog/generate', { prompt: title })
            if (data.success) {
                quillRef.current.root.innerHTML = parse(data.content)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsAdding(true)

            const blog = {
                title, subTitle,
                description: quillRef.current.root.innerHTML,
                category, isPublished
            }

            const formData = new FormData();
            formData.append('blog', JSON.stringify(blog))
            formData.append('image', image)

            const { data } = await axios.post('/api/blog/add', formData);

            if (data.success) {
                toast.success(data.message);
                navigate('/dashboard')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsAdding(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={onSubmitHandler} className="space-y-6">
                {/* Upload thumbnail */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Upload thumbnail</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors bg-gray-50">
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            accept="image/*"
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                            {image ? (
                                <div>
                                    <img src={URL.createObjectURL(image)} alt="Preview" className="mx-auto h-32 w-auto rounded-lg" />
                                    <p className="mt-2 text-sm text-gray-600">Click to change image</p>
                                </div>
                            ) : (
                                <div>
                                    <svg className="mx-auto h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">Upload</p>
                                </div>
                            )}
                        </label>
                    </div>
                </div>

                {/* Blog title */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Blog title</h3>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Type here"
                        required
                    />
                </div>

                {/* Sub title */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Sub title</h3>
                    <input
                        type="text"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Type here"
                    />
                </div>

                {/* Blog Description */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Blog Description</h3>
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div ref={editorRef} className="min-h-96"></div>
                    </div>
                </div>

                {/* AI Content Generation */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-purple-900">AI Content Generation</h3>
                            <p className="text-sm text-purple-700">Generate content based on your title</p>
                        </div>
                        <button
                            type="button"
                            onClick={generateContent}
                            disabled={loading || !title}
                            className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                        >
                            {loading ? 'Generating...' : 'Generate Content'}
                        </button>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Category</h3>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                        {blogCategories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Publish Status */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="isPublished"
                        checked={isPublished}
                        onChange={(e) => setIsPublished(e.target.checked)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-900">
                        Publish immediately
                    </label>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isAdding}
                        className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    >
                        {isAdding ? 'Creating...' : 'Create Blog'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddBlog
