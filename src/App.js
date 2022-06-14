import React, {useEffect} from "react";
import API from './api'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Detail, Home} from "./pages";
import Layout from "./layout";

function App() {
    useEffect(() => {
        API.get()

        API.get(`discover/movie?api_key=65c777caa18dc18e557b9e42dbc46d62`)
            .then(res => {
                console.log("get all movies", res);
                console.log("get all movies data", res.data);
            })
    }, [])
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
