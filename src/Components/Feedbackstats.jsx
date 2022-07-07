import propTypes from 'prop-types';

function Feedbackstats({feedback}) {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, '');
    if(feedback.length !==0 ){
        return (
            <div className="feedback-stats">
        
                <h4>{(feedback.length) === 1 ? feedback.length + "    feedback" : feedback.length + "   feedbacks"}</h4>
                <h4>Average Rating : {average}</h4>
            </div>
          )
    };
}

Feedbackstats.propTypes = {
    feedback: propTypes.array.isRequired,
}

export default Feedbackstats;