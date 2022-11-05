import React, { Component,useState } from 'react';
import {Container,Row,Col,Tab,Tabs,Form,ListGroup,Table} from 'react-bootstrap';
import './Pagestyle.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import mydata from './data.json';



export default class Home extends Component {




    render() {
  

        return (
        <div>
        <h1>Add</h1>
        <Container>
         <Row>
            <Col    >
            Show your Table from JSON Object 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            </Col>
            <Col className="Page-row" sm={5}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3" defaultActiveKey="data">
               <Tab className="Page-row" eventKey="data" title="Data Setting">

      <Form>





     

<br></br>
<br></br>
      <Autocomplete
      id="selected-label"
      sx={{ width: 300 }}
      options={mydata}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Type label"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
    
              //Add Code for Listbox
                
              //myvalue= e.target.value;
              //mylist.push(e.target.value);
              //console.log(myvalue);
    


            }




          }}          

          

        />
      )}
    />




           </Form>


        
           

            </Tab>

            <Tab className="Page-row" eventKey="view" title="View Setting">
                This is View Setting
            </Tab>
        </Tabs>

        </Col>
      </Row>
    </Container>
            </div>
        )
    }
}
