import { TitleWrapper } from "../../styles/styles";
interface ITitle {
    titleText: string
}
const Title: React.FC<ITitle> = ({ titleText }) => {
  return (
    <TitleWrapper className="title">
      <h3>{titleText}</h3>
    </TitleWrapper>
  );
};

export default Title;

