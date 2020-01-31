## dialog
通用对话框组件

**注意**  
1. 由于此组件使用了`document.body`方法，所以必须在\<body\>标签内引用此组件，否则会出现报错；

## 安装
```javascript
npm install qt-dialog
```

## 基本用法
```javascript
import dialog from 'qt-dialog';

/** 显示 Dialog */
dialog.show({
  title: '这是标题',
  content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
  cancelCb: function () {
    alert('点击取消');
  },
  confirmCb: function () {
    alert('点击确定');
    dialog.hide();
  }
});
/** 关闭 Dialog */
dialog.hide();
```

## API
**dialog.show(Object object);**
> 显示 dialog ，Object 为必传参数

属性 | 类型 | 默认值 | 是否必填 | 说明  
-|-|-|-|-|
title | String | '' | 否 | 自定义弹窗标题
content | String | '' | 否 | 自定义弹窗内容
cancel | String | '取消' | 否 | 自定义取消按钮文本内容
confirm | String | '确定' | 否 | 自定义确认按钮文本内容
cancelCb | Function | null | 否 | 点击取消按钮执行的回调函数，自动关闭弹窗
confirmCb | Function | null | 是 | 点击确认按钮执行的回调函数，不会自动关闭弹窗，需要调用`dialog.hide();`进行关闭

**dialog.hide();**
> 隐藏 dialog
