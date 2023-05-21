import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { useState, useEffect, Fragment } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import './ProductsList.css';

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);

  const getProductsList = async () => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setProductsList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsList(setProductsList);
  }, []);

  return (
    <Fragment className="main">
      <Navbar/>
      <h3 className="text-center mt-5">Products</h3>
      <div className="container">
        <div className="row">
          {productsList.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        to={`/product-details/${product.id}`}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View Details
                      </Link>
                    </div>
                    <small className="text-muted">${product.price}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsList;