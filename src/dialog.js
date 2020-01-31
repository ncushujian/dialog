/**
 * dialog.js 弹窗组件，提供“确认”“取消”按钮的对话框
 * 
 * @param {object} options 配置项
 * @param {string} options.title 自定义弹窗标题
 * @param {string} options.content 自定义弹窗内容
 * @param {string} options.cancel 自定义取消按钮文本内容
 * @param {string} options.confirm 自定义确认按钮文本内容
 * @param {Function} options.cancelCb 点击取消按钮执行的回调函数，自动关闭弹窗
 * @param {Function} options.confirmCb 点击确认按钮执行的回调函数，不会自动关闭弹窗，需要调用`dialog.hide();`进行关闭
 * 
 * @example
 * // 显示弹窗
 * dialog.show({
 *   title: '这是标题',
 *   content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
 *   cancel: '取消',
 *   confirm: '确定',
 *   cancelCb: function () {
 *     console.log('点击取消按钮执行回调');
 *   },
 *   confirmCb: function () {
 *     console.log('点击确定按钮执行回调');
 *     dialog.hide();
 *   }
 * });
 * 
 * // 关闭弹窗
 * dialog.hide();
 */

import './dialog.css';

var wrapDom = document.createElement('div');
wrapDom.className = 'dialog_wrap';
wrapDom.innerHTML = '<div class="dialog_animate" id="j_dialogAnimate"><div class="dialog_panel" id="j_dialogPanel"></div></div>';
document.body.appendChild(wrapDom);

var animateDom = document.getElementById('j_dialogAnimate');
var panelDom = document.getElementById('j_dialogPanel');

animateDom.addEventListener('webkitAnimationEnd', function (e) {
  if (e.animationName === 'dialog_leave') {
    wrapDom.style.display = 'none';
  }
});

var dialog = {
  confirmCb: null,
  cancelCb: null,
  show: function (opt) {
    var tpl = 
      '<p class="dialog_title">' + (opt.title ? opt.title : '') + '</p>' +
      '<p class="dialog_content">' + (opt.content ? opt.content : '') + '</p>' +
      '<div class="btn_group">' +
        '<button class="btn_cancel">' + (opt.cancel ? opt.cancel : '取消') + '</button>' +
        '<button class="btn_confirm">' + (opt.confirm ? opt.confirm : '确定') + '</button>' +
      '</div>';
    panelDom.innerHTML = tpl;
    this.confirmCb = opt.confirmCb;
    this.cancelCb = opt.cancelCb;
    wrapDom.style.display = 'block';
    animateDom.className = 'dialog_animate enter';
  },
  hide: function () {
    animateDom.className = 'dialog_animate leave';
  }
};

// 记录较快触发的事件
var fastEvent = '';

var handleClick = function (e) {
  var handleFn = function () {
    var className = e.target.className;
    if (className === 'btn_cancel') {
      dialog.hide();
      dialog.cancelCb && dialog.cancelCb();
    }
    if (className === 'btn_confirm') {
      dialog.confirmCb();
    }
  }
  !fastEvent && (fastEvent = e.type);
  if (fastEvent === e.type) handleFn();
}

panelDom.addEventListener('tap', handleClick);
panelDom.addEventListener('click', handleClick);

export default dialog;