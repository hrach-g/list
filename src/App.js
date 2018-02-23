import React, { Component } from 'react';
import './App.css';

import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

import ReqRes from './tools/ReqRes'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            baseUrl : 'http://localhost:8080/contact/',
            data: [],
            add: 1,
        };
        this.addValid = this.addValid.bind(this);
        this.close = this.close.bind(this);
        this.add = this.add.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.editContact = this.editContact.bind(this);
    }

    componentWillMount() {
        ReqRes.getData(this.state.baseUrl)
            .then((get) => {
                this.setState({data: get})
            })
    }

    add (obj){
        ReqRes.addContact(this.state.baseUrl, obj)
            .then((post) => {
                this.setState({data: post})
            })
    }
    deleteContact(id){
        ReqRes.deleteData(this.state.baseUrl, id)
            .then((newData) => {
                this.setState({data: newData});
            })
    }
    editContact(id,obj) {
        ReqRes.editContact(this.state.baseUrl,id,obj)
            .then((newData) => {
                this.setState({data: newData});
        })
    }

    addValid (){
        this.setState({add : 0});
    }
    close () {
        this.setState({add : 1});
    }


  render() {
        return (
            <div className="App">
                <button onClick={this.addValid}> Add Contact </button>
                {
                    this.state.add ?
                        <ContactList
                            deleteContact={this.deleteContact}
                            editContact={this.editContact}
                            contacts={this.state.data}
                            close={this.close}
                        /> :
                        <AddContact
                            add={this.add}

                            close={this.close}
                        />
                }
            </div>
        )
  }
}

export default App;
