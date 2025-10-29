import {
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSwitch,
  ElSpace,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElUpload,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElPagination,
  ElMessageBox,
  ElNotification,
} from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const components = [
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSwitch,
  ElSpace,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElUpload,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];

// ElTable
const TableProps = ElTable.props;
const TableColumnProps = ElTableColumn.props;
TableProps.border = { type: Boolean, default: false }; // 边框线
// TableProps.stripe = { type: Boolean, default: true } // 斑马纹
TableProps.size = { type: String, default: 'small' }; // 表格内容大小
TableProps.headerRowClassName = { type: String, default: 'table-header-row' }; // 设置row的classname
TableProps.headerCellClassName = { type: String, default: 'table-header-cell' }; // 设置cell的classname
TableColumnProps.align = { type: String, default: 'center' }; // 居中
TableColumnProps.showOverflowTooltip = { type: Boolean, default: true }; // 文本溢出

// ElInput
const ElInputProps = ElInput.props;
ElInputProps.clearable = { type: Boolean, default: true };
ElInputProps.placeholder = { type: String, default: '请输入' };
ElInputProps.maxlength = { type: Number, default: 50 };

// ElSelect
const ElSelectProps = ElSelect.props;
ElSelectProps.clearable = { type: Boolean, default: true };
ElSelectProps.filterable = { type: Boolean, default: true };
ElSelectProps.placeholder = { type: String, default: '请选择' };

// ElDialog
const ElDialogProps = ElDialog.props;
ElDialogProps.closeOnClickModal = { type: Boolean, default: false };
ElDialogProps.width = { type: String, default: '850px' };

// ElDrawer
const ElDrawerProps = ElDrawer.props;
ElDrawerProps.closeOnClickModal = { type: Boolean, default: false };
ElDrawerProps.size = { type: String, default: '400px' };

// ElPagination
const ElPaginationProps = ElPagination.props;
ElPaginationProps.pageSizes = {
  type: Array,
  default: () => {
    return [10, 20, 30, 50];
  },
};
ElPaginationProps.size = { type: Number, default: 10 };
ElPaginationProps.background = { type: Boolean, default: true };
ElPaginationProps.layout = { type: String, default: 'total, sizes, prev, pager, next' };
ElPaginationProps.size = { type: String, default: 'small' };

// ElDate
const ElTimePickerProps = ElTimePicker.props;
const ElDatePickerProps = ElDatePicker.props;
ElTimePickerProps.clearable = { type: Boolean, default: false };
ElDatePickerProps.clearable = { type: Boolean, default: false };

export function setup(app) {
  components.forEach((component) => {
    app.use(component);
  });

  // 全局注册Icon
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  if (window) {
    window.$notify = ElNotification;
    window.$message = ElMessage;
    window.$confirm = (message, title, options) => {
      if (!options.closeOnClickModal) {
        options.closeOnClickModal = false;
      }
      return ElMessageBox.confirm(message, title, options);
    };
    window.$alert = ElMessageBox.alert;
  }
}

// app.use(plugin, options)
// 用途：安装插件（plugin 可以是函数或包含 install 方法的对象）。
// 会调用 plugin(app, options) 或 plugin.install(app, options)。

// app.component(name, component)
// 用途：全局注册单个组件（name 是组件名，component 是组件定义对象/函数）。
// 注册后在任意模板中可直接使用该组件标签。
// 适合单独把某个组件暴露为全局组件（例如 FontAwesomeIcon）。
