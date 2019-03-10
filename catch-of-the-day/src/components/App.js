import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component {

    state={
        fishes: {},
        order : {}
    };
    // ANY METHOD THAT UPDATES STATE MUST BE DECLARED WHERE THE STATES ARE DECLARED!


    addFish = (fish)=>{
        console.log("Adding a fish!");
        // UPDATING STATE
        // 1. take a copy of the existing state
        const fishes = {...this.state.fishes}// syntax called object spread (deepclone not neccesarry here)
        /// 2. add new fish to copy
        fishes[`fish${Date.now()}`] = fish;
        // 3. set the new fshes object to state
        this.setState({
            fishes
        });
        
    };

    loadSampleFishes = () =>{
        this.setState({fishes : sampleFishes});

    };

    render() {
    return (
      <div className="catch-of-the-day">

        <div className="menu">
          <Header tagline="ALEX" age={500} />
          <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          
          </ul>

        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>


      </div>


    );
  }
}


export default App;
