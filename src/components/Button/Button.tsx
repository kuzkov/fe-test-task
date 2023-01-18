import cn from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";
import "./Button.scss";

type BaseProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
};

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;

type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps & {
    href: string;
  };

type ButtonProps = ButtonElementProps | AnchorElementProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, rightIcon, leftIcon, ...props }, ref) => {
    const iconClasses = cn("Button__icon", {
      "Button__icon--right": !!rightIcon,
      "Button__icon--left": !!leftIcon,
    });

    const chlidrenWithIcons = (
      <>
        {leftIcon && <span className={iconClasses}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={iconClasses}>{rightIcon}</span>}
      </>
    );

    if ("href" in props) {
      return (
        <a href={props.href} className="Button" ref={ref as any}>
          {chlidrenWithIcons}
        </a>
      );
    }

    return (
      <button ref={ref as any} type={props.type} className="Button">
        {chlidrenWithIcons}
      </button>
    );
  }
);

export default Button;
