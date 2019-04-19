import React from 'react';
import PropTypes from 'prop-types'

const Login = (props) =>(
    <nav className="login">
    <h2>Inventory login</h2>
    <p>Sign in manager stores inventory</p>
    <button className="facebook" onClick={()=>props.authenticate('Facebook')}>Login in facebook</button>

    </nav>
);

Login.propTypes={
    authenticate:PropTypes.func.isRequired
}

export default Login;