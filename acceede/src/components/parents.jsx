// import '../App.css'
import '../components.css'
import data from './componentdata'

function Hero() {

    const Component = data.map(content =>{

        const features = content.features.map(content =>{
            return (
                <div>
                    <img src={content.img} />
                    <h4>{content.title}</h4>
                    <p>{content.text}</p>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <div>
                        <span>{content.tag}</span>
                        <h2>{content.title}</h2>
                        <h4>{content.extraOne}</h4>
                        <p>{content.OneText}</p>
                        <h4>{content.extraTwo}</h4>
                        <p>{content.TwoText}</p>
                        <div>
                            <button>Request for demo</button>
                            <button>Get started now</button>
                        </div>
                    </div>
                    <div>
                        <img src={content.img} />
                    </div>
                </div>
                <div>
                    {features}
                </div>
            </div>
        )
    })
    

  return (
    <section>
        {Component}
    </section>
  )
}

export default Hero
