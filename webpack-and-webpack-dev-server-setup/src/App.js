import Msg from './Message.js'

(function() {

  document.querySelector("#page").innerText = new Msg().show();
})();
