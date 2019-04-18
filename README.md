Html Add Loading For IFrame From Parent Window Demo
===================================================

当页面中有iframe，我们从外部页面触发了iframe的reload时，希望能在reload期间显示一个
loading的遮罩，有一种做法是从外部找到iframe的container，给它增加一个临时的loading遮罩，
同时设置iframe的onload，在成功之后去掉loading遮罩。

```
npm install
npm run demo
```

然后点击"Trigger IFrame"按钮看效果
