import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from './Component/Cards'
import NavBar from "./Component/NavBar";
import NavBarTwo from "./Component/NavBarTwo"


const App = () => {
  const [results, setResults] = useState([]);
  const [query,setQuery]= useState('')
  const [hitsPerPage,setHitsPerPage] = useState(10)
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  const [filter,setFilter] = useState("&numericFilters=")
  const [search,setSearch] = useState("search")
    
const fetchData = async () => {
    try {
        const callData = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page');
        setResults(callData.data.hits);
        setLoading(true)
    }
  catch(err) {console.log(err)}
  }
 

const fetchData2 = async () => {
  try {
      const callData = await axios.get(`http://hn.algolia.com/api/v1/${search}?query=${query}&hitsPerPage=${hitsPerPage}&page=${page}${filter}`);
      setResults(callData.data.hits)
      setLoading(true) 
  }
catch(err) {console.log(err)}
}

console.log(filter)
console.log(search)

  useEffect(() => {
    query ?
    fetchData2() :
    fetchData()

  }, [query,search,hitsPerPage,page,filter]);


  return (<div className="App">

  <NavBar query={query} setQuery={setQuery} />
  {query.length > 1 && <NavBarTwo hitsPerPage={hitsPerPage} setHitsPerPage={setHitsPerPage} filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/> }
  {query &&
  <div className="btns">
  <button className="pageBtn" onClick={()=> page>1 && setPage(page - 1)}>Previous</button>
  <button className="pageBtn" onClick={()=> setPage(page + 1)}>Next</button>
  </div>
  }
  { loading?
    results.map((e)=> e.title && e.author ? <Cards key={e.objectID}  url={e.url} title ={e.title} author={e.author} point={e.points} date={e.created_at_i} nbrcomments={e.num_comments} idcomment={e.objectID} /> : "") 
    : <img className="load2" src="./loading2.png" alt=""></img>}
  
  </div>)
}

export default App;
