import React from "react";

export default function About(props){
    return (
        <>
        <section id="about-section" className="pt-5 pb-5" style={{color:`${props.mode==="light"?"black":"white"}`}}>
            <div className="container wrapabout" >
                <div className="red"></div>
                <div className="row">
                    <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                        <div className="blockabout">
                            <div className="blockabout-inner text-center text-sm-start">
                                <div className="title-big pb-3 mb-3">
                                    <h3>ABOUT US</h3>
                                </div>
                                <p className="description-p  pe-0 pe-lg-0" >
                                Welcome to our text utility site, your one-stop-shop for all your text-related needs! Our site offers a variety of tools and utilities that can help you with tasks such as editing, formatting, and analyzing text.
                                </p>
                                <p className="description-p  pe-0 pe-lg-0">Our text editor tool allows you to easily edit and manipulate text. You can copy and paste text into our editor, and then use a variety of functions to edit the text.</p>
                                <div className="sosmed-horizontal pt-3 pb-3">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
}