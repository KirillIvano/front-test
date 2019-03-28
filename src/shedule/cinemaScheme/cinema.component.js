import React, {Component} from 'react';
import Row from './row/row.component';
import Screen from './screen/screen.component';
import Apply from './apply/apply.component';
import styles from './cinema.styles.css';
import Banner from './archiveBanner/banner.component';


class Cinema extends Component{
    constructor(props){
        super(props);
        console.log(props.data.price);
        this.handleSeatAdd = this.handleSeatAdd.bind(this);
        this.handleSeatRemove = this.handleSeatRemove.bind(this);
        this.handleSeatApply = this.handleSeatApply.bind(this);
        this.setUpBanner = this.setUpBanner.bind(this);
        this.state = {
            filmPrice: props.data.price,
            price: 0,
            selected: []
        };
    }
    componentDidUpdate(prevProps){
        if (prevProps.data.index !== this.props.data.index){
            this.setState({price: 0, selected: [], filmPrice: this.props.data.price});
        }
    }    
    handleSeatRemove(rowNum, seatNum){
        this.setState({price: this.state.price-this.state.filmPrice});
        this.state.selected.splice(this.state.selected.indexOf({row: rowNum, seat: seatNum}), 1);
    };

    handleSeatAdd(rowNum, seatNum){
        this.setState({price: this.state.price+this.state.filmPrice});
        this.state.selected.push({row: rowNum, seat: seatNum});
        console.log(this.state.selected);
    };

    handleSeatApply(){
        this.props.handleSaveSeats(this.state.selected);
        this.setState({price: 0, selected: []});
    };

    createRowsView(){
        let arr = [];
        let i;
        for (i=0;i<8;i++){
            if (!this.props.archiveMode){
                arr.push(<Row selected={this.state.selected} key={i} handleSeatAdd={this.handleSeatAdd} handleSeatRemove={this.handleSeatRemove} number={i} filled={this.props.data['booked'][i]}/>);
            }else{
                arr.push(<Row selected={[]} key={i} handleSeatAdd={null} handleSeatRemove={null} number={i} filled={this.props.data['booked'][i]}/>);
            }
        }
        return arr;
    };
    setUpBanner(){
        if (this.props.archiveMode){
            return <Banner/>; 
        }
    }
    render(){
        return (<div className={styles.cinema}>
            <Screen/>
            {this.createRowsView()}
            <Apply handleSeatApply={this.handleSeatApply} price={this.state.price}/> 
            {this.setUpBanner()}
        </div>);
    };
};



export default Cinema;