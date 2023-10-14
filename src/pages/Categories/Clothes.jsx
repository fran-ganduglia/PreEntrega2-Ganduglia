import * as React from 'react';
import CardProduct from '../../components/Card/CardProduct';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Clothes = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(res=>res.json())
    .then(json=>setProducts(json))
  }, [])


  return (
    <div>
    {products.map((products) => {
    return(
      <ThemeProvider theme={darkTheme}>
      <CardProduct key={products.id} products={products} />
      </ThemeProvider>
      )
  })}
  </div> 
  )
}

export default Clothes