// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// (Immediately Invoked Function Expression)
// 我們會傳入 'window' 物件，確保我們可以公開變數到全域 (Global) 作用域。
(function (window) { 

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
var helloSpeaker = {}; // <-- 創建 helloSpeaker 物件

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
helloSpeaker.speak = function (name) { // <-- 將 speak 函式作為方法附加到 helloSpeaker 上
  console.log(speakWord + " " + name);
};

// 原始程式碼中的 function speak(name) { ... } 將被移除或替換。

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
window.helloSpeaker = helloSpeaker; // <-- 將 helloSpeaker 公開到全域 window 物件上

})(window);