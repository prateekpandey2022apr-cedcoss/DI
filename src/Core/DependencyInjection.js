import { connect } from "react-redux";
import { combineReducers } from "redux";
import * as _Services from "../Services/Request";

function DependencyInjection(Component) {
  const ComponentWrapper = function ({ ...props }) {
    const di = {
      GET: _Services.GET(),
    };
    return <Component {...props} user={100} di={di} />;
  };

  const mapStateToProps = (state) => {
    return {
      necessaryInfo: state.necessaryInfo,
    };
  };

  return connect(mapStateToProps, {})(ComponentWrapper);
}

export default DependencyInjection;
export { DependencyInjection as DI };
