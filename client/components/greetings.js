import React from "react"

class Greetings extends React.Component{
    render(){
        return (
           <div className="jumbotron">
                {!this.props.auth.isAuthenticated &&
                <h1>Hi! Welcome to the DRR Demo. Have you signed up yet?</h1>}
                {this.props.auth.isAuthenticated &&
                 <h1>You've succesfully logged in !</h1>
                }

           </div>
        )
    }
}

export default Greetings