import styled from "styled-components";
import { products } from "../../data/data";
import ProductItem from "./ProductItem";
import { breakpoints } from "../../styles/themes/default";

const ProductListWrapper = styled.div`
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

interface Product {
    id: number;
    imgSource: string;
    title: string;
    brand: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <ProductListWrapper className="grid">
            {products?.map((product: any) => {
                return <ProductItem key={product.id} product={product} />;
            })}
        </ProductListWrapper>
    );
};

export default ProductList;
