import propTypes from 'prop-types';
import Card from './shared/card';
import {FaTimes, FaEdit} from 'react-icons/fa';


function Feedbackitem({item, handleDelete, handleEditTask}) {

  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
            <FaTimes color='red'/>
        </button>
        <button className="edit" onClick={()=>handleEditTask(item.id)}><FaEdit color='green'/></button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}
Feedbackitem.propTypes = {
    item: propTypes.object.isRequired,
    
}


export default Feedbackitem;