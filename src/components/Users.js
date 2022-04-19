import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/counterAction";

const Users = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2>User List</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUsers: state.counterReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
