export const TextField = ({ adornment, ...props }) => {
  return (
    <div className="form-control">
      <input className="text-field" {...props} />
      {adornment}
    </div>
  );
};
