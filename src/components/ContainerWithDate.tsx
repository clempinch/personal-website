import "./ContainerWithDate.css";

interface Props {
  date: string;
}

export const ContainerWithDate: React.FC<Props> = (props) => {
  return (
    <div className="container-with-date">
      <div className="dated-content">{props.children}</div>
      <div className="date">{props.date}</div>
    </div>
  );
};
