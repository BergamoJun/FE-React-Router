import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';


const Mainpage = () => {
  let clrs=['red','blue','yellow','pink','orange'];
  const navigate = useNavigate();
  function BtnClick (e){
    navigate(`/color/${clrs[e.target.id]}`);
  }


  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      <hr/>
      {clrs.map((e,index)=>
        <button id={index} className='color-box' onClick={BtnClick} style={{background:e}}>
          {e}
        </button>
      )}
    </div>
  );
};

export default Mainpage;
