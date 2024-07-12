import Header from '../../components/header/Header';
import styled from "styled-components"
import { breakpoints, defaultTheme } from "./styles/themes/default";
import { Container, ContentStylings, Section } from "./styles/styles";
import ProductFilter from "./components/product/ProductFilter";
import Breadcrumb from './components/common/Breadcrumb'
import ProductList from "./components/product/ProductList";
import { products } from "./data/data";
import store from './data/store';
import { GlobalStyles } from "./styles/global/GlobalStyles";
import {useSelector} from "react-redux";

import { Link } from "react-router-dom";
import Title from "./components/common/Title";
import {
    useState
} from "../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

const ProductsContent = styled.div`
  grid-template-columns: 320px auto;
  margin: 20px 0;

  @media (max-width: ${breakpoints.xl}) {
    grid-template-columns: 260px auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    row-gap: 24px;
  }
`;

const ProductsContentLeft = styled.div`
  border: 1px solid rgba(190, 188, 189, 0.4);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 10px 50px;
  overflow: hidden;

  @media (max-width: ${breakpoints.lg}) {
    display: grid;
  }
`;

const ProductsContentRight = styled.div`
  padding: 16px 40px;

  .products-right-top {
    margin-bottom: 40px;
    @media (max-width: ${breakpoints.lg}) {
      margin-bottom: 24px;
    }
    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      row-gap: 16px;
      align-items: flex-start;
    }
  }

  .products-right-nav {
    column-gap: 16px;
    li {
      a.active {
        color: ${defaultTheme.color_purple};
      }
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  .product-card-list {
    grid-template-columns: repeat(auto-fill, repeat(290px, auto));
  }

  .product-card {
    padding-left: 0;
    padding-right: 0;
  }
`;

const DescriptionContent = styled.div`
  .content-stylings {
    margin-left: 32px;
    @media (max-width: ${breakpoints.sm}) {
      margin-left: 0;
    }
  }
`;

const ProductListScreen = () => {
    const breadcrumbItems: {label: string, link: string}[] = [
        { label: "Главная", link: "/" },
        { label: "Инжинерные системы", link: "" },
    ];
    // @ts-ignore
    const {filteredProducts} = useSelector(state => state);
    return (
        <div>
            <GlobalStyles />
            <Header/>
            <main className="page-py-spacing">
                <Container>
                    <Breadcrumb items={breadcrumbItems} />
                    <ProductsContent className="grid items-start">
                        <ProductsContentLeft>
                            <ProductFilter />
                        </ProductsContentLeft>
                        <ProductsContentRight>
                            <div className="products-right-top flex items-center justify-between">
                                <h4 className="text-xxl"></h4>
                                <ul className="products-right-nav flex items-center justify-end flex-wrap">
                                    <li>
                                        <Link to="/ing-systems" className="active text-lg font-semibold">
                                            Новое
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ing-systems" className="text-lg font-semibold">
                                            Рекомендации
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ProductList products={filteredProducts} />
                        </ProductsContentRight>
                    </ProductsContent>
                </Container>
                <Section>
                    <Container>
                        <DescriptionContent>
                            <Title titleText={"Об Инжинерных Системах"} />
                            <ContentStylings className="text-base content-stylings">
                                <p>
                                    "ТриоСтройИнжиниринг" — это высококвалифицированная команда из более чем 350 специалистов, работающих на строительном рынке с 2013 года. Мы предлагаем комплексные решения в области управления строительными проектами и широкий спектр строительно-монтажных работ. Наши услуги охватывают все этапы строительства, от проектирования до ввода объектов в эксплуатацию.
                                </p>
                                <p>
                                    Наша география включает Центральный и Южный регионы России, такие как Москва и Московская область, Перми, Сочи, Казань и Красноярский край.
                                </p>
                                <h4>
                                    Направления нашей компании:
                                </h4>
                                <p>
                                    -   Комплексное управление строительством<br/><br/>
                                    -   Обеспечение высокого качества строительства собственными силами<br/><br/>
                                    -   Технический надзор за выполнением работ<br/><br/>
                                    -   Разработка технического задания и проектирование строительных мероприятий<br/><br/>
                                    -   Подбор подрядчиков и специалистов<br/><br/>
                                    -   Получение всех необходимых разрешений и согласований<br/>
                                </p>
                            </ContentStylings>
                        </DescriptionContent>
                    </Container>
                </Section>
            </main>

        </div>
    )
}
export default ProductListScreen