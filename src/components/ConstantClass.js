
import React, { Component } from 'react'

export const userContext = React.createContext();
export const UserCOnsumer = userContext.Consumer;

export default class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      role: "demo",
      id: "10"
    }
    console.log('states==> id:', this.state.id, ' role:', this.state.role);
    console.log('props ==> id:', this.props.id, ' role:', this.props.role);
    this.changeObject=this.changeObject.bind(this);
  }

  changeObject(e) {

    this.setState({
      role: e.role,
      id: e.id
    })
  }
  render() {
    const { children } = this.props
    const { role, id } = this.state
    const{changeObject}=this
    // const { chanegUserName } = this
    return (
      <div>

        <userContext.Provider value={{ role, id ,changeObject}}>
          {children}

        </userContext.Provider>
      </div>
    )
  }
}
