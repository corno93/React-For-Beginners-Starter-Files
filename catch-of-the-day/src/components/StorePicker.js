import React from 'react';
import { getFunName } from '../helpers'; // use {} brackets here since this function is not exported by default - its simple a  normal js function

class StorePicker extends React.Component {
    // below is a way of access instance method goToStore. we dont use this method instead use the property arrow class seen below
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this); // NOTE: because this class extends a React class, we need to 'bind' our own methods. if not, they will not be attached to the class 
    // }

    // add new prop
    myInput = React.createRef();

    
    // declare a property set to an arrow function - the property is bound to the class instance thus we can acess all own defined methods
  goToStore = event => {
    // 1: stop store from submitting
    event.preventDefault(); // stops the page from submitting
    console.log('Going to store');

    // 2: get the text from the input
    const storeName = this.myInput.current.value;

    // 3: change the page to /store/<input>. 'push' the url to here...fuck
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    // return <p>Hello!</p>
    // JSX example
    return (
//       <React.Fragment>
//         { /* return more than just one item using Fragment
// ! */}

        <form className="store-selector" onSubmit={this.goToStore}>
          <h2> Please enter a store</h2>
          <input
            type="text"
            ref = {this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Stores </button>

        </form>
    //   </React.Fragment>

    );
  }
}



export default StorePicker;