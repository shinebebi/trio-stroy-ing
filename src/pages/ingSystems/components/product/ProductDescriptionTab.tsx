import { useState } from "react";
import styled from "styled-components";
import { productDescriptionTabHeads } from "../../data/data";
import Title from "../common/Title";
import { ContentStylings } from "../../styles/styles";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const DetailsContent = styled.div`
  margin-top: 60px;
  @media (max-width: ${breakpoints.lg}) {
    margin-top: 40px;
  }

  .details-content-wrapper {
    grid-template-columns: auto 500px;
    gap: 40px;

    @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: auto 400px;
    }

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 100%;
      gap: 24px;
    }
  }
`;

const DescriptionTabsWrapper = styled.div`
  .tabs-heads {
    column-gap: 20px;
    row-gap: 16px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.sm}) {
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    @media (max-width: ${breakpoints.xs}) {
      gap: 12px;
    }
  }

  .tabs-head {
    padding-bottom: 16px;
    position: relative;

    &-active {
      color: ${defaultTheme.color_outerspace};

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        width: 40px;
        height: 1px;
        background-color: ${defaultTheme.color_outerspace};
      }
    }

    @media(max-width: ${breakpoints.sm}){
        padding-bottom: 12px;
    }
  }

  .tabs-badge{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 10px;
    margin-left: 6px;

    &-purple{
        background-color: ${defaultTheme.color_purple};
    }

    &-outerspace{
        background-color: ${defaultTheme.color_outerspace};
    }
  }

  .tabs-contents{
    max-height: 400px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;
    }

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${defaultTheme.color_platinum};
        border-radius: 12px;
    }
  }

  .tabs-content{
    display: none;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.02);

    &.show{
        display: block;
    }

    @media(max-width: ${breakpoints.sm}){
        padding: 12px;
    }
  }
`;

const ProductDescriptionTab = () => {
    const [activeDesTab, setActiveDesTab] = useState(
        productDescriptionTabHeads[0].tabHead
    );

    const handleTabChange = (tabHead: any) => {
        setActiveDesTab(tabHead);
    };
    return (
        <DetailsContent>
            <Title titleText={"Информация о товаре"} />
            <div className="details-content-wrapper grid">
                <DescriptionTabsWrapper>
                    <div className="tabs-heads flex items-center flex-wrap">
                        {productDescriptionTabHeads.map((tab) => {
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className="tabs-head text-gray font-medium text-lg flex items-center"
                                    onClick={() => handleTabChange(tab.tabHead)}
                                >
                  <span
                      className={`${
                          tab.tabHead === activeDesTab ? "text-sea-green" : ""
                      }`}
                  >
                    {tab.tabText}
                  </span>
                                    {tab.badgeValue && (
                                        <span
                                            className={`tabs-badge inline-flex items-center justify-center text-white tabs-badge-${tab.badgeColor}`}
                                        >
                      {tab.badgeValue}
                    </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <div className="tabs-contents">
                        <div
                            className={`tabs-content ${
                                activeDesTab === "tabDescription" ? "show" : ""
                            }`}
                        >
                            <ContentStylings>
                                <p>
                                    Компактная  приточно-вытяжная установка с пластинчатым рекператором  MARSHALL SP-1250 MРE производительностью 1860 м3/ч, 320 Па    со встроенным электрическим нагревателем 12 кВт нагрев от -20 до +40, с угольным фильтром  класса EU3,  Предназначена для подачи  очищенного и  подогретого воздуха в зимний и летний  период в жилые и коммерческие помещения .
                                </p>
                                <h4>Спецификации</h4>
                                <ul>
                                    <li>Эффективность рекуперации до 89%</li>
                                    <li>Класс энергоэффективности - А</li>
                                    <li>Увлажнение приточного воздуха благодаря гидрофильному покрытию мембранного рекуператора</li>
                                    <li>Не требуется отвод конденсата</li>
                                    <li>Компактная конструкция с минимальной высотой от 264 мм</li>
                                    <li>Универсальный монтаж — горизонтальный (стандартно или в перевернутом положении) или вертикальный</li>
                                    <li>Минимальный уровень шума - от 34 дБ(А)</li>
                                    <li>Энергоэффективные 3-скоростные АС-двигатели</li>
                                    <li>Встроенная система автоматики с пультом управления в комплекте</li>
                                    <li>Центролизованое управление внешними опциональными элементами</li>
                                </ul>
                            </ContentStylings>
                        </div>
                        <div
                            className={`tabs-content content-stylings ${
                                activeDesTab === "tabComments" ? "show" : ""
                            }`}
                        >
                            Комментарии пользователей здесь
                        </div>
                        <div
                            className={`tabs-content content-stylings ${
                                activeDesTab === "tabQNA" ? "show" : ""
                            }`}
                        >
                            Часто задаваемые вопросы здесь
                        </div>
                    </div>
                </DescriptionTabsWrapper>
            </div>
        </DetailsContent>
    );
};

export default ProductDescriptionTab;