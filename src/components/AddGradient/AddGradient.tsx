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
    >
      <i className="bi bi-plus" title="Add Gradient"></i>
    </button>
  );
};
