import dialog from '../dist/dialog.min.js';

var showDialogDom = document.getElementById('j_showDialog');

showDialogDom.addEventListener('click', function () {
  dialog.show({
    title: '这是标题',
    content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    cancelCb: function () {
      alert('点击取消');
    },
    confirmCb: function () {
      dialog.hide();
    }
  });
});