import burgers  from './modals/modals.js'
import optionSend from './modals/formOption.js'
import loadData from './admin/firestore.js'

loadData()
optionSend()
burgers()


window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});
