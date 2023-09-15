import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const AppContext = createContext();
const useGlobalContext = () => useContext(AppContext);
const url = "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key={705b3786dab5e0e206440b5d54b07d90}&language"

const AppProvider = ({ children }) => {

    const global = useGlobalContext
    console.log(global)
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        const res = await fetch(url);
        const data = await res.json();
        const { movies } = data;
        // console.log(meals);
        if (movies) {
            // getb hold of the data
            const newMovies = movies.map((item) => {
                return {
                  id, title, date
                };
            });
            setMovies(newMovies)
        } else {
            setMovies([])
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return <AppContext.Provider value={{ loading,  movies }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider