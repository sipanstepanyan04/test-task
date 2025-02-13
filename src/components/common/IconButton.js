export const IconButton = ({ iconName, ...props }) => {
  return (
    <button {...props} className="btn sm icon-btn">
      <i className={iconName} />
    </button>
  );
};
