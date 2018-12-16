import React, { Component } from 'react';
import {Row,Col,Card,Input} from 'react-materialize';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {addProduct} from '../action/action-product';

class CreateProduct extends Component {
    state ={
        isSubmit:false
    }
    createNewProduct =(e)=>{
       e.preventDefault();
        let id = new Date().getTime();
        let name = this.refs.pname.state.value;
        let description = this.refs.description.state.value;
        let price = this.refs.price.state.value;
        let category = this.refs.type.state.value;
        let productDetils ={ productId:id,productName:name,productDescription:description,productPrice:price, productCategory:category,  }
        this.props.dispatch(addProduct(productDetils));
        this.setState({isSubmit:true})
    }

    
  render() {
   
    return (
    <div className="container">
    {this.state.isSubmit && <Redirect to="/"/>}
        <Row>
        <div className="section"></div>
        <Col m={6} s={12} offset="m3">
    <Card className="card-height">
    <form onSubmit={this.createNewProduct}>
            <h4 className="center ">Create New Product</h4>
        <Input type="text" placeholder="Enter Name" ref="pname" m={12} label="Name"  required />
        <Input placeholder="Description" m={12} label="Description" ref="description" required />
        <Input type="number" placeholder="price" m={12} label="price" ref="price" required />
        <Input m={12} type='select' label="Category" ref="type" defaultValue='FASHION'  >
     <option disabled>select item</option>
    <option value='MOVIES'>MOVIES</option>
    <option value='FASHION'>FASHION</option>
    <option value='BOOK'>BOOK</option>
  </Input>
        <input type="submit" value="create" className="btn green col m3 offset-m1 "/>
        <Link to="/" className="btn red col m3 offset-m2 ">cancel</Link>
 
    </form>
    </Card>
</Col>
          
        </Row>

    </div>
    );
  }
}

export default connect()(CreateProduct);
