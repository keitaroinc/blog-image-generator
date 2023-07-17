type AddGradinetPops = {
  onClick: any;
};

export const AddGradient: React.FC<AddGradinetPops> = ({ onClick }) => {
  return (
    <button
      className="btn btn-success"
      onClick={onClick}
      id="addGradient"
      data-testid="addGradient"
      title="Add Gradient"
    >
      <i className="bi bi-plus"></i>
    </button>
  );
};
