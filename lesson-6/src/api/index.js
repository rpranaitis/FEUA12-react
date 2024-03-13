export const fetchProducts = async () => {
    const response = await fetch(
        "https://65f1fcda034bdbecc7642cdc.mockapi.io/api/v1/products"
    );

    return response.json();
};
