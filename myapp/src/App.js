
import './App.css';
import man  from './man.png'
import linkedin from './linkedin.png'
import gitHub from './github-sign.png'
import website from './browser.png'
import resume from './resume.png'

function App() {
  return (
    <>
      <div className='container' style={{width: '100vw', height: 'auto', alignItems: 'center', flexDirection:'column', marginBottom: '10em'}}>
          <div className='container' style={{flexDirection: 'column' , height: 'auto', width: '100vw', backgroundColor: '#2F3C7E', alignItems: 'center', gap: '5em'}}>
            <div className='container' style={{marginTop: '5em', padding:'1.5em', borderRadius: "50%", backgroundColor: "#FBEAEB"}}>
              <img src={man} alt=""/>
            </div>
            <h1 style={{fontSize: '3em', color:'#FBEAEB'}}>Hi I'm</h1>
          </div>
          <div className="container">
            <h1 style={{fontSize: '6em', color:'#2F3C7E'}}>Jayden</h1>
          </div>

          <div className='container' style={{display: 'flex', flexDirection: 'column', marginTop: '5em', gap:'2em', alignItems: 'center'}}>
            <h3 style={{color:'#2F3C7E'}}>Here are my inquires:</h3>
            <div className='container' style={{flexDirection: 'row', width: "350px",alignItems: 'center', border: '3px dashed #2F3C7E', padding: "1em"}} onClick={() =>{
                window.open('https://jayden-yip-portfolio-jaydens-projects-b5719c8f.vercel.app/')
            }}>
                <img src={website} alt="" />
                <div className='container' style={{flex: 1, justifyContent: 'center'}}>
                  <h3 style={{color:'#2F3C7E'}}>Personal Portfolio</h3>
                </div>
            </div>
            <div className='container' style={{flexDirection: 'row', width: "350px",alignItems: 'center', border: '3px dashed #2F3C7E', padding: "1em"}} onClick={() => {
                window.open('https://www.linkedin.com/in/yip-jayden/')
            }}>
                <img src={linkedin} alt="" />
                <div className='container' style={{flex: 1, justifyContent: 'center'}}>
                  <h3 style={{color:'#2F3C7E'}}>LinkedIn</h3>
                </div>
            </div>
            <div className='container' style={{flexDirection: 'row', width: "350px",alignItems: 'center', border: '3px dashed #2F3C7E', padding: "1em"}} onClick={() =>{
                window.open('https://drive.google.com/file/d/1Kxn43aaq1fu1sWZcjAZ8m7z_x9VeDeV3/view?usp=sharing')
            }}>
                <img src={resume} alt="" />
                <div className='container' style={{flex: 1, justifyContent: 'center'}}>
                  <h3 style={{color:'#2F3C7E'}}>Resume</h3>
                </div>
            </div>

            <div className='container' style={{flexDirection: 'row', width: "350px",alignItems: 'center', border: '3px dashed #2F3C7E', padding: "1em"}} onClick={() =>{
                window.open('https://github.com/JaydenYip3')
            }}>
                <img src={gitHub} alt="" />
                <div className='container' style={{flex: 1, justifyContent: 'center'}}>
                  <h3 style={{color:'#2F3C7E'}}>GitHub</h3>
                </div>
            </div>

          </div>
      </div>
      <p style={{color:'#2F3C7E'}}>Properties owned by @JaydenYip</p>

    </>
  );
}

export default App;
