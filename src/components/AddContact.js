import React, { Component } from 'react';


class AddContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [],
            contact : {

            },
            name : '',
            phone: '',
        };
        this.nameChange = this.nameChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
    }
    phoneChange(event) {
        this.setState({phone : event.target.value})
    }
    nameChange(event) {
        this.setState({name : event.target.value})
    }

    render() {
        return (
            <div className="addContact">
                <input
                    value={this.state.name}
                    onChange={this.nameChange}
                    type="text"
                    placeholder="name"/>
                <input
                    value={this.state.phone}
                    onChange={this.phoneChange}
                    type="text"
                    placeholder="phone"/>
                <button type="button" onClick={()=>{
                    this.props.add({name:this.state.name, phone: this.state.phone});
                    this.props.close()
                }} >save</button>
                <button type="button" onClick={this.props.close}>close</button>

            </div>
        )
    }
}

export default AddContact;
