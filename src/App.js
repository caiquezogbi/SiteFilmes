import React, {useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieRow from './componets/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState ([]);

useEffect(() => {   
  const loadALL = async () => {
    // PEGANDO A LISTA TOTAL
    let list = await tmdb.getHomeList();
    console.log(list);
    setMovieList(list);
  }

  loadALL();
}, []);


return(
  <div className="page">
    <section className="listas">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
    </section>
  </div>
)

}