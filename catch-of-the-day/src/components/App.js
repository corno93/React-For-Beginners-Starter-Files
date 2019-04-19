import React from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component {

    static propTypes = {
      match : PropTypes.object
    }


    state={
        fishes: {},
        order : {}
    };

    componentDidMount(){
      console.log("MOUNTED")
      const {params} = this.props.match;
      const localStorageRef = localStorage.getItem(params.storeId);
      if (localStorageRef){
        this.setState({order : JSON.parse(localStorageRef)})
      }
    }

    componentDidUpdate(){
      console.log("UPDATED")
    }

    componentWillUnmount(){
      console.log("UNMOUNTED")
      localStorage.setItem(
        this.props.match.params.storeId,
        JSON.stringify(this.state.order)
      )
    }




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

    addToOrder = (key) =>{
      var order = {...this.state.order};
      order[key] = order[key] + 1 || 1;
      this.setState({order});
    }

    updateFish = (key, fish) =>{
      const fishes = {...this.state.fish}
      fishes[key] = fish
      this.setState({fishes})
    }

    deleteFish = (key) => {
      //1 take copy of state
      const fishes ={...this.state.fishes};
      // 2. updated state
      delete fishes[key];
      this.setState({fishes});
      // fishes[key] = null; //do null since firebase requires the deleted fish to be set to null
      // // 3.update
      // this.setState({fishes});
      // var fishes = {};
      // for (var i = 0;i<Object.keys(this.state.fishes).length;i++){
        
      //   if (i != key){
      //     console.log("HERE", i)
      //     fishes.append(Object.keys(this.state.fishes)[i])
      //   }
      // }
      
      // console.log("HERE", fishes, key, this.state.fishes.length, this.state.fishes)
      // this.setState({fishes});
    }

    removeFromOrder = (key) =>{
      //1 take copy of state
      const order ={...this.state.order};
      // 2. updated state
      delete order[key]; 
      // 3.update
      this.setState({order});
      
    }

    render() {
    return (
      <div className="catch-of-the-day">

        <div className="menu">
          <Header tagline="ALEX" age={500} />
          <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key}/>)}
          
          </ul>

        </div>

        <Order fishes = {this.state.fishes} order = {this.state.order} removeFromOrder={this.removeFromOrder}/>
        <Inventory deleteFish = {this.deleteFish} addFish={this.addFish} updateFish={this.updateFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>


      </div>


    );
  }
}


export default App;
