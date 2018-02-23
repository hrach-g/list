import React, { Component } from 'react';

class Contact extends Component {


    render() {
        return (
            <div>
                <span>{this.props.elem.name}</span> :
                <span>{this.props.elem.phone}</span> {'\t'}
                <button type="button"
                        onClick={()=>{
                            this.props.edit(this.props.elem.id, this.props.elem.name, this.props.elem.phone)
                        }}
                > edit </button>
                <button type="button" onClick={()=> {this.props.deleteContact(this.props.elem.id)}} > delete </button>

            </div>
        )
    }
}

export default Contact;