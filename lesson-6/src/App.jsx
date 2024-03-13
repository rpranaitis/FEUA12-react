import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import { Product } from "./components";

const App = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts().then((response) => {
            setTimeout(() => {
                setProducts(response);
            }, 2500);
        });
    }, []);

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    return (
        <div className="container py-4 text-center">
            {products ? (
                <div className="row g-5">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-sm-6 col-lg-4 col-xl-3"
                        >
                            <Product
                                item={product}
                                onDelete={() => handleDeleteProduct(product.id)}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <span>Kraunasi...</span>
            )}
        </div>
    );
};

export default App;
