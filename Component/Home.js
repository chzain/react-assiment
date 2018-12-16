import React, { Component } from 'react';
import {Table} from 'react-materialize';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeProduct} from '../action/action-product';
import EmptyProduct from './emptyproduct';
class Home extends Component {
   
   deleteProduct=(index)=>{
     let id =index;
        this.props.dispatch(removeProduct(id))
   }
    render() {
      let product = this.props.productList.length;
      return (
        <div className="container">
        
           <div className="section"></div>
        <h5>Read Products</h5>
         <Link to="/createproduct" className="btn blue">Create product</Link>
          <div className="section"></div>
          { product === 0 
          ? 
          <EmptyProduct/>
          :
          <Table hoverable='ture'striped centered>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>price</th>
      <th>category</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {this.props.productList.map((value,index)=>{
      return  <tr key={index}>
            <td>{value.productName}</td>
            <td>{value.productDescription}</td>
            <td>{value.productPrice}</td>
            <td>{value.productCategory}</td>
            <td className="setbtn">
              <Link to={`/readone/${index}`} className="btn blue waves-effect waves-light" >read one</Link>  
              <Link to={`/editproduct/${index}`} className="btn green waves-effect waves-light">edit</Link> 
              <Link to="/" className="btn red waves-effect waves-light" onClick={()=>{this.deleteProduct(index)}}>delete</Link> 
            </td>
      </tr>
   
    })}
   
  </tbody>
</Table>
          }
        </div>
      );
    }
  }
  const mapStateToProps =(store)=>{
    return{
      productList:store.productReducer,
    }
  } 

  export default connect(mapStateToProps) (Home);
  