import logo from './logo.svg';
import './App.css';
import NoName from './NoName';

function App() {

const $h2 = <h2>반가워요~~~</h2>


  return (
    <>
    <NoName />
    <div>
      <div className='App'>
        <h1>메롱멜옹~</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text'/>
          <p>
            오늘은 5월 1일 수요일 입니다.<br/>
            오후 3시 30분입니다.
          </p>
        
      </div>
    </div>
    </>
    
  );
}

export default App;
