import React, { Component } from 'react'
import { userContext } from '../ConstantClass'

export default class ParentClass extends Component {
    static contextType = userContext;
    constructor(props) {
        super(props)

        this.state = {
            myId: 0,
            myRole: "none",
            message:"Before clicking on button"
        }
        this.chan=this.chan.bind(this);
    }

    chan(ob) {
        this.setState({
            myId: ob.ID,
            myRole: ob.ROLE,
            message:"After clicking on button"
        })

    }
    render() {
        const { id, role, changeObject } = this.context
        return (
            <div>ParentClass

                {id} {role}
                <br></br> <br></br>
               {this.state.message} {this.state.myId}  {this.state.myRole}
                <button onClick={()=>this.chan(
                    {
                        "ID":id,
                        "ROLE":role
                    }
                    )}>CLick Here to change values from Parent component</button>
            </div>
        )
    }
}
