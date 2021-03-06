/**
 * NPM imports
 */
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

/**
 * 
 */
import Buttom  from '../components/button'

/**
 * 
 */
export default class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.btnAddmore  = this.btnAddmore.bind(this)
        this.btnDelete = this.btnDelete.bind(this)
        this.renderItemList = this.renderItemList.bind(this)
        this.getTextval = this.getTextval.bind(this)
        this.fnsubmit = this.fnsubmit.bind(this)
        this.getDateVal = this.getDateVal.bind(this)

        this.state ={ count:[1]}
        //this.state = {[{'name':}]}
    }
    /**
     * this function addds count
     */
    btnAddmore =() =>{
        const newele = this.state.count.length + 1
        this.setState({'count':[...this.state.count, newele]});
    }

    /**
     * 
     */
    btnDelete =() =>{
        const val =  this.state.count.splice(0,this.state.count.length-1)        
        if(val.length>0)
            this.setState({ 'count':[ ...val]})
    }

    /**
     * getTextval
     */
    getTextval = ( event ) => {
        const val = event.target.value
        this.setState({[event.target.id]: val})
    } 

    renderItemList=()=>{
        const itemCount = this.state.count

       return itemCount.map((item)=>{
            return (<Grid key={item}  xs={12}container spacing={24} direction="row"  justify="center" alignment='center'  > 
                        <Grid xs={3} style={pad}>
                            <TextField fullWidth id={`${item}-name`} label="name"   onChange={this.getTextval}/>
                        </Grid>
                        <Grid xs={3} style={pad}>
                            <TextField fullWidth id={`${item}-phone`} label="phone"   onChange={this.getTextval}/>
                        </Grid>
                        <Grid xs={3} style={pad}>
                            <TextField fullWidth id={`${item}-email`} label="email"   onChange={this.getTextval}/>
                        </Grid>
                    </Grid>)
        })
    }

    /**
     * Master Submit form
     */
    fnsubmit = () =>{
        let userList = []
        for(let i=1;i<=this.state.count.length;i++){
            var obj = {
               'name':this.state[i+'-name'],
               'phone':this.state[i+'-phone'],
               'email':this.state[i+'-email']
            }
            userList.push(obj)
           }

        const groupObj = {
            startdate : this.state.startdate,
            enddate : this.state.enddate,
            members: userList
        }
        
        this.props.fnsubmit( groupObj )

    }

    /**
     * 
     */
    getDateVal =( event,type ) =>{
        console.log(this.state)
        const val = event.target.value
        this.setState({[type]:val})
    }
    
    /**
     * Render function
     */
    render() {
        const count = this.state.count.length
        const dateProp = {
            shrink: true
        }
        return (
        <div>
            {this.renderItemList()}
            <Grid xs={12}container spacing={24} direction="row"  justify="center" alignment='center'>
                <Grid style={pad}><Buttom  name = {`+${count}`} type="primary"  fnclick = {this.btnAddmore} /></Grid>
                <Grid style={pad}><Buttom  name = {`-${count}`} type="secondary"  fnclick = {this.btnDelete} /></Grid>
            </Grid>
            
            <Grid  xs={12}container spacing={24} direction="row"  justify="center" alignment='center'  > 
                            <Grid xs={3} style={pad}>
                                <TextField fullWidth type='date' id='startdate' label="startdate"   onChange={(event)=>{this.getDateVal( event,'startdate')}} InputLabelProps={ dateProp }/>
                            </Grid>
                            <Grid xs={3} style={pad}>
                                <TextField fullWidth  type='date' id='enddate' label="enddate"   onChange={(event)=>{this.getDateVal( event,'enddate')}} InputLabelProps={ dateProp }/>
                            </Grid>
                </Grid>


            <Grid style={pad}><Buttom  name = 'submit' type="secondary"  fnclick = {this.fnsubmit} /></Grid>
        </div>
        )
    }
}


const pad={
    padding:'2%'
}