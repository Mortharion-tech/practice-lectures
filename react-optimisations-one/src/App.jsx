import { useMemo, useState } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "TV", price: 400 },
  //  When we have 2 similar words ("top"), results don't change from searching "to" to "top" but we are still resorting and recalculating
  //  Is changing that even worth all the overhead?
  { id: 4, name: "Tabletop", price: 500 },
];

function ProductList() {
  //  Worth to add useCallback for event handlers?
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name"); // or 'price'

  const filteredProducts = useMemo(() => {
    console.log("refilter");
    //  worth adding timeout here for debounce?
    return initialProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const sortedProducts = useMemo(() => {
    console.log("resort");
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.price - b.price;
      }
    });
  }, [filteredProducts, sortBy]);

  const totalPrice = useMemo(() => {
    console.log("recalculate");
    return filteredProducts.reduce((acc, product) => acc + product.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <h3>Total Price: {totalPrice}</h3>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>{`${product.name} - $${product.price}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
