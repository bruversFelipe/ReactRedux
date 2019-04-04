import React from "react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const footer = { display: "flex", justifyContent: "flex-end" };

const ItemForm = ({ form, submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submit(values);
        form.resetFields();
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator("item", {
          rules: [{ required: true, message: "Required!" }]
        })(<Input placeholder="Item" />)}
      </Form.Item>
      <div style={footer}>
        <Button icon="save" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default Form.create()(ItemForm);
