const initState = {
    tourData: [
        {
        id: 1,
        city: "new york",
        img: "./img/newyork.jpeg",
        name: "new york bridge tour",
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
        },
        {
        id: 2,
        city: "paris",
        img: "./img/paris.jpeg",
        name: "paris lights tour",
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
        },
        {
        id: 3,
        city: "london",
        img: "./img/london.jpeg",
        name: "london royal palace tour",
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
        },
        {
        id: 4,
        city: "tokyo",
        img: "./img/tokyo.jpeg",
        name: "tokyo sushi tour",
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_TOUR') {
        let newTourData = state.tourData.filter(tour => {
            return (tour.id !== action.id)
        });
        return {
            ...state,
            tourData: newTourData
        }
    } else if (action.type === 'ADD_TOUR') {
        action.tour.id = Math.floor(Math.random() * 1000);
        action.tour.img= './img/random' + Math.floor(Math.random()*5) +'.jpeg';
        let newTourData = [...state.tourData, action.tour];
        return {
            ...state,
            tourData: newTourData
        }
    }
    return state;
}
export default  rootReducer