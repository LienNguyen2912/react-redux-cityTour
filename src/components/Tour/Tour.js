import React, { Component } from 'react'
import './Tour.scss'
import { connect } from 'react-redux'
import { removeTour} from '../../actions/removeTour'

class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({showInfo: !this.state.showInfo});
    }
    handleDelete = (e) => {
        this.props.removeTour(this.props.tour.id);
    }
    render() {
        return (
            <article className='tour'>
                <div className='img-container'>
                    <img src={this.props.tour.img} alt=''>
                    </img>
                    <span className='close-btn' onClick={this.handleDelete}>
                        <i className='fa fa-window-close'></i>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{this.props.tour.city}</h3>
                    <h4>{this.props.tour.name}</h4>
                    <h5>info<span className='fa fa-caret-square-o-down' onClick={this.handleInfo}></span></h5>
                    {this.state.showInfo && <p>{this.props.tour.info}</p>}
                </div>
            </article>
        )
    }
}
const mapStateToProps = (state , ownProps) => {
    return {
        tour : ownProps.tour
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        removeTour : (id) => dispatch(removeTour(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tour)