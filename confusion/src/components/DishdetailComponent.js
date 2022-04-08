import React, { Component } from 'react';
import { Card, CardIm, CardImgOverlay, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    
    // console.log(props);

    this.state = {

    }
  }



  renderDish(dish) {
    if(dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if(comments != null) {
      const commentsList = comments.map((com) => {
        return (
          <ul className="list-unstyled">
            <li key={com.id}>
              <p>{com.comment}</p>
              <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                }).format(new Date(com.date))}
              </p>
            </li>
          </ul>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          {commentsList}
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
    
  render() {
    const dish = this.props.dish;
    // console.log(dish);
    if(dish == null){
      return (
        <div></div>
      );
    }

    const dishItem = this.renderDish(dish);
    const commentItem = this.renderComments(dish.comments);

    return (
      <div className="container">
        <div className="row">
          {dishItem}
          {commentItem}
        </div>
      </div>
    );
    
  }
}

export default DishDetail;