function ResultCard({ result }) {
  const riskClass = result.riskLevel.toLowerCase()
  const decision = result.riskLevel === 'Low' ? 'Safe' : 'Risky'

  return (
    <section className={'result-card risk-' + riskClass}>
      <div className="result-top">
        <div className="result-block">
          <span className="result-label">Risk Level</span>
          <span className={'risk-badge badge-' + riskClass}>
            {result.riskLevel}
          </span>
        </div>

        <div className="result-block">
          <span className="result-label">Final Decision</span>
          <span className={'decision-text decision-' + decision.toLowerCase()}>
            {decision}
          </span>
        </div>
      </div>

      <div className="result-reasons">
        <h3 className="reasons-title">Why?</h3>
        <ul className="reasons-list">
          {result.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ResultCard