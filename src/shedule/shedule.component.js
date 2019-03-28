import React, {Component} from 'react';
import styles from './shedule.style.css';
// import {saveSeats} from './../actions.redux/saveSeats';
// import {getSeats} from './../actions.redux/getSeats';
// import {store} from './../store';
import Cinema from './cinemaScheme/cinema.component';
import { connect } from 'react-redux';
import CinemaSelector from './cinemaSelector/cinemaSelector.component';

const getHour = function(){
    const date = new Date(); 
    return () => date.getHours();
}();

class Shedule extends Component{
    constructor(props){
        super(props);
        this.handleSaveSeats = this.handleSaveSeats.bind(this);
        this.handleDaySelect = this.handleDaySelect.bind(this);
        this.handleSessionSelect = this.handleSessionSelect.bind(this);
        this.state = {
            selectedDay: 0,
            selectedSession: 0,
            archiveMode: getHour()>10
        };
    };

    handleDaySelect(num){
        this.setState({selectedDay: num,
                       archiveMode: (num<0 || num==0 && this.state.selectedSession*2+10<getHour())});
    };

    handleSessionSelect(num){
        this.setState({selectedSession: num,
                        archiveMode: (this.state.selectedDay<0||this.state.selectedDay==0 && num*2+10<getHour())});
    };

    handleSaveSeats(seats){
        this.props.dispatch({type: 'SAVE_SEATS',
                            day: this.state.selectedDay,
                            session: this.state.selectedSession,
                            seats: seats
                        });
    }

    render(){
        let dataDay;
        if (this.state.selectedDay===0){
            dataDay = this.props.present[0];
        }else{
            dataDay = (this.state.archiveMode)?this.props.archive[7-Math.abs(this.state.selectedDay)]:this.props.present[this.state.selectedDay];
        }        
        return (
            <div className={styles.shedule}>
                <Cinema handleSaveSeats={this.handleSaveSeats} archiveMode={this.state.archiveMode} data={dataDay[this.state.selectedSession]}/>
                <CinemaSelector films={dataDay} handleDaySelect={this.handleDaySelect} handleSessionSelect={this.handleSessionSelect} selectedDay={this.state.selectedDay} selectedSession={this.state.selectedSession}/>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    archive: state['store']['archive'],
    present: state['store']['present'],
});


export default connect(mapStateToProps)(Shedule);