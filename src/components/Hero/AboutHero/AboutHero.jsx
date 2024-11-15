import './AboutHero.css'

export default function AboutHero({title, sec}) {
  return (
    <div className='aboutHero'>
        <div className='heroCover position-relative'>
            <img src="/Images/line-element.webp" alt="line-element" className='position-absolute' 
            style={{bottom:"0", right:"0", width:"300px"}}/>
            <img src="/Images/element.webp" alt="element" className='position-absolute'
            style={{bottom:"0", left:"7px"}}/>
            <div d-flex justify-content-center>
                <h3 className='text-center fs-1'>{title}</h3>
            <p>{sec}</p>
            </div>
            
        </div>
      
    </div>
  )
}

