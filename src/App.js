import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    Student e-connect
    <nav className='nav-bar'> 
      <ul>
        <li>Home</li>
        <li>Schedule & Marks</li>
        <li>Materials & Notes</li>
        <li>Profile</li>
    </ul>
    </nav>
    </header>
    <section>
      <div className='section-title'>Schedule<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></div>
      <div className='section-content'>
      <div className='cards'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/022/006/618/small/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg'></img>
          <div className='cardContainer'>
            <h4>Title of Book</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Science</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/022/006/618/small/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg'></img>
          <div className='cardContainer'>
            <h4>Title of Book</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Science</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/022/006/618/small/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg'></img>
          <div className='cardContainer'>
            <h4>Title of Book</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Science</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/022/006/618/small/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg'></img>
          <div className='cardContainer'>
            <h4>Title of Book</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Science</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='section-title'>Notes<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/></svg></div>
      <div className='section-content'>
      <div className='cards'>
          <img src='https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp'></img>
          <div className='cardContainer'>
            <h4>Title of Note</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Subject 1</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp'></img>
          <div className='cardContainer'>
            <h4>Title of Note</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Subject 1</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp'></img>
          <div className='cardContainer'>
            <h4>Title of Note</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Subject 1</div>
          </div>
        </div>
        <div className='cards'>
          <img src='https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp'></img>
          <div className='cardContainer'>
            <h4>Title of Note</h4>
            <h5>Updated : 12 Nov 2023</h5>
            <div className="chip">Subject 1</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
