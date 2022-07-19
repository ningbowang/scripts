// ==UserScript==
// @name        鼠标中键点击页面关闭标签页(Middle mouse button click on the page to close the tab)
// @author      Arden
// @namespace   Violentmonkey Scripts
// @match        *://*/*
// @grant       none
// @version     1.0.0
// @author      Arden
// @description 2022/6/27 15:32:38
// @license     MIT
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

// // ==UserScript==
// // @name        右键双击关闭标签页
// // @author      Arden
// // @namespace   Violentmonkey Scripts
// // @match       *://*/*
// // @run-at      document-start
// // @grant       none
// // @version     1.0.0
// // @author      Arden
// // @description 2022/7/10 12:34:19
// // ==/UserScript==
// // mode = 1 单机中键关闭当前标签页；
// // mode = 2 双击右键关闭当前标签页
// const mode = 2
// function closeCurrentTab() {
//   // console.log('关闭当前标签页')
//   window.opener = null
//   window.open('', '_self', '')
//   window.close()
//   window.open('', '_top')
//   window.top.close()
//   window.location.href = 'about:blank '
//   window.close()
// }
// const middleMouseButton = () => {
//   document.querySelector('html').addEventListener('mousedown', e => {
//     // console.log(e.button);
//     let mouseBtn = e.button
//     if (mouseBtn == 1) {  //左键是0，中键是1，右键是2
//       e.preventDefault();
//       e.stopPropagation()
//       closeCurrentTab()
//     }
//   })
// }
// const rightMouseButton = () => {
//   let clickTimes = 0
//   let clickTimeoutId

//   const mousedownPoint = {
//     x: 0,
//     y: 0,
//   }


//   document.addEventListener('mousedown', e => {
//     mousedownPoint.x = e.clientX
//     mousedownPoint.y = e.clientY
//   })

//   document.addEventListener('contextmenu', e => {
//     e.preventDefault()
//     e.stopPropagation()
//     // window.clearTimeout(clickTimeoutId)

//     if (mousedownPoint.x !== e.clientX || mousedownPoint.y !== e.clientY) {
//       // console.log('本次和上次右键位置不一样')
//       clickTimes = 0
//       return
//     }

//     clickTimes += 1
//     // console.log('位置一样，当前已点击次数', clickTimes)

//     if (clickTimes === 2) {
//       closeCurrentTab()
//       clickTimes = 0
//     } else {
//       clickTimeoutId = window.setTimeout(() => {
//         // console.log('500ms 内没有点击，重置连击次数')
//         clickTimes = 0
//       }, 500)
//     }
//   })
// }
// switch (mode) {
//   case 1:
//     middleMouseButton()
//     break
//   case 2:
//     rightMouseButton()
//     break
// } 


