// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";

import "./styles.scss";

type HomePageProps = {
  user: Object,
};

class HomePage extends Component<HomePageProps> {
  render() {
    return (
      <Layout>
        <div></div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

const Actions = {};

export default connect(mapStateToProps, Actions)(HomePage);
