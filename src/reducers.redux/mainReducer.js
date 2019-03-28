export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_SEATS':
            return state;
        case 'SAVE_SEATS':
            let i;
            for (i=0;i<action.seats.length;i++){
                if (action.day<0){            
                    action['store']['archive'][0][0]['booked'][0].push(9);
                }
                state['store']['present'][action.day][action.session]['booked'][action.seats[i]['row']].push(action.seats[i]['seat']);
            }
            localStorage.setItem('shedule', JSON.stringify(state.store) );
            return state;
        default:
            return state;
    }
};