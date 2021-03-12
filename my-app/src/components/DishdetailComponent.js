import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish !== null) {
            const dishComments = this.props.dish.comments.map((comment) => {
                return (
                  <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>--{comment.author}, {comment.date}</p>
                  </li>    
                );
            });
            // this.setState({dishComments : dishComments});
            return this.renderDish(dishComments);

        } else {
            return (
                null
            );
        }
    }

    renderDish(dishComments) {
        const dish = this.props.dish;
        return (
            <div className="row">
            <div className="col-12 col-md-5 m-1">
               <Card key={dish.id}>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
               </Card> 
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className= "list-unstyled">
                  {dishComments}
                </ul>
            </div>
        </div> 
     );
    }
}

export default DishDetail;
