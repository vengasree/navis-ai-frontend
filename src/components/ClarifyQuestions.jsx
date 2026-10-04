import { useState } from 'react'

function ClarifyQuestions() {
  const [knowSender, setKnowSender] = useState('')
  const [expecting, setExpecting] = useState('')

  const answered = knowSender !== '' && expecting !== ''

  let recommendation = null
  if (answered) {
    if (knowSender === 'Yes' && expecting === 'Yes') {
      recommendation = {
        type: 'safe',
        title: 'Likely Safe',
        text: 'You know the sender and expected this message. It is probably fine, but avoid sharing passwords or OTPs.',
      }
    } else if (knowSender === 'No' && expecting === 'No') {
      recommendation = {
        type: 'risky',
        title: 'Risky - Do Not Respond',
        text: 'Unknown sender and unexpected message. Do not click links or share any details. Delete or report the message.',
      }
    } else {
      recommendation = {
        type: 'risky',
        title: 'Be Careful',
        text: 'Something does not match. Verify with the sender through an official number or website before doing anything.',
      }
    }
  }

  return (
    <section className="clarify-card">
      <h3 className="clarify-title">Navis AI needs a little more information</h3>

      <div className="question">
        <p className="question-text">Do you know this sender?</p>
        <div className="answer-buttons">
          {['Yes', 'No'].map((option) => (
            <button
              key={option}
              className={'answer-btn' + (knowSender === option ? ' selected' : '')}
              onClick={() => setKnowSender(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="question">
        <p className="question-text">Were you expecting this message?</p>
        <div className="answer-buttons">
          {['Yes', 'No'].map((option) => (
            <button
              key={option}
              className={'answer-btn' + (expecting === option ? ' selected' : '')}
              onClick={() => setExpecting(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {recommendation && (
        <div className={'recommendation rec-' + recommendation.type}>
          <h4 className="rec-title">Final Recommendation: {recommendation.title}</h4>
          <p>{recommendation.text}</p>
        </div>
      )}
    </section>
  )
}

export default ClarifyQuestions