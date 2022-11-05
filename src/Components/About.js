import React, { Component } from 'react'
import {Container,Row,Col,Tab,Tabs,Button,CloseButton, Form,ListGroup,Table} from 'react-bootstrap';
import './Pagestyle.css';
import mydata from './data.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default class About extends Component {
    state = {
        Label: "",
        TableArray: "",
        ToDoListArray: [],
        open: false,
        index: null,
      };
      HandleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
         
        });
      };

      HandleClick = () => {
        this.setState({
          ToDoListArray: [...this.state.ToDoListArray, this.state.Label],
          Label: "",
        });
      };

      HandleDelete = (index) => {
        let ToDoListArray = this.state.ToDoListArray;
        ToDoListArray.splice(index, 1);
        this.setState({
          ToDoListArray: ToDoListArray,
        });
      };      

    render() {

        let response = this.state.ToDoListArray.map((todo, index) => {
            return(
                <div>  
                <ListGroup.Item className="fw-bold ms-2 me-auto" key={index}>{todo} <CloseButton onClick={() => this.HandleDelete(index)}/></ListGroup.Item>
                </div>
    
            );
    
            });



        return (

          
            <Container>
                <h1>Add</h1>
                <Row>
                    <Col className="Page-row" sm={7}>
                    <Table striped bordered hover>
                    <tbody>
                    { this.state.ToDoListArray.map(todo => (
                        <tr>
                        <td>{todo}</td>
                        <th></th>
                        
                        </tr>
                    
                    ))}
                        
                    

           
                        
                    </tbody>
    
                    </Table>
    
    
                    
                    </Col>
                    <Col className="Page-row" sm={5}>
                    <Tabs
                        defaultActiveKey="datasetting"
                        id="setting"
                        className="mb-3">
                        <Tab eventKey="datasetting" title="Data Setting">
                        <div> <input 
                                type="text"
                                name="Label"
                                placeholder="Enter Label"
                                onChange={this.HandleChange}
                                value={this.state.Label}
                                /> 

                                <Button 
                                name="btnAddItem"
                                onClick={this.HandleClick}>Add Item</Button>
                               <div><ListGroup>{response}</ListGroup></div>
                                </div>

                        </Tab>
                        <Tab eventKey="viewsetting" title="View Setting">



                        </Tab>
                    </Tabs>
                    </Col>

                </Row>

            </Container>
        );
    }
}
