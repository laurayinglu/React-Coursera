import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg } from 'reactstrap';

// functional component
function RenderMenuItem({dish, onClick}) {
  return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle> {dish.name} </CardTitle>
        </CardImgOverlay>
      </Card>
  );
}

// this is equivalent to function Menu(props) {...}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        {/* onClick is sent by the main component */}
        <RenderMenuItem dish={dish} onClick={props.onClick}/> 
      </div>
    )
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}


export default Menu;