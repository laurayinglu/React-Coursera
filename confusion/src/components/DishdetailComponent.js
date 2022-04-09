import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

  // get the dish from the props 
  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
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
    
  const DishDetail = (props) => {

    if(props.dish != null){
      return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
    
  }


export default DishDetail;