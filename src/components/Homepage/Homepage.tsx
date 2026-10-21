import { getProducts } from "@/lib/api";
import Hero from "./Hero";
import { BazarDorProduct } from "@/types/bazardor";
import PriceRisers from "./PriceRisers";
import PriceFallers from "./PriceFallers";
import AllProducts from "./AllProducts";

const Homepage = async() => {
    const products: BazarDorProduct[] = await getProducts()
    return (
        <>
            <Hero></Hero>
            <PriceRisers products ={products}></PriceRisers>
            <PriceFallers products ={products}></PriceFallers>
            <AllProducts products ={products}></AllProducts>
        </>
    );
};

export default Homepage;