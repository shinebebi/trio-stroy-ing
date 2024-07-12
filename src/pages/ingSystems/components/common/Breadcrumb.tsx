import styled from "styled-components";
import { Link } from "react-router-dom";
import { defaultTheme } from "../../styles/themes/default";

const BreadcrumbWrapper = styled.nav`
  margin-bottom: 24px;

  .breadcrumb-separator {
    margin-left: 8px;
    margin-right: 8px;
  }

  .breadcrumb-item {
    transition: ${defaultTheme.default_transition};
    &:hover {
      color: ${defaultTheme.color_outerspace};
    }
  }
`;

interface IBreadcrumbItem {
    item: {label: string, link: string},
    isLast: boolean
}

interface IBreadcrumb {
    items: {label: string, link: string}[]
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ items }) => {
    return (
        <BreadcrumbWrapper className="flex items-center flex-wrap">
            {items?.map((item: any, index: any) => (
                <BreadcrumbItem
                    key={index}
                    item={item}
                    isLast={items.length - 1 === index}
                />
            ))}
        </BreadcrumbWrapper>
    );
};



const BreadcrumbItem: React.FC<IBreadcrumbItem> = ({ item, isLast }) => {
    return (
        <>
            <Link
                to={item.link}
                className={`breadcrumb-item text-base ${
                    isLast ? "text-outerspace font-semibold" : "text-gray font-medium"
                }`}
            >
                {item.label}
            </Link>
            {!isLast && (
                <span className="breadcrumb-separator inline-flex text-xs">
          <i className="bi bi-chevron-right"></i>
        </span>
            )}
        </>
    );
};
export default Breadcrumb;