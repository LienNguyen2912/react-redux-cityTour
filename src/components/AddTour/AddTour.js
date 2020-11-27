import React, { Component } from 'react'
import './AddTour.scss'
import {addTour} from '../../actions/addTour'
import { connect } from 'react-redux'

class AddTour extends Component {
    state = {
        id: null,
        city :'',
        img: './img/paris.jpeg',
        name:'',
        info:''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTour(this.state);
        this.setState({
            id: null,
            city :'',
            img: './img/paris.jpeg',
            name:'',
            info:''
        });
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.id] : e.target.value
            });
    }
    render() {
        return (
            <div>
                <fieldset>
                <legend>Add city:</legend>
                <form className='add-tour' onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='city' className='labelFor'>City</label>
                        <input type='text' className='inputField' id='city' value={this.state.city} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='name' className='labelFor'>Name</label>
                        <input type='text' className='inputField' id='name' value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='info' className='labelFor'>Info</label>
                        <input type='text' className='inputField' id='info' value={this.state.info} onChange={this.handleChange}></input>
                    </div>
                    <button onClick={this.handleSubmit} className='fa fa-plus addbtn'>Add tour</button>
                </form>
                </fieldset>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        id: null,
        city :'',
        img: './img/paris.jpeg',
        name:'',
        info:''
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTour : (newTour) => dispatch(addTour(newTour))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTour)