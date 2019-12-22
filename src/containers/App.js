import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			Searchfield : ''
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots : users}));
	}

	onSearchChange =  (event) =>{
		this.setState({ Searchfield : event.target.value});
	}
	render(){
		const {robots,Searchfield} = this.state;
		const filteredrobot = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
		});
		return !robots.length ?
			<h1>LOADING</h1> :
			<div className="tc">
				<h1>ROBO FRIENDS</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots ={filteredrobot}/>
					</ErrorBoundry>
				</Scroll>
			</div>	
	}
}

export default App;