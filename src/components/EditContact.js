import React, {Component} from 'react'

class EditContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
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
    componentWillMount() {
        console.log(this.props.phoneEdit, this.props.nameEdit);
        this.setState({
            name: this.props.nameEdit,
            phone: this.props.phoneEdit
        })
    }
    componentWillReceiveProps(){

    }
    render(){
        return (
            <div>
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
                    this.props.editContact(this.props.id,{
                        name : this.state.name,
                        phone: this.state.phone
                    });
                    this.props.edit(0);
                }} >save</button>

            </div>
        )
    }
}
export default EditContact;