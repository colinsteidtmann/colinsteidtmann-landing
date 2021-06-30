import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = (props) => {
    const { to } = props;
    const history = useHistory();
    return (
        <div className="container-fluid row gx-0 gx-lg-auto">
          <span>
	      <button type="button" className="btn float-start" onClick={() => {history.goBack()}}>
	        <i className="fas fa-chevron-left"></i> Back
	      </button>
	      </span>
    </div>
    );
};

export default BackButton