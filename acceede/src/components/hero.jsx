// import '../App.css'
import '../components.css'
import heroImg from '../assets/Hero-Image.svg'

function Hero() {

  return (
    <section className="Hero">
        <div className='text-section'>
            <h1>We make quality education affordable</h1>
            <p>We believe every child has the right to quality education. Acceede provides access to quick, easy and stress-free tuition funding for your child.</p>
            <div>
                <div>
                    <button>Downlod the app</button>
                    <p>For Parents</p>
                </div>
                <div>
                    <button>Get started now</button>
                    <p>For School</p>
                </div>
            </div>
        </div>
        <div className='img-section'>
            <img src={heroImg} />
        </div>
    </section>
  )
}

export default Hero
