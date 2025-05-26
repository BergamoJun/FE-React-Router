import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';

function ColorPage() {
  const {id} = useParams();
  const bg ={
    background: id,
    justifyContent:"center"
  };
  return (
    <div className="color-page" style={bg}>
    배경 페이지입니다 
    </div>
  );
}

export default ColorPage;
