import React from "react";
import List from "antd/lib/list";
import Button from "antd/lib/button";

const listStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const ListItem = ({ dataSource, onDelete }) => {
  return (
    <List
      header="Items:"
      bordered
      dataSource={dataSource}
      renderItem={item => (
        <List.Item key={item.key} style={listStyle}>
          {item.title}
          <Button type="danger" onClick={() => onDelete(item.key)}>
            Delete
          </Button>
        </List.Item>
      )}
    />
  );
};

export default ListItem;
