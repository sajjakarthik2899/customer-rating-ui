import './App.css';
import Header from './components/header';

const App = () => {
  return(
    <div>
      <Header />
      <div className='body-bg'>
        <div className='container'>
          <div className='row body-content justify-content-center'>
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
                      <input type="text" class="form-control" placeholder="Your Email" />
                      <button type="submit">Send</button>
                    </div>
                </form>
            </div>
            <div className='col-12 flex-container'>
              <div className='flex-item'>left text</div>
              <div className='flex-item'>Right text</div>
            </div>
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  )
}

export default App;
