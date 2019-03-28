import React, {Component} from 'react';
import styles from './seat.style.css';

class Seat extends Component{
    constructor(props){
        super(props);
        this.handleChoose = this.handleChoose.bind(this);
        this.state = {
            modifier: (props.modifier==='booked')?styles.booked:"",
            clickHandle: !props.modifier?this.handleChoose:undefined
        };
    };

    componentDidUpdate(lastProps, lastState){
        if (this.props.modifier!=lastProps.modifier){
            if (lastProps.modifier == 'selected' && !this.props.modifier){
                this.setState({modifier: ''});
            }else if (lastProps.modifier === 'booked' && !this.props.modifier){
                this.setState({modifier: ''});
            }else if(this.props.modifier === 'booked'){
                this.setState({modifier: styles.booked});
            }
    }
    };
    
    handleChoose(){
        
        if (this.props.handleSeatRemove){
            if (this.state.modifier){
                this.setState({modifier: ''});
                this.props.handleSeatRemove(this.props.row, this.props.num);
            }else{
                this.setState({modifier: styles.selected});
                this.props.handleSeatAdd(this.props.row, this.props.num);
            }
        }
    };

    render(){
        return (
            <div className={styles.seat + " " + this.state.modifier} onClick={this.state.clickHandle}>
                <div className={styles.seat_number}>{this.props.num+1}</div>
            </div>
        );
    };
};

export default Seat;