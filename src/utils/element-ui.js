import {
  Loading,
  Tabs,
  TabPane,
  Steps,
  Step,
  Table,
  TableColumn,
  Container,
  MenuItem,
  DropdownMenu,
  Dropdown,
  Aside,
  Row,
  Col,
  Main,
  Menu,
  Submenu,
  DropdownItem,
  Header,
  Button,
  CheckboxGroup,
  RadioGroup,
  Radio,
  RadioButton,
  Checkbox,
  CheckboxButton,
  Message,
  Dialog,
  Cascader,
  Collapse,
  CollapseItem,
  Select,
  Option,
  DatePicker,
  Tree,
  Switch,
  Upload,
  Popover,
  Link,
  Divider,
  Timeline,
  TimelineItem,
  Tooltip,
  Form,
  FormItem,
  Input,
  Pagination,
} from 'element-ui';

export default {
  install(V) {
    V.use(Loading);
    V.use(Tabs);
    V.use(TabPane);
    V.use(Steps);
    V.use(Step);
    V.use(Table);
    V.use(TableColumn);
    V.use(Container);
    V.use(MenuItem);
    V.use(DropdownMenu);
    V.use(Dropdown);
    V.use(Aside);
    V.use(Row);
    V.use(Col);
    V.use(Main);
    V.use(Menu);
    V.use(Submenu);
    V.use(DropdownItem);
    V.use(Header);
    V.use(Button);
    V.use(CheckboxGroup);
    V.use(RadioGroup);
    V.use(Radio);
    V.use(RadioButton);
    V.use(CheckboxGroup);
    V.use(Dialog);
    V.use(Cascader);
    V.use(Collapse);
    V.use(CollapseItem);
    V.use(Checkbox);
    V.use(Select);
    V.use(Option);
    V.use(DatePicker);
    V.use(Tree);
    V.use(Switch);
    V.use(Upload);
    V.use(Popover);
    V.use(Link);
    V.use(Divider);
    V.use(Timeline);
    V.use(TimelineItem);
    V.use(CheckboxButton);
    V.use(Tooltip);
    V.use(Form);
    V.use(FormItem);
    V.use(Input);
    V.use(Pagination);
    V.prototype.$message = Message;
  },
};
