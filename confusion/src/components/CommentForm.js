import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { FaPencilAlt } from 'react-icons/fa';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

// maintain some UI state so we use class component
class CommentForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    // console.log('Current State is: ' + JSON.stringify(values));
    // alert('Current State is: ' + JSON.stringify(values));
  }

  render() {
    return ( 
      <>
        <Button outline onClick={this.toggleModal}>
          <FaPencilAlt /> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating" 
                    name="rating" 
                    className="form-control"
                    validators={{
                      required
                    }}
                  >
                    <option>Please Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select> 
                  <Errors
                      className="text-danger"
                      model=".rating"
                      show="touched"
                      messages={{
                        required: 'Required',
                      }}
                  />  
                </Col>
              </Row>

              <Row className="form-group" md={10}>
                <Col>
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text model=".author" id="author" name="author" 
                    placeholder="Your Name" 
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />

                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater then 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />  
                </Col>
              </Row>

              <Row className="form-group" md={10}>
                <Col>
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea model=".comment" id="comment" 
                    name="comment" rows="6" 
                    className="form-control" />
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Button type="submit" value="submit" color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }

}

export default CommentForm;