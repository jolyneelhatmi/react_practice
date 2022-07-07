import Header from "./Components/Header";
import Feedbacklist from "./Components/Feedbacklist";
import {useState} from 'react';
import FeedbackData from "./data/feedbackdata";
import Feedbackstats from "./Components/Feedbackstats";
import FeedbackForm from "./Components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id=uuidv4();
    newFeedback.editable=false;
    setFeedback([newFeedback,...feedback]);

  }
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item)=> item.id !== id));
  }
  
  const resubmitRating = (id) => {
    setFeedback(feedback.map((item)=>{
      if(item.id===id){
        let value = document.getElementById(`${item.id}-num`);
        item.rating = +value.value;
        return item;
      }else return item;
    }))
  }
  const editFeedback = (id) =>{
    
    setFeedback(feedback.map((item)=>{
     if(item.id===id){
     let curitem = {...item};
             curitem.editable = !item.editable;
             return curitem;
           }else return item;
    }))
   }
  const Resubmitfeedback = (id) =>{
    setFeedback(feedback.map((item)=>{
      if(item.id===id){
        let value = document.getElementById(`${item.id}`);
        if(item.text === '') {item.editable = true;}
        item.text = value.value;
        return item;
      }else return item;
    }))
  }

  return (
    <>
    <Header />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <Feedbackstats feedback={feedback}/>
      <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} resubmitRating={resubmitRating} handleEditTask={editFeedback} Resubmitfeedback={Resubmitfeedback}/>
    </div>
    </>
  )
}

export default App;
