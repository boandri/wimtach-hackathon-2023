import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Journal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [journals, setJournals] = useState(['Wednesday, March 24', 'Today\'s work / Friday, March 20','Thoughts / Thursday, March 19']);
    let [inputValue, setInputValue] = useState('');

    let [details, setDetails] = useState();
    let [inputDetail, setInputDetail] = useState(['Detail 1', 'Update index. When you\'re done, write page numbers on the corner of each page. Flip back to your index and add your monthly log to your index. For example, you could write January Monthly Log... 3-4.','We are all dreaming in this endless universe waiting for our dreams to come true but don’t lose hope as dreams never end, they never die, they never stop because they are just the futuristic vision we are waiting to see as reality']);

    
  
    return (
      <>
        <br></br>
        <Button  variant="primary" onClick={handleShow}>
          Create Journal
        </Button>
        <br></br><br></br><br></br><hr></hr>
        
        <div>
          {journals.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h3> {journals[i]} </h3>
              <p> {inputDetail[i]}</p>
              {/* <button onClick={()=>{
                var title = [...journals];
                title.splice(i,1);
                setJournals(title);

                var detail = [...details];
                detail.splice(i,1);
                setDetails(detail);
              }} >Delete</button> */}

              <Button variant="secondary" onClick={handleShow}>
                Delete
              </Button>

              <hr></hr>
            </div>
          )
          })}
        </div>

        


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My Journals</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text" onChange={(e)=>{
                    setInputValue(e.target.value);
                  }}
                  // placeholder="What's about today?"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" onChange={(e)=>{
                    setInputValue(e.target.value);
                  }} rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={()=>{
              var title = [...journals]
              title.unshift(inputValue);
              setJournals(title);

              var detail = [...details]
              detail.unshift()
            }} variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Journal;