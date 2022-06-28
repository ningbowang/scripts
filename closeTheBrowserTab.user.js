// ==UserScript==
// @name        鼠标中键点击页面关闭标签页(Middle mouse button click on the page to close the tab)
// @author      Arden
// @namespace   Violentmonkey Scripts
// @match        *://*/*
// @grant       none
// @version     1.0.0
// @author      Arden
// @description 2022/6/27 15:32:38
// @license     GNU Lesser General Public License v2.1
// ==/UserScript==
(function(){
  document.querySelector('html').addEventListener('mousedown', e => {
  // console.log(e.button);
  let mouseBtn = e.button
  if (mouseBtn == 1) {
    e.preventDefault(); //阻止中键滚动，参考：https://chrome.google.com/webstore/detail/no-auto-scroll/oeplmakppkomhkgoaieajhcbfogjhmdi/related
    e.stopPropagation() //阻止冒泡，好像没什么用
    
    // window.close()只能关自己打开的窗口，所以才这样写
    // 参考：https://blog.51cto.com/humorchen/3020014
    window.opener = null;
    window.open('', '_self', '');
    window.close();//以上三行可关闭单个页面
    window.open('', '_top');
    window.top.close();
    window.location.href = 'about:blank ';
    window.close();//上面两次关闭适用于FireFox等浏览器
  }
})
})()
