import Vue from "vue";
import {
  Pagination, // 分页
  Dialog, // 模态框
  Menu, // 菜单
  Submenu, // 菜单
  MenuItem, // 菜单项
  MenuItemGroup, // 菜单项组
  Input, // 输入框
  InputNumber, // number 输入框
  Radio, // 单选框
  RadioGroup, // 单选框组
  Checkbox, // 多选框
  CheckboxGroup, // 多选框组
  Switch, // 开关
  Select, // 选择器
  Option, // 选择器 item
  OptionGroup, // 选择器组
  Button, // 按钮
  ButtonGroup, // 按钮组
  Table, // 表格
  TableColumn, // 列
  DatePicker, // 日期选择器
  Popover, // 弹出框
  Tooltip, // 文字提示
  Breadcrumb, // 面包屑
  BreadcrumbItem, // 面包屑
  Form, // 表单
  FormItem, // 表单项
  Tabs, // 标签页
  TabPane, // 标签页
  Tag, // 标签
  Tree, // 树
  Icon, // icon
  Row, // 行
  Col, // 列
  Upload, // 上传
  Progress, // 进度条
  Card, // 卡片
  Carousel, // 走马灯
  CarouselItem, // 走马灯 item
  Cascader, // 级联选择器
  Transfer, // 穿梭框
  Container, // 容器
  Header, // 头
  Aside, // left
  Main, // main
  Loading, // 加载中
  MessageBox, // 提示
  Message, // 提示
  Image, // 图片
  Scrollbar, // 滚动条
} from "element-ui";

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Cascader);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Image);
Vue.use(Scrollbar);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.prototype.$message = function (o) {
  Message.closeAll();
  o.duration = 2000;
  Message(o);
};
Vue.prototype.$message.error = o => {
  Message.closeAll();
  Message.error({
    message: o,
    duration: 1000,
  });
};
Vue.prototype.$message.info = o => {
  Message.closeAll();
  Message.info({
    message: o,
    duration: 1000,
  });
};
Vue.prototype.$message.success = o => {
  Message.closeAll();
  Message.success({
    message: o,
    duration: 1000,
  });
};
Vue.prototype.$message.warning = o => {
  Message.closeAll();
  Message.warning(o);
};
