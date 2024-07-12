import { useState } from "react";
import {
  ColorsFilter,
  FilterTitle,
  FilterWrap,
  PriceFilter,
  ProductCategoryFilter,
  SizesFilter,
  StyleFilter,
} from "../../styles/filter";
import {useDispatch, useSelector} from "react-redux";
import { ProductFilterList, StyleFilterList } from "../../data/data";
import { staticImages } from "../../utils/images";
import { connect } from 'react-redux';
import { setProducts, filterProducts } from '../../data/actions';
import store from '../../data/store';
import style from '../../../../components/contact/contact.module.css'


const ProductFilter = () => {
  const dispatch = useDispatch()
  const [isProductFilterOpen, setProductFilterOpen] = useState(true);
  const [isPriceFilterOpen, setPriceFilterOpen] = useState(true);

  const toggleFilter = (filter: any) => {
    switch (filter) {
      case "product":
        setProductFilterOpen(!isProductFilterOpen);
        break;
      case "price":
        setPriceFilterOpen(!isPriceFilterOpen);
        break;
      default:
        break;
    }
  };

  const rangeMin = 100;
  const [minRange, setMinRange] = useState(300);
  const [maxRange, setMaxRange] = useState(700);

  const handleInputChange = (e: any) => {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);

    if (inputName === "min") {
      setMinRange(inputValue);
      if (maxRange - inputValue < rangeMin) {
        setMaxRange(inputValue + rangeMin);
      }
    } else if (inputName === "max") {
      setMaxRange(inputValue);
      if (inputValue - minRange < rangeMin) {
        setMinRange(inputValue - rangeMin);
      }
    }
  };



  const handleFilterClick = (filterId: any) => {
    dispatch(filterProducts(filterId));
  };

  const handleFilterClean = () => {
    dispatch(setProducts());
  };



  const calculateRangePosition = (value: any, max: any) => {
    return (value / max) * 100 + "%";
  };

  return (
    <>
      <ProductCategoryFilter>
        <FilterTitle
          className="filter-title flex items-center justify-between"
          onClick={() => toggleFilter("product")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Категории
          </p>
          <span
            className={`text-gray text-xxl filter-title-icon ${
              !isProductFilterOpen ? "rotate" : ""
            }`}
          >
            <i className="bi bi-filter"></i>
          </span>
        </FilterTitle>
        <FilterWrap className={`${!isProductFilterOpen ? "hide" : "show"}`}>
          {ProductFilterList?.map((productFilter) => {
            return (
              <div className="product-filter-item" key={productFilter.id}>
                <button
                  type="button"
                  className="filter-item-head w-full flex items-center justify-between" onClick={() => handleFilterClick(productFilter.id)}
                >
                  <span className="filter-head-title text-base text-gray font-semibold">
                    {productFilter.title}
                  </span>
                  <span className="filter-head-icon text-gray">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </button>
              </div>
            );
          })}
        </FilterWrap>
      </ProductCategoryFilter>

      <PriceFilter>
        <FilterTitle
          className="filter-title flex items-center justify-between"
          onClick={() => toggleFilter("price")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Цена
          </p>
          <span
            className={`text-gray text-xl filter-title-icon ${
              !isPriceFilterOpen ? "rotate" : ""
            }`}
          >
            <i className="bi bi-chevron-up"></i>
          </span>
        </FilterTitle>
        <FilterWrap
          className={`range filter-wrap ${
            !isPriceFilterOpen ? "hide" : "show"
          }`}
        >
          <div className="range-slider">
            <span
              className="range-selected h-full"
              style={{
                left: calculateRangePosition(minRange, 1000),
                right: calculateRangePosition(1000 - maxRange, 1000),
                backgroundColor: '#3B41DF'
              }}
            ></span>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="min w-full"
              min="0"
              max="1000"
              value={minRange}
              step="10"
              name="min"
              onChange={handleInputChange}
            />
            <input
              type="range"
              className="min w-full"
              min="0"
              max="1000"
              value={maxRange}
              step="10"
              name="max"
              onChange={handleInputChange}
            />
          </div>
          <div className="range-price w-full flex items-center">
            <input
              type="number"
              className="text-center"
              name="min"
              value={minRange}
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="text-center"
              name="max"
              value={maxRange}
              onChange={handleInputChange}
            />
          </div>
        </FilterWrap>
      </PriceFilter>
      <button className={style.sendMessageBtn} style={{marginBottom: '20px', alignSelf: 'center', justifySelf: 'center', marginLeft: '60px'}} onClick={() => handleFilterClean()}>Очистить фильтр</button>
    </>
  );
};
const mapStateToProps = (state:any) => {
  return {
    products: state.products,
    filteredProducts: state.filteredProducts,
    activeFilter: state.activeFilter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setProducts: (products: any) => dispatch(setProducts()),
    filterProducts: (filterId: any) => dispatch(filterProducts(filterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);

