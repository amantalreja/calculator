function App() {
  function digitCreater(){
    var digits= [0,1,4,5,6,7,8,9]
    digits= digits.map((number) =>
    <button key={number}>{number}</button>
  );
  return digits;
  }
  return (
    <div className="App">
      <div className="Calculator">
        <div className="Display">
          <span>
            (0)
          </span>0
        </div>
        <div className="Operators">
          <button>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
          <button>Del</button>
        </div>
        <div className="Digits">
         {digitCreater()}
         <button>.</button>
         <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
