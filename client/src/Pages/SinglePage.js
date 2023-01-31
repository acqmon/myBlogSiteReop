import React from "react";
import { Navbar, Footer, Menu } from "../Components/index.js";
import './stylesheet/SinglePage.css';

function SinglePage() {
    return (
        <div className="singleContainer">
            <Navbar />
            <div className="single">
                <div className="content">
                    <img src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg" alt="" />
                    <div className="user">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM1adsT9Fyib2t5aecemESwXs_J0dvK1pKg&usqp=CAU" alt="" />
                        <div className="info">
                            <span>Jhon</span>
                            <p>Posted 2 Days Ago</p>
                        </div>
                    </div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laborum.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, fugit voluptatum alias possimus aspernatur rerum quas fuga exercitationem adipisci assumenda. <br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim similique nisi cupiditate voluptas repellendus minus odit voluptates aut nulla omnis vero sapiente facilis, blanditiis dolorem. Modi necessitatibus reiciendis eos maxime. <br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime dolorum corporis, iste eius quis, dolor in, numquam laudantium hic omnis recusandae vel adipisci amet accusamus veritatis tenetur? Aperiam quaerat, aliquam aliquid non in ipsam, pariatur dolorum numquam assumenda alias ipsa beatae dolore sint sit. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur provident quidem et temporibus, qui impedit eligendi, sapiente deleniti a dolore illo animi sed consequuntur labore voluptatibus maxime laudantium magnam delectus eius facere! Voluptate aspernatur ea mollitia corporis vel, nobis provident et blanditiis neque dolorum nostrum culpa dolor molestiae optio ducimus quam nisi nemo quas nulla consequuntur accusantium eligendi consequatur. Ea, eum accusamus voluptas voluptate eos sequi perferendis, quod illum labore corrupti recusandae voluptatem deleniti consequatur voluptatum repellat natus? Similique dolor dolorem animi repellat? Id ipsam rem eius quod assumenda corrupti nemo dicta? Corrupti odit at reprehenderit recusandae ex dignissimos!</p>
                </div>
                <div className="menuContainer">{ <Menu />}</div>
            </div>
            <Footer />
        </div>
    );
}

export default SinglePage;