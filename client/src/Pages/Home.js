import React from "react";
import { Navbar, Footer } from "../Components/index.js";
import "./stylesheet/Home.css";

function Home() {
    const post = [
        {
            id: 1,
            title: "How to Make Chiken Burger",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate molestias ipsa officia sit consequatur voluptate explicabo dolores beatae, voluptates eveniet soluta deserunt molestiae. Id atque corrupti saepe fugit quaerat!",
            img: "https://img4.goodfon.com/wallpaper/nbig/e/e7/fastfud-gamburger-ovoshchi-ogon-dvoe-eda.jpg"
        },
        {
            id: 2,
            title: "How to Make Parota",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate molestias ipsa officia sit consequatur voluptate explicabo dolores beatae, voluptates eveniet soluta deserunt molestiae. Id atque corrupti saepe fugit quaerat!",
            img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=pexels-chan-walrus-958546.jpg&fm=jpg"
        },
        {
            id: 3,
            title: "How to Make Parota",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate molestias ipsa officia sit consequatur voluptate explicabo dolores beatae, voluptates eveniet soluta deserunt molestiae. Id atque corrupti saepe fugit quaerat!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbk6CjRWBBGgHkIeBNl7YPmlvs3Bq3_C4kg&usqp=CAU"
        },
        {
            id: 4,
            title: "How to Make Parota",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate molestias ipsa officia sit consequatur voluptate explicabo dolores beatae, voluptates eveniet soluta deserunt molestiae. Id atque corrupti saepe fugit quaerat!",
            img: "https://e0.pxfuel.com/wallpapers/781/656/desktop-wallpaper-fantastic-seafood-dinner-seafood-restaurant.jpg"
        },
        {
            id: 5,
            title: "How to Make Parota",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate molestias ipsa officia sit consequatur voluptate explicabo dolores beatae, voluptates eveniet soluta deserunt molestiae. Id atque corrupti saepe fugit quaerat!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVObrfHO3VMaeihKawjB2Qp3LbvuNAW9ZRNQ&usqp=CAU"
        }
    ];
    return (
        <div>
            <Navbar />
            <div className="postContainer">
                {post.map((post => (

                    <div className="post" key={post.id}>

                        <div className="imgContainer">
                            <img src={post.img} alt="" />
                        </div>

                        <div className="content">
                            <a className="postContent" href={`post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </a>
                        </div>
                    </div>
                )))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;