import React,{Component, Fragment} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function FwenForm(props){
    return(
        <Fragment>
            <label>New Friend:</label>
            <form>
                <input type='text'
                    placeholder='Name'
                    value={props.friend.name}
                    name='name'
                    onChange={props.handleChange}
                    required />
            </form>
            <form>
                <input type='text'
                placeholder='Age'
                value={props.friend.age}
                name='age'
                onChange={props.handleChange}
                required />
            </form>
            <form>
                <input type='text'
                placeholder='E-mail'
                value={props.friend.email}
                name='email'
                onChange={props.handleChange}
                required />
            </form>
        </Fragment>
    )
}

FwenForm.PropTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    }),
}

class FriendForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            name: null,
            age: null,
            email: null
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response=> {
                //console.log(response);
                this.setState({id:this.getID(response)})
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                Issa FriendForm!
            </div>
        )
    }

    getID(response){
        return response.data[response.data.length-1].id+1;
    }
}

export default FwenForm;