import classNames from "classnames";

export const Container = ({ children, small = false }) => {
  return (
    <div
      className={classNames("container", {
        small: small,
      })}
    >
      {children}
    </div>
  );
};
