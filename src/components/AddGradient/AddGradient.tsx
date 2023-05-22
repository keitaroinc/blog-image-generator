import plusIcon from "../../assets/svg/plus.svg";

type AddGradinetPops = {
  onClick: any;
};

export const AddGradient: React.FC<AddGradinetPops> = ({ onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick} data-testid="add-gradient-button">
      <img src={plusIcon} alt="add-gradient" />
    </button>
  );
};
