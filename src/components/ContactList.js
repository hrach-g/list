import React, { Component } from 'react';
import Contact from './Contact'
import EditContact from "./EditContact";

class ContactList extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            index : 0,
            nameEdit: '',
            phoneEdit: '',
        };
        this.edit = this.edit.bind(this)
    }
    componentWillMount() {
        this.setState((ps,props) => {
            return {data: props.contacts }
        })
    }
    edit(id, name,phone){
        this.setState({
            index: id,
            nameEdit: name,
            phoneEdit: phone
        })
    }
    render() {
        return (

            <div className="contactList">
                {
                    this.state.index ? <EditContact close={this.props.close}
                                                    edit={this.edit}
                                                    editContact={this.props.editContact}
                                                    id={this.state.index}
                                                    nameEdit={this.state.nameEdit}
                                                    phoneEdit={this.state.phoneEdit}
                        /> :

                    this.props.contacts.map(
                        (contact) => {
                            return <Contact key={contact.id}
                                            elem={contact}
                                            edit={this.edit}
                                            deleteContact={this.props.deleteContact}
                                            editContact={this.props.editContact}
                            />
                        }
                    )
                }
            </div>
        )
    }
}

export default ContactList;