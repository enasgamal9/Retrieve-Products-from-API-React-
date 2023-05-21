import { useParams } from "react-router-dom";
import axiosInstance from "../../axios";
import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import "./ProductDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = () => {
    const id = useParams().productID;
    const [productDetails, setProductDetails] = useState([null]);

    useEffect(() => {
        getProductDetails(setProductDetails);
      }, []);
    
      const getProductDetails = async () => {
        axiosInstance
          .get(`/products/${id}`)
          .then((res) => {
            setProductDetails(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    return(
        <>
            <Navbar/>
            <section className="section">
            <img className="row rowClass product-image" src={productDetails.thumbnail} alt="Product Image"/>
            <div className="row rowClass">
          {productDetails?.images && productDetails.images.slice(0,3).map((image) => (
            <div className="col-sm-4" key={image}>
              <img src={image} className="img-fluid" alt="Product Image"/>
            </div>
          ))}
        </div>
            <p className="title">{productDetails.title} ({productDetails.category})</p>
            <p className="description">{productDetails.description}</p>
            <p className="price">${productDetails.price}</p>
            </section>
        </>
    )
}

export default ProductDetails;