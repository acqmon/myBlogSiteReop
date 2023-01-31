import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SinglePage } from "../Pages/index.js";

function PageRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<SinglePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PageRoutes;