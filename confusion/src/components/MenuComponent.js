import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// functional component
function RenderMenuItem({dish, onClick}) {
  return (
      <Card>
        <Link to={`/menu/${dish.id}`} >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle> {dish.name} </CardTitle>
          </CardImgOverlay>
        </Link>
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
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}


export default Menu;