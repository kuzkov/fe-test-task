import { ChangeEventHandler, ReactNode } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  checked?: boolean | undefined;
  onChange?: ChangeEventHandler;
  children?: ReactNode;
  name?: string;
};

function Checkbox({ checked, onChange, name, children }: CheckboxProps) {
  return (
    <label className="Checkbox">
      <input
        type="checkbox"
        className="Checkbox__input"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <div aria-hidden className="Checkbox__box">
        <div className="Checkbox__indicator" />
      </div>
      {children}
    </label>
  );
}

export default Checkbox;
