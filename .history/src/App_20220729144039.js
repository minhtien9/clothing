import "./App.css";

function App() {
    const categories = [
        {
            id: 1,
            title: "Hats",
        },
    ];
    return (
        <div className='categories-container'>
          {categories.map((title)=>(
            <div className='category-container'>{/* img */}</div>
            <div className='category-body-container'>
                <h2>Hat</h2>
                <p>Shop Now</p>
            </div>
          ))}
            
        </div>
    );
}

export default App;
