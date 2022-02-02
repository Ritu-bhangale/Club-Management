import axios from 'axios';
import React, { Component } from 'react';

export class clubDetail_form extends Component {
    constructor(props) {
        super(props);
    
        this.onChangename = this.onChangename.bind(this);
        this.onChangeWingname = this.onChangeWingname.bind(this);
        this.onChangewebsite = this.onChangewebsite.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          wingname: '',
          website: '',
          description: '',
          users: []
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:8080/register/find')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(e => e.name),
                name: response.data[0].name
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
    
      onChangename(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeWingname(e) {
        this.setState({
          wingname: e.target.value
        })
      }
    
      onChangewebsite(e) {
        this.setState({
          website: e.target.value
        })
      }
    
      onChangeDescription(e) {
        this.setState({
        description: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const clubb = {
          name: this.state.name,
          wingname: this.state.wingname,
          website: this.state.website,
          description: this.state.description
        }
    
        console.log(clubb);
    
        axios.post('http://localhost:8080/clubs/new', clubb)
          .then(res => console.log(res.data));
    
        window.location = '/clubdetails';
      }

  render() {
    return(
        <>
        <h1 className='welcome'>Welcome!</h1>
        <div className='colorpart'>
        <div className="form-part">
            <form onSubmit={this.onSubmit}>
                <p>Club name:</p>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangename}>
                    {
                        this.state.users.map(function(user) {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                 </select>
                <p>Name of Wing:</p>
                <input
                    type="text"
                    required
                    name="wingname"
                    value={this.state.wingname}
                    onChange={this.onChangeWingname}
                />
                <p>Website Link:</p>
                <input
                    type="text"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChangewebsite}
                />
                <p>About the club:</p>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                />
                <input type="submit" value="club" />
            </form>
            
        </div>
        </div>
    
        </>
      );
  }
}

export default clubDetail_form;

