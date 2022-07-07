import {useState} from 'react';
import Card from "./shared/card";
import Button from './shared/Button';

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const[msg, setMsg] = useState('');
  //  const[editable, setEditable] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {
                text, 
                rating,
            }
            handleAdd(newFeedback);
            setText('');
            setRating(0);
        }
    }
    const handleratingChange = (e) => {
        setRating(+e.target.value);
    }

    const handletextChange = (e) => {
        if(text=== ''){
            setMsg(null);
        }else if( text!=='' && text.trim().length <=10){
            setMsg('Text must be at least 10 characters');
            
        }else {
            setMsg(null);
        }
        setText(e.target.value);
        
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            
            <div className='rating-S'>
            <h4 className='services'>rate our services</h4>
            <input className='rating-SS'type="number" min={0} max={10} onChange={handleratingChange} placeholder='0' value={rating}></input>
            </div>
            <h2>
                feedback please ?
            </h2>
            <div className="input-group">
                <input  value={text} onChange={handletextChange} type="text" placeholder="Write a review" />
                <Button type="submit"
                isDisabled={text === '' || text.trim().length <= 10} 
                >Submit</Button>
            </div>
            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;