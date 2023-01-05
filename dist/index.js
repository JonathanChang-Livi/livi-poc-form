var React = require('react');

var Form = function Form(_ref) {
  var action = _ref.action,
    method = _ref.method,
    children = _ref.children;
  return React.createElement("form", {
    action: action,
    method: method
  }, children);
};
var FormGroup = function FormGroup(_ref2) {
  var children = _ref2.children,
    row = _ref2.row,
    className = _ref2.className,
    override = _ref2.override,
    style = _ref2.style;
  var fgClass = "flex " + (row && row ? 'flex-row' : 'flex-col') + " gap-2";
  return React.createElement("div", {
    className: (override && override ? '' : fgClass) + " " + (className || ''),
    style: style
  }, children);
};
var Input = function Input(_ref3) {
  var type = _ref3.type,
    className = _ref3.className,
    override = _ref3.override,
    style = _ref3.style,
    placeholder = _ref3.placeholder,
    defaultValue = _ref3.defaultValue,
    id = _ref3.id;
  var textClass = "border-primary border rounded-lg p-3";
  return React.createElement("input", {
    className: (override && override ? '' : textClass) + " " + (className || ''),
    style: style,
    placeholder: placeholder,
    id: id,
    name: id,
    value: defaultValue,
    type: type
  });
};
var Label = function Label(_ref4) {
  var children = _ref4.children,
    value = _ref4.value,
    target = _ref4.target,
    className = _ref4.className,
    override = _ref4.override,
    style = _ref4.style;
  var labelClass = "font-semibold text-sm";
  return React.createElement("label", {
    htmlFor: target,
    className: (override && override ? '' : labelClass) + " " + (className || ''),
    style: style
  }, children || value || '');
};

exports.Form = Form;
exports.FormGroup = FormGroup;
exports.Input = Input;
exports.Label = Label;
//# sourceMappingURL=index.js.map
