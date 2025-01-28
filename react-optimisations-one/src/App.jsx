import { useMemo, useState } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "TV", price: 400 },
];

function ProductList() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name"); // or 'price'

  const filteredProducts = useMemo(() => {
    console.log("refilter");
    return initialProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    console.log("resort");
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });

  const totalPrice = filteredProducts.reduce((acc, product) => {
    console.log("recalculate");
    return acc + product.price;
  }, 0);

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
