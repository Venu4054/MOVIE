import React from "react";
import { useState } from 'react';
import "./movie.css"

export default function MovieCard() {
    const [poster, setPoster] = useState();
    const [name, setName] = useState();
    const [rating, setRating] = useState();
    const [summary, setSummary] = useState();
    const [contentList,setContentList]=useState( [{name:"RRR",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH",
    rating: 8.8,
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S.S. Rajamouli, and produced by D.V.V. Danayya of DVV Entertainments."}])
    
    return (
        <>
        <input 
        placeholder="Enter Movie Name"
        value={name}
        type="text"
        onChange={(event)=>setName(event.target.value)}
        />
        <input 
        placeholder="Enter Movie Poster Url"
        value={poster}
        onChange={(event)=>setPoster(event.target.value)}
        type="text"
        />
        <input placeholder="Enter Movie rating"
        value={rating}
        onChange={(event)=>setRating(event.target.value)}
        type="text"/>
        <input placeholder="Enter Movie Summary"
        value={summary}
        onChange={(event)=>setSummary(event.target.value)}
        type="text"/>
        <button onClick={()=>setContentList([...contentList,{name,poster,rating,summary}])}>Add Movie</button><br/>
{contentList.map((movie)=>(
   <MovieBox 
   poster={movie.poster}
   name={movie.name}
   rating={movie.rating}
   summary={movie.summary}
   /> 
   ))}
            
        </>
    )
}



function MovieBox({name, rating, summary, poster}) {
    
    // const styles={background:background};


    return (
        <div className='movie-container'>
            <img
                src={poster}
                alt={name}
                className="movie-poster"
            />
            <div className="movie-specs">
                <h3 className="movie-Name" >{name}</h3>
                <p className="movie-rating" >⭐{rating}</p>
            </div>
            <p className="movie-summary">{summary}</p>

        </div>
    )
}

