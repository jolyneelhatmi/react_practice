import propTypes from 'prop-types';
import Card from './shared/card';

function Feedbackitem2({item, handleEditTask, Resubmitfeedback, resubmitRating}) {

  return (
    <Card>
        <input className='num-display'type="number" min={0} max={10}  value={+item.rating} id={`${item.id}-num`} onChange={()=>resubmitRating(item.id)}></input>
        <div className="input-group">
            <input
                type="text"
                id={item.id}
                placeholder={item.text}
                value={item.text}
                onChange={()=>Resubmitfeedback(item.id)}></input>
            <button onClick={()=>handleEditTask(item.id)} className='btn btn-primary' disabled={item.text === '' || item.text.trim().length <= 10}>Resubmit</button>
        </div>
    </Card>
  )
}
Feedbackitem2.propTypes = {
    item: propTypes.object.isRequired,
}


export default Feedbackitem2;