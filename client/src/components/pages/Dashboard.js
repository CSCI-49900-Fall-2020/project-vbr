import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
// import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ auth: { user } }) => {
  return (
    <>
      <Spinner />
      <h1 className="large text-primary">Welcome to the DashBoard!</h1>
    </>
  );
};

Dashboard.propTypes = {
  //   getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  //   profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  //   profile: state.profile,
});

export default connect(mapStateToProps)(Dashboard);
