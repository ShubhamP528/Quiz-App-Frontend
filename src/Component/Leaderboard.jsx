import React from 'react'
import './Leaderboard.css'
//import { GiPodiumWinner } from "react-icons/gi";

function Leaderboard() {
  return (
    <div className='Back'>
        <h1>Leaderboard</h1>
        <div className='Left'>
        
               <div className='Icon'>
               icon
               </div>
             <h3>Ash</h3> 
              <hr/>
              <div className="div">
                <div className="div1">
                    <h5>
                        6/10
                    </h5>
                    <br/>
                    <h6>
                       
                        SCORE
                    </h6>
                </div>
                <div className="div2">
                    <h5>
                        00:59
                    </h5>
                    <br/>
                    <h6>
                        TOTAL TIME
                    </h6>
                </div>

              </div>

       
       
        </div>
        <div className='container'>
            <div className='container1'>
               <div className="box1">PARTICIPANTS</div>
               <div className="box2">SCORES</div>
               <div className="box3">TOTAL TIME</div>
            </div>
            <div className="container2">
            <div className="box4">
                <h6><span style={{color:"orange",fontSize:"15px"}}>2nd </span>  Shantini</h6>
            </div>
               <div className="box5">5/10</div>
               <div className="box6">1m 0s</div>
            </div>
            <hr/>
            <div className="container3">
            <div className="box4">
                <h6><span style={{color:"orange",fontSize:"15px"}}>3rd </span> Daisy</h6>
            </div>
               <div className="box5">5/10</div>
               <div className="box6">1m 2s</div>
            </div>
            <hr/>
            <div className="container4">
            <div className="box4">
                <h6><span style={{color:"orange",fontSize:"15px"}}>4th </span>  Popcorn</h6>
            </div>
               <div className="box5">5/10</div>
               <div className="box6">1m 15s</div>
            </div>
            <hr/>
            <div className="container5">
            <div className="box4">
                <h6><span style={{color:"orange",fontSize:"15px"}}>5th </span>  Aswin Anil</h6>
            </div>
               <div className="box5">5/10</div>
               <div className="box6">1m 30s</div>
            </div>
            <hr/>
            <div className="container6">
            <div className="box4">
                <h6><span style={{color:"orange",fontSize:"15px"}}>6th </span> Clara</h6>
            </div>
               <div className="box5">4/10</div>
               <div className="box6"> 55s</div>
            </div>
            <hr/>
        </div>
        <div className="score">
            <div className="number1">
               <span style={{marginLeft:"45px"}}>24</span>
               <br/> 
               <h5>Participants</h5> 
            </div>
            <div className="number2">
                <span style={{marginLeft:"55px"}}>3.1</span>
                <h5>Average Score</h5>
            </div>
        </div>
    </div>

  )
}

export default Leaderboard