import React,{Component} from "react";
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeInProduct} from '../action/action-product';

import {Row,Col,Card,Input} from 'react-materialize';
class EditProduct extends Component{
    
    state ={
        isSubmit:false
    }
    updateProduct =(e)=>{
            e.preventDefault();
        let id = new Date().getTime();
        let currentId = this.props.match.params.id;
        let name = this.refs.pname.state.value;
        let description = this.refs.description.state.value;
        let price = this.refs.price.state.value;
        let category = this.refs.type.state.value;
        let productDetils ={currentId:currentId, productId:id,productName:name,productDescription:description,productPrice:price, productCategory:category,  }
        this.props.dispatch( changeInProduct(productDetils));
        this.setState({isSubmit:true})
    }
    render(){
        let id =this.props.match.params.id;
        let   currentProduct  =this.props.productList[id];
        return (
            <div className="container">
             {this.state.isSubmit && <Redirect to="/"/>}
                        <Row>
            <div className="section"></div>
            <Col m={6} s={12} offset="m3">
        <Card className="card-height">
        <form onSubmit={this.updateProduct}>
                <h4 className="center ">Update  Product</h4>
            <Input placeholder="Enter Name" m={12} label=" Name" ref ="pname" defaultValue={currentProduct.productName} required/>
            <Input placeholder="Description" m={12} label="Description" ref="description" defaultValue={currentProduct.productDescription} required />
            <Input placeholder="price" m={12} label="price" ref="price" defaultValue={currentProduct.productPrice} required />
            <Input m={12} type='select' label="Category" ref="type" defaultValue={currentProduct.productCategory}  required>
         <option disabled>select item</option>
        <option value='MOVIES'>MOVIES</option>
        <option value='FASHION'>FASHION</option>
        <option value='BOOK'>BOOK</option>
      </Input>
            <input type="submit" value="UPDATE"  className="btn green col m3 offset-m1 "/>
            <Link to="/" className="btn red col m3 offset-m2 ">cancel</Link>
     
        </form>
        </Card>
    </Col>
              
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
export default connect(mapStateToProps) (EditProduct);