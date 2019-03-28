import React, {Component, Fragment} from 'react';
import styles from './row.style.css';
import Seat from './seat/seat.component';

class Row extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    };

    formRow(){
        let i;
        let seats = [];
        for (i=0;i<10;i++){
            if (this.props.filled.includes(i)){
                seats.push(<Seat key={i} num={i} row={this.props.number} modifier="booked"/>);
            }else if(this.props.selected.find((item)=>{if(item.seat===i && item.row===this.props.number) return true;})){
                seats.push(<Seat handleSeatRemove={this.props.handleSeatRemove} handleSeatAdd={this.props.handleSeatAdd} key={i} num={i} row={this.props.number} modifier="selected"/>);
            }else{
                seats.push(<Seat handleSeatRemove={this.props.handleSeatRemove} handleSeatAdd={this.props.handleSeatAdd} key={i} num={i} row={this.props.number} modifier={null}/>);
            }
        }
        return seats;
    }

    render(){
        return (
        <div className={styles.row}>
            {this.formRow()}
            <div className={styles.row_num}>{this.props.number+1}</div>
        </div>
        );
    };
};

export default Row;