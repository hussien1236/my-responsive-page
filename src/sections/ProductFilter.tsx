import ProductCard from "../components/ProductCard";
import "./ProductFilter.css";
import products from "../data/products.json";
import categories from "../data/categories.json";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
const ProductFilter = () => {
    const [category,setCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const handleOnChange = (cat: string) => {
        setCategory(cat);
        if(cat=="All") 
            setFilteredProducts(products);
        else 
            setFilteredProducts(products.filter((product) => product.category === cat));
    }
  return (
    <div className="ProductFilterSection">
        <h1>Product Filter</h1>
          <TextField
          value={category}
          onChange={(e) => handleOnChange(e.target.value)}
            label="Filter by Category"
            className="ProductFilterInput"
            select
          >
          {categories.map((category)=>(
            <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>
          ))}
          </TextField>
        <div className="ProductFilterContainer">
            {filteredProducts.map((product)=>(
            <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default ProductFilter