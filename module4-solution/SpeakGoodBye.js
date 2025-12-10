// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// (Immediately Invoked Function Expression)
(function (window) { // <-- STEP 6: 包裹 IIFE，並傳入 window 

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
var byeSpeaker = {}; // <-- STEP 7: 創建 byeSpeaker 物件

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye"; // 保持 Good Bye

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
byeSpeaker.speak = function (name) { // <-- STEP 8: 將 speak 函式作為方法附加到 byeSpeaker 上
  console.log(speakWord + " " + name);
};

// 原始程式碼中的 function speak(name) { ... } 將被移除或替換。

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
window.byeSpeaker = byeSpeaker; // <-- STEP 9: 將 byeSpeaker 公開到全域 window 物件上

})(window);