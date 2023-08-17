import './App.css';
import Header from './components/header';
import $ from "jquery";
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
<script src="https://kit.fontawesome.com/9ccc867c12.js" crossorigin="anonymous"></script>
const App = () => {
  const [ score, setScore ] = useState('');
  const [ review, setReview ] = useState('');
  const [ validReview, setValidReview ] = useState(false);
  const [ valid, setValid ] = useState(false);

  const [ reviewObject, setReviewObject ] = useState([]);
  const commentHandler = (e) => {
    e.preventDefault();
    setReview(e.target.value);
    console.log("review", review)
  }

  
  const submitReviewHandler = async (e) => {
    console.log("event", e)
    e.preventDefault();
    const uuid = uuidv4(); 
    const obj = { id: uuid, score, review };
    setReviewObject((prev) => {
      return [...prev, obj]
    })
    console.log(reviewObject)
    setScore('');
    setReview('')
  }
  
  const scoreArray = reviewObject.map(item => item.score)
  const sumOfScores = scoreArray.reduce((acc,score) => acc + parseInt(score), 0)
  console.log(scoreArray, "scoreArray")
  console.log(sumOfScores,"sumOfScores")
  $(document).ready(function() {
    $('.rating-list li').click(function() {
      $('.rating-list li').removeClass('selected');
      $(this).addClass('selected');
      setScore($(this).text()); // Update score state based on clicked item
    });
  });

  return(
    <div>
      <Header />
      <div className='body-bg'>
        <div className='container'>
          <div className='row card-content justify-content-center'>
            <div className='custom-card card col-12 ph-20 pv-20 text-center'>
                <p>How much would you rate our service?</p>
                <div className='rating'>
                  <ul className='rating-list'>
                    <li className='rounded-circle'>1</li>
                    <li className='rounded-circle'>2</li>
                    <li className='rounded-circle'>3</li>
                    <li className='rounded-circle'>4</li>
                    <li className='rounded-circle'>5</li>
                    <li className='rounded-circle'>6</li>
                    <li className='rounded-circle'>7</li>
                    <li className='rounded-circle'>8</li>
                    <li className='rounded-circle'>9</li>
                    <li className='rounded-circle'>10</li>
                  </ul>
                </div>
                <form className='user_input custom-form'>
                    <div className="input-group ">
                      <input type="text" className="form-control" value={review} onChange={commentHandler} placeholder="Your Email" />
                      <button type="button" onClick={submitReviewHandler} >Send</button>
                    </div>
                </form>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='content-count-body'>
              <div className='row'>
                <div className='col-6'>
                  <p>{reviewObject.length}&nbsp; Reviews</p>
                </div>
                <div className='col-6'>
                  <p>Average Rating&nbsp;{sumOfScores/scoreArray.length}</p>
                </div>
              </div>
            </div>
          </div>
          
            {reviewObject.map(item => {
              return (
                <div className='row justify-content-center mb-20'>
                  <div className='custom-card review-card card col-12 ph-20 pv-20 text-center'>
                    <span className='score'>{item.score}</span>
                    <div className='message-interaction'>
                      <i className="fa-solid fa-xmark"></i>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className='message-content'>
                      <p>{item.review}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div>footer</div>
    </div>
  )
}


export default App;
