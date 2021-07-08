import { Component } from "react";

export function concatComponents(Component1, Component2) {
  return class WrappedComponent extends Component {
    render() {
      const { laPropsDuHoc, ...otherProps } = this.props;
      return (
        <div className="WrappedComponent">
          <Component1 {...otherProps} />
          <Component2 {...otherProps} />
        </div>
      );
    }
  };
}
