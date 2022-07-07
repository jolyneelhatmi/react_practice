import propTypes from 'prop-types';
import Feedbackitem from "./Feedbackitem";
import {motion, AnimatePresence} from 'framer-motion';
import Feedbackitem2 from './Feedbackitem2';

function Feedbacklist({feedback, handleDelete, handleEditTask, Resubmitfeedback, resubmitRating}) {
    if(!feedback || feedback.length ===0 ){
        return <div className='noDisplay'>
            <h1 >No feedbacks to display</h1>
        </div>
    }else {
  return <AnimatePresence>
    <div className="feedback-list">
        {feedback.map((item)=>{
        if(item.editable===false){
            return (<motion.div
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} handleEditTask={handleEditTask}/>
                </motion.div>) 
            
        }else{
            return (<motion.div
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}>
                 <Feedbackitem2 key={item.id} item={item} resubmitRating={resubmitRating} handleEditTask={handleEditTask} Resubmitfeedback={Resubmitfeedback}/>   
                </motion.div>)
        }
    })}
    </div>
    </AnimatePresence>
  
};}

Feedbacklist.propTypes = {
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired,
        })
    ),
};

export default Feedbacklist;