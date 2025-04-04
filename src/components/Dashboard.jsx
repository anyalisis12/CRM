import React from 'react'
import './Dashboard.css';

import ChartBox from './chartBox/ChartBox';

function Dashboard() {
  return (
    <div>
      <div className="Dashboard">
        <div className="box box1">
          box1
        </div>
        <div className="box box2"><ChartBox/></div>
        <div className="box box3"><ChartBox /></div>
        <div className="box box4">Box4</div>
        <div className="box box5"><ChartBox /></div>
        <div className="box box6"><ChartBox /></div>
        <div className="box box7">Box7</div>
        <div className="box box8">Box8</div>
        <div className="box box9">Box9</div>
      </div>
    </div>
  );
}

export default Dashboard
