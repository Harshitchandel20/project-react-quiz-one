import './Quiz.css'

function Quiz() {

  return (
    <div id='quiz'>
    <h1>Question</h1>
    <p id='question-number'>1 of 15</p>
    <p>What colour is a panda?</p>
    <div className='options'>
        <button>Green and Yellow</button>
        <button>Black and White</button>
        <button>Green and White</button>
        <button>Blue and Red</button>
    </div>
    <div className='navigation'>
        <button id='prevBtn'>Previous</button>
        <button id='nextBtn'>Next</button>
        <button id='quitBtn'>Quit</button>
    </div>
  </div>
  )
}

export default Quiz
