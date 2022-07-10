import Header from "./Components/Header";
import Feedbacklist from "./Components/Feedbacklist";
import {useState, useEffect} from 'react';
import FeedbackData from "./data/feedbackdata";
import Feedbackstats from "./Components/Feedbackstats";
import FeedbackForm from "./Components/FeedbackForm";



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  useEffect(()=>{
    fetchFeedback();
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?
    _sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
  }
  const addFeedback = (newFeedback) => {
      fetch('/feedback', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newFeedback)
      }).then(()=> {
        fetchFeedback();
      })
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
             console.log(curitem);
             return curitem;
           }else return item;
    }))
   }
  const Resubmitfeedback = (id) =>{
    setFeedback(feedback.map((item)=>{
      if(item.id===id){
        let value = document.getElementById(`${item.id}`);
        if(item.text === '') item.editable = true;
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
