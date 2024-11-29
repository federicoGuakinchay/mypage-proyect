import { useNavigate } from "react-router-dom";
import '../styles/components/author_card.css'

function AuthorCard({item}){
  const api_url = 'http://localhost:8000';
  const navigate = useNavigate();
  function goToAuthorPage(author) {navigate('/Author/' + author);}
  return (
    <div 
      className="author-card"
      tabIndex="0" 
      role="button"
      onClick={() => goToAuthorPage(`${item.author.first_name}_${item.author.last_name}`)} 
      onKeyDown={(e)=>{if(e.key === 'Enter'){() => goToAuthorPage(`${item.author.first_name}_${item.author.last_name}`)};}}>

      <img src={`${api_url}${item.author.picture}`} alt={item.author.last_name} />
      <div className="author-name-content">
        <p>{item.author.first_name}</p>
        <p>{item.author.last_name}</p>
      </div>
    </div>
  )
}
export default AuthorCard