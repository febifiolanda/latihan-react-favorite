import React, {Component} from 'react';
import Navbar from './MyAppBar';
import Foodcard from './Foodcard';

class App extends Component {
    constructor(){
        super();
        this.state={
            food: [
                {
                title : 'fried rice with onion ',
                date  : '12 februari 2019',
                desc  : 'febi fiolanda ',
                },
                {
                    title : 'fried rice without onion  ',
                    date  : '12 februari 2019',
                    desc  : 'febi fiolanda ',
                }
            ]
        }
    }
render() {
        return (
            <div>
            <Navbar/>
            <br/>
            {this.state.food.map((data) =>{
                return(
                <div>
                    <Foodcard title={data.title}data={data.date}description={data.desc}/>
                  </div>
                )
            })}
            </div>
        );
    }
}

export default App;
