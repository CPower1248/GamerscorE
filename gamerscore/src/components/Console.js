import React from "react"

const Console = props => {
    const { console } = props

    return (
    <div className={`console-${console.name}`}>
        <h3>{console.name}</h3>
        <div className={`console-score-${console.name}`}>
            <span>{console.score}</span>
            <div className="input-container">
                <input type="text" pattern="[0-9]" />
            </div>
        </div>
      </div>
    )
}

export default Console;
