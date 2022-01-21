import React ,{Component} from 'react';
import Button from '../../components/button/button'
import '../login/login.css'


class App extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)

    }

    changeFullName(event){
        this.setStart({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setStart({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setStart({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        
        const registered={
            fullName:this.state.fullName,
            email:this.state.email,
            password:this.state.password
        }
    }
    render(){
        return (
        <>
        <div className='main'>
        <div className='left-side'>
        <h1 >Not registered yet</h1>
        <Button  buttonStyle="btn-normal">Register</Button>
        </div>
        <div className='half-grey'>
        <div className='right-side'>
        <h1 className='heading'>Login</h1>
        <div className='form-part'>
        <form onSubmit={this.onSubmit}>
                <input type='text'
                placeholder='Full Name'
                onChange={this.changeFullName}
                value={this.state.fullName}
                />
                <input type='text'
                placeholder='Email'
                onChange={this.changeEmail}
                value={this.state.email}
                />        
                <input type='password'
                placeholder='Password'
                onChange={this.changePassword}
                value={this.state.password}
                />
                <input type='submit' value='Submit' buttonStyle="btn-normal"/>
        </form>
        </div>
        
        </div>
        </div>
        </div>
    
        </>
    );
    }
}


export default App;