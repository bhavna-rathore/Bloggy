import "./header.css"
import Backgroudpic from '../../photos/bg.jpg';
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">  
        <span className="headerTitlelg">Bloggy</span>
        <span className="headerTitlesm"> A New World of Blogs</span>
         <img className="headerImg" src={Backgroudpic} alt="background" />
      </div> 
    </div>
  )
}

