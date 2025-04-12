
import './Hero.css'

const Hero =()=>{
    return (
        <section className='hero flex'>
            <div className="left-section ">
                <div className="parent-avatar flex">
                    <img className='avatar' src="./rida.png" alt="" />
                    <div className='icon-verified'></div>
                    <h1>Rida Sersif</h1>
                </div>
                <h1 className="title">Software Developer & Web Enthusiast</h1>
                <p className="sub-title">
                    Passionate about building modern, responsive, and user-friendly web applications.
                    With a strong foundation in both front-end and back-end development, I strive to create
                    clean and efficient code that brings ideas to life. Let’s turn your vision into reality.
                </p>

                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-linkedin"></div>
                    <div className="icon icon-github-square"></div>
                </div>
                
            </div>
            <div className="right-section animation border">
                hhhhhhhhhhhhhhhh
            </div>
            
        </section>
    );
}
export default Hero;