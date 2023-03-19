import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import "./index.css"

function App() {

  //fetching data from api (we use useState and useEffect)

  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let { info, results } = fetchedData; // Destructuracion de

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-3">Rick And Morty <span className="text-primary">WiKi</span></h1>
      <Search setSearch={setSearch} setPage={setPage}/>
      <div className="container">
        <div className="row">
            <Filters setStatus={setStatus} setGender={setGender} setPage={setPage} setSpecies={setSpecies}/>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setPage = {setPage} page ={page}/>

    </div>
  );
}

export default App;
