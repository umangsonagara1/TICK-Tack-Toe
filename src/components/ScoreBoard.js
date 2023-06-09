import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {

    const { xScore, oScore } = scores;

  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inctive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inctive"}`}>O - {oScore}</span>
    </div>
  )
}
