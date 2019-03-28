import React, {Component, Fragment} from 'react';
import styles from './cinemaSelector.style.css';

const daysArray = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

const getDatesArray = function(){
    const date = new Date();
    let i;
    let array = [];
    const presentDate = date.getDate();
    for (i=-7;i<=7;i++){
        date.setDate(presentDate + i);
        const month = date.getMonth()+1;
        if (month<10){
          month = "0" + month;
        }
        const dateNow = date.getDate();
        if (dateNow<10){
          dateNow = "0" + dateNow;
        }
        array.push({day: daysArray[date.getDay()] + " " + dateNow + "." + month});
    }
    array[7] = {day :"СЕГОДНЯ", index: 0};
    array[8] = {day :"ЗАВТРА", index: 1};
    array[6] = {day :"ВЧЕРА", index: -1};
    return array;
};

const DayItem = function(props){
    return <p onClick={()=>{props.handleDaySelect(props.num);}} className={props.sty}>{props.content}</p>;
};

const SessionItem = function(props){
    return (
        <Fragment>
            <div onClick={()=>{props.handleSessionSelect(props.num);}} className={props.sty}>{props.content}</div>
            <div className={styles.film_name}>{props.film}</div>
        </Fragment>
    );
};


class CinemaSelector extends Component{
    constructor(props){
        super(props);
        this.handleDaySelect = this.handleDaySelect.bind(this);
        this.handleSessionSelect = this.handleSessionSelect.bind(this);
        this.state = {
            dates: getDatesArray(),
            selectedDay: props.selectedDay,
            selectedSession: props.selectedSession
        };
    };

    handleDaySelect(num){
        this.props.handleDaySelect(num);
        this.setState({selectedDay: num});
    };

    handleSessionSelect(num){
        this.props.handleSessionSelect(num);
        this.setState({selectedSession: num});
    };

    createDaysView(){
        let arr = [];
        let i;
        for (i=0;i<15;i++){
            arr.push(<DayItem handleDaySelect={this.handleDaySelect} key={i} num={i-7} content={this.state.dates[i]['day']} sty={styles.item+((this.state.selectedDay===i-7)?(' '+styles.selected):'')}/>);
        }
        return arr;
    };

    createSessionsView(){
        let arr = [];
        let i;
        for (i=10;i<=20;i+=2){
            arr.push(<SessionItem film={this.props.films[(i-10)/2]['name']} handleSessionSelect={this.handleSessionSelect} key={i} num={(i-10)/2} content={i+':00'} sty={styles.item+((this.state.selectedSession===((i-10)/2))?(' '+styles.selected):'')}/>);
        }
        return arr;
    };

    render(){
        return (
            <div className={styles.cinema_selector}>
                <div className={styles.present_days_selector}>
                    {this.createDaysView()}
                </div>
                <div className={styles.present_sessions_selector}>
                    {this.createSessionsView()}
                </div>
            </div>
        );
    };
};

export default CinemaSelector;