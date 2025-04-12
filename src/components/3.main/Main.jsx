import React from "react";
import './Main.css'

const Main =()=>{
    return (
      <main className="flex">
        <section className="flex left-section ">
            <button className="active">HTML</button>
            <button>HTML</button>
            <button>HTML</button>
            <button>HTML</button>
            <button>HTML</button>
        </section>
        <section className="right-section flex"> 
          {["aa","bb","cc"].map((item)=>{
            return(
                <article key={item} className="card  ">
                <img width={266} src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="" />
                <div style={{width:"266px"}} className="box " >
                    <h1 className="title">Software Developer & Web Enthusiast</h1>
                    <p className="sub-title">
                        Passionate about building modern, responsive, and user-friendly web applications.
                        With a strong foundation in both 
                    </p>
                    <div className="icons flex">
                        <div style={{gap:"11px"}} className="flex">
                            <div className="icon icon-link"></div>
                            <div className="icon icon-github-square"></div>
                        </div>
                        <a className="link flex" href="">
                            more
                            <span style={{alignSelf:'end'}} className="icon-arrow_forward"></span>
                        </a>
                    </div>
                </div>
            </article>
            )
          })}
        </section>
      </main>
    );
}
export default Main;