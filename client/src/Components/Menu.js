import React from "react";
import "./stylesheets/Menu.css";

function Menu() {
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
        <div className="menu">
            <h1 className="menuhead">Other Blogs You Might Like</h1>
            {post.map((post) => (
                <div className="postContents" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;