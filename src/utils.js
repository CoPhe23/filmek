import axios from "axios";

const base_url = 'https://api.themoviedb.org/3/discover/'/*movie?api_key='+import.meta.env.VITE_TMDB_API_KEY*/
const urlGenres=`https://api.themoviedb.org/3/genre/`/*${type}/list?api_key=${import.meta.env.VITE_API_KEY}*/
const urlSearch = `https://api.themoviedb.org/3/search/`/*${type}?api_key=${import.meta.env.VITE_API_KEY}&query=${searchText}&page=${page}*/


export const getData = async ({queryKey})=>{
    console.log(queryKey);
    let url = base_url+queryKey[1]+'?api_key='+import.meta.env.VITE_TMDB_API_KEY+'&page='+queryKey[2]
    if (queryKey[3].length!=0) {
      url += '&with_genres='+ queryKey[3].join(',')
    }
    const resp = await axios.get(url)
    console.log(url);
    
    return resp.data
}
export const getGenres = async ({queryKey})=>{
    console.log(queryKey);
    
    const url = urlGenres+queryKey[1]+'/list?api_key='+import.meta.env.VITE_TMDB_API_KEY
    const resp = await axios.get(url)
    return resp.data

}
export const getSearch = async ({queryKey})=>{
    console.log(queryKey);
    
    const url = urlSearch+queryKey[1]+'?api_key='+import.meta.env.VITE_TMDB_API_KEY+'&query='+queryKey[2]+'&page='+queryKey[3]
    const resp = await axios.get(url)
    return resp.data

}

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500'; 
export const img_none = 'https://www.movienewz.com/img/films/poster-holder.jpg'
export const detailsData = async({queryKey})=>{
    console.log(queryKey[1]);
        const response = await axios.get(queryKey[1])
        return response.data
}