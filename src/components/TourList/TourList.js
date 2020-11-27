// rcc : react contained component
// rfc: react function component
import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
// import {tourData} from '../tourData'
import AddTour from '../AddTour/AddTour'
import { connect } from 'react-redux'

class TourList extends Component {
    // state = {
    //     tours:tourData
    // }
    // removeTour = (id) => {
    //     let tours = this.props.tours.filter(tour => {
    //         return (tour.id !== id);
    //     })
    //     this.setState({tours : tours});
    // }
    // addTour = (newTour) => {
    //     newTour.id = Math.floor(Math.random() * 1000);
    //     let tours = [...this.props.tours, newTour];
    //     this.setState({tours : tours});
    // }
    render() {
        const {tours} = this.props;
        let tourList = tours.map((tour) => {
            return(
                <Tour key={tour.id} tour={tour} />
            );
        });
        return (
            <div>
            <section className='tourlist'>
                {tourList}
            </section>
            <AddTour />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tours: state.tourData
    }
}
export default connect(mapStateToProps)(TourList)