export const Materials = () => {
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
    <div className='searchBar-section'>
      <div className='searchbar'>
          <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
          <button type="submit" class="searchButton">Go</button>
      </div>
    </div>
    <section>
      <div className='section-title'>Materials<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/></svg></div>
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