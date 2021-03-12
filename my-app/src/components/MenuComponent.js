import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Menu extends Component{

    constructor(props) {
        super(props);
    }



    renderDish(dish) {
         if (dish !== null) {
             return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>             
            );
         } else {
             return (
                 <div></div>
             );
         }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                  <Card
                    onClick={() => this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                       <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>

            //   <div key={dish.id} className="col-12 mt-5">
            //     <Media tag="li">
            //       <Media left middle>
            //           <Media object src={dish.image} alt={dish.name} />
            //       </Media>
            //       <Media body className="ml-5">
            //         <Media heading>{dish.name}</Media>
            //         <p>{dish.description}</p>
            //       </Media>
            //     </Media>
            //   </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                  {menu}
                </div>
            </div>
        );
    }
}

export default Menu;