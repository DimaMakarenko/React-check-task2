import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Squares from "./Squares";

Enzyme.configure({ adapter: new Adapter() });

it("Test for correct props:height and width", () => {
  const props = {
    initialHeight: 4,
    initialWidth: 4
  };

  const newContainer = mount(<Squares {...props} />);
  expect(newContainer.prop("initialHeight")).toEqual(props.initialHeight);
  expect(newContainer.prop("initialWidth")).toEqual(props.initialWidth);
  newContainer.unmount();
});

it("test to add row/column", () => {
  const props = {
    initialHeight: 4,
    initialWidth: 4
  };
  const newContainer = mount(<Squares {...props} />);

  newContainer
    .find(".add_column")
    .first()
    .simulate("click");
  expect(newContainer.state().initialHeight.length).toEqual(
    props.initialHeight + 1
  );

  newContainer
    .find(".add_row")
    .first()
    .simulate("click");
  expect(newContainer.state().initialWidth.length).toEqual(
    props.initialWidth + 1
  );
  newContainer.unmount();
});

it("test to delete row/column", () => {
  const props = {
    initialHeight: 4,
    initialWidth: 4
  };
  const newContainer = mount(<Squares {...props} />);
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });

  newContainer
    .find(".del_column")
    .first()
    .simulate("click");
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  expect(newContainer.state().initialHeight.length).toEqual(
    props.initialHeight - 1
  );

  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  newContainer
    .find(".del_row")
    .first()
    .simulate("click");
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  expect(newContainer.state().initialWidth.length).toEqual(
    props.initialWidth - 1
  );

  newContainer.unmount();
});
it("test to add row/column DOM", () => {
  const props = {
    initialHeight: 4,
    initialWidth: 4
  };
  const newContainer = mount(<Squares {...props} />);

  newContainer
    .find(".add_column")
    .first()
    .simulate("click");
  expect(
    newContainer
      .find("tbody")
      .find("tr")
      .first()
      .children().length
  ).toEqual(props.initialHeight + 1);

  newContainer
    .find(".add_row")
    .first()
    .simulate("click");
  expect(newContainer.find("tbody").children().length).toEqual(
    props.initialWidth + 1
  );
  newContainer.unmount();
});

it("test to not delete last row/column", () => {
  const props = {
    initialHeight: 1,
    initialWidth: 1
  };
  const newContainer = mount(<Squares {...props} />);
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  newContainer
    .find(".del_column")
    .first()
    .simulate("click");
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  expect(newContainer.state().initialHeight.length).toEqual(
    props.initialHeight
  );
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  newContainer
    .find(".del_row")
    .first()
    .simulate("click");
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  expect(newContainer.state().initialWidth.length).toEqual(props.initialWidth);
  newContainer.unmount();
});

it("test to del row/column DOM", () => {
  const props = {
    initialHeight: 4,
    initialWidth: 4
  };
  const newContainer = mount(<Squares {...props} />);
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  newContainer
    .find(".del_column")
    .first()
    .simulate("click");
  expect(
    newContainer
      .find("tbody")
      .find("tr")
      .first()
      .children().length
  ).toEqual(props.initialHeight - 1);

  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  newContainer
    .find(".del_row")
    .first()
    .simulate("click");
  newContainer.setState({
    hideBtnCol: "del_btn_col",
    hideBtnRow: "del_btn_row"
  });
  expect(newContainer.find("tbody").children().length).toEqual(
    props.initialWidth - 1
  );
  newContainer.unmount();
});
