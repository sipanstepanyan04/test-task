import classNames from "classnames";

export const Button = ({ children, uppercase = true, ...props }) => {
  return (
    <button
      className={classNames("btn", {
        "text-uppercase": uppercase,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
