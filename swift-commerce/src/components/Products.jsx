import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  //fetch product with fetch api. Set Filter to match data.
  //Adjust loading state to render skeleton component if true
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, [componentMounted]);

  //Check state of loading, Adjust loading state to render skeleton component if true
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  //filter products by name selected
  const filterProduct = (name) => {
    const newList = data.filter((item) => item.category === name);
    setFilter(newList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <Button
            variant="contained"
            color="error"
            className="me-2"
            onClick={() => setFilter(data)}
          >
            All
          </Button>
          <Button
            variant="contained"
            color="error"
            className="me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="contained"
            color="error"
            className="me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="contained"
            color="error"
            className="me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="contained"
            color="error"
            className="me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </Button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <Card sx={{ maxWidth: 345, margin: 5 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title.substring(0, 20)}...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.substring(0, 100)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="error" size="small">${product.price}</Button>
                  <Button variant="contained" color="error" size="small">View</Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
