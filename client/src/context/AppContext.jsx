import {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children })=>{

    const navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState("")
    const [isAuthLoading, setIsAuthLoading] = useState(true)

    const fetchBlogs = async ()=>{
        try {
           const {data} = await axios.get('/api/blog/all');
           data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        // Check for existing authentication on app load FIRST
        const initializeAuth = () => {
            const token = localStorage.getItem('token')
            const userData = localStorage.getItem('user')
            
            if(token){
                setToken(token);
                axios.defaults.headers.common['Authorization'] = token;
                
                // Only set user data if it exists (for regular users)
                if(userData){
                    try {
                        const parsedUser = JSON.parse(userData);
                        setUser(parsedUser);
                    } catch (error) {
                        // If user data is corrupted, clear it but keep token for admin
                        localStorage.removeItem('user')
                    }
                }
            }
        }
        
        initializeAuth();
        
        // Fetch blogs after authentication is restored
        fetchBlogs();
        
        // Set auth loading to false after initialization
        setIsAuthLoading(false);
    },[])

    const value = {
        axios, navigate, token, setToken, user, setUser, blogs, setBlogs, input, setInput, fetchBlogs, isAuthLoading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext)
};