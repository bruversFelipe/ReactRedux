import React from "react";
import { connect } from "react-redux";
import Card from "antd/lib/card";
import ItemForm from "./Form";
import ListItem from "./ListItem";
import { cadastroItemAction, excluiItensAction } from "../Redux/Itens";

const content = { padding: "24px" };

class App extends React.Component {
  submitForm = values => {
    const { cadastroItemAction } = this.props;
    cadastroItemAction(values.item);
  };

  onDelete = item => {
    const { excluiItensAction } = this.props;
    excluiItensAction(item);
  };

  render() {
    const { items } = this.props;
    return (
      <div style={content}>
        <h1>Combine Reducers in Redux</h1>
        <Card>
          <ItemForm submit={this.submitForm} />
        </Card>
        <br />
        <Card>
          <ListItem dataSource={items} onDelete={this.onDelete} />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.Itens.dataSource
  };
};

export default connect(
  mapStateToProps,
  { cadastroItemAction, excluiItensAction }
)(App);
