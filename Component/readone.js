import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card,Col,Row} from 'react-materialize';
import {connect} from 'react-redux';
class ReadOne extends Component {
  
  render(){
      let id =this.props.match.params.id;
        let   currentProduct  =this.props.productList[id];
      return (
          <div>
             
  
             <div className="section"></div>
              <div className="section"></div>
               <div className="section"></div>
               <Row>
                 <div className="container">
            <Col m={12} >
    <Card >
     <Row  >
     <h3 className="center">Product Details</h3>
    
    
       <Row>
       <h5 className="col s3 offset-s2">Name:</h5>
       <h5 className="col s4 offset-s3">{currentProduct.productName}</h5>
       </Row>
       <div className="divider"></div>
       <Row>
       <h5 className="col s3 offset-s2">Description:</h5>
       <h5 className="col s4 offset-s3">{currentProduct.productDescription}</h5>
       </Row>
       <div className="divider"></div>
       <Row>
       <h5 className="col s3 offset-s2">price:</h5>
       <h5 className="col s4 offset-s3">{currentProduct.productPrice}</h5>
       </Row>
       <div className="divider"></div>
       <Row>
       <h5 className="col s3 offset-s2">Category:</h5>
       <h5 className="col s4 offset-s3">{currentProduct.productCategory}</h5>
       </Row>
       <div className="divider"></div>
     </Row>
     <Row>
       <Col s={3} offset="s7">
    <Link to="/" className="btn blue waves-effect waves-light center" >cencal</Link>
    </Col>
    </Row>

    </Card>
</Col>
</div>
</Row>

        </div>
      );
  }
}
const mapStateToProps =(store)=>{
    return{
      productList:store.productReducer,
    }
  } 
export default connect(mapStateToProps) (ReadOne);