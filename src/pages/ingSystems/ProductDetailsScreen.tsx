import Header from '../../components/header/Header';
import styled from "styled-components";
import { breakpoints, defaultTheme } from "./styles/themes/default";
import { product_one, ProductFilterList } from "./data/data";
import { Container } from "./styles/styles";
import Breadcrumb from './components/common/Breadcrumb'
import ProductPreview from "./components/product/ProductPreview";
import { Link } from "react-router-dom";
import { BaseLinkGreen } from "./styles/button";
import { currencyFormat } from "./utils/helper";
import ProductServices from './components/product/ProductServices'
import ProductDescriptionTab from './components/product/ProductDescriptionTab'
import { GlobalStyles } from "./styles/global/GlobalStyles";
import ProductSimilar from './components/product/ProductSimilar'

const DetailsScreenWrapper = styled.main`
  margin: 40px 0;
`;

const DetailsContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: ${breakpoints.xl}) {
    gap: 24px;
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
`;

const ProductDetailsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 12px;
  }

  .prod-title {
    margin-bottom: 10px;
  }
  .rating-and-comments {
    column-gap: 16px;
    margin-bottom: 20px;
  }
  .prod-rating {
    column-gap: 10px;
  }
  .prod-comments {
    column-gap: 10px;
  }
  .prod-add-btn {
    min-width: 160px;
    column-gap: 8px;
    &-text {
      margin-top: 2px;
    }
  }

  .btn-and-price {
    margin-top: 36px;
    column-gap: 16px;
    row-gap: 10px;

    @media (max-width: ${breakpoints.sm}) {
      margin-top: 24px;
    }
  }
`;

const ProductSizeWrapper = styled.div`
  .prod-size-top {
    gap: 20px;
  }
  .prod-size-list {
    gap: 12px;
    margin-top: 16px;
    @media (max-width: ${breakpoints.sm}) {
      gap: 8px;
    }
  }

  .prod-size-item {
    position: relative;
    height: 38px;
    width: 38px;
    cursor: pointer;

    @media (max-width: ${breakpoints.sm}) {
      width: 32px;
      height: 32px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 38px;
      height: 38px;
      opacity: 0;
      cursor: pointer;

      @media (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }

      &:checked + span {
        color: ${defaultTheme.color_white};
        background-color: ${defaultTheme.color_outerspace};
        border-color: ${defaultTheme.color_outerspace};
      }
    }

    span {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      border: 1.5px solid ${defaultTheme.color_silver};
      text-transform: uppercase;

      @media (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const ProductColorWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 24px;
  }

  .prod-colors-top {
    margin-bottom: 16px;
  }

  .prod-colors-list {
    column-gap: 12px;
  }

  .prod-colors-item {
    position: relative;
    width: 22px;
    height: 22px;
    transition: ${defaultTheme.default_transition};

    &:hover {
      scale: 0.9;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 22px;
      height: 22px;
      opacity: 0;
      cursor: pointer;

      &:checked + span {
        outline: 1px solid ${defaultTheme.color_gray};
        outline-offset: 3px;
      }
    }

    .prod-colorbox {
      border-radius: 100%;
      width: 22px;
      height: 22px;
      display: inline-block;
    }
  }
`;

const ProductDetailsScreen: React.FC<any> = ({info}) => {
    const scrollToElement = () => {
        const element = document.getElementById('myElement');
        // @ts-ignore
        element.scrollIntoView({ behavior: "smooth" }); // Для плавной прокрутки
    }

    const stars = Array.from({ length: 5 }, (_, index) => (
        <span
            key={index}
            className={`text-yellow ${
                index < Math.floor(product_one.rating)
                    ? "bi bi-star-fill"
                    : index + 0.5 === product_one.rating
                        ? "bi bi-star-half"
                        : "bi bi-star"
            }`}
        ></span>
    ));

    const breadcrumbItems = [
        { label: "Инжинерные системы", link: "/ing-systems" },
        // @ts-ignore
        { label: ProductFilterList.find((element) => element.id === info.category).title, link: "/ing-systems" },
        { label: info.title, link: `/ing-systems/${info.id}` },
    ];
    return (
        <div>
            <GlobalStyles />
            <Header/>
            <DetailsScreenWrapper>
                <Container>
                    <Breadcrumb items={breadcrumbItems} />
                    <DetailsContent className="grid">
                        <ProductPreview previewImages={info.imgSource} />
                        <ProductDetailsWrapper>
                            <h2 className="prod-title">{info.title}</h2>

                            <div className="btn-and-price flex items-center flex-wrap">
                                <BaseLinkGreen
                                    onClick={scrollToElement}
                                    as={BaseLinkGreen}
                                    className="prod-add-btn"
                                >
                <span className="prod-add-btn-icon">
                  <i className="bi bi-cart2"></i>
                </span>
                                    <span className="prod-add-btn-text">Отправиить заявку</span>
                                </BaseLinkGreen>
                                <span className="prod-price text-xl font-bold text-outerspace">
                {currencyFormat(info.price)}
              </span>
                            </div>
                            <ProductServices />
                        </ProductDetailsWrapper>
                    </DetailsContent>
                    <ProductDescriptionTab />
                    <ProductSimilar />
                </Container>
            </DetailsScreenWrapper>

        </div>
    )
}
export default ProductDetailsScreen