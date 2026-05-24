import { initializeApp, setLogLevel } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { log } from "firebase/firestore/pipelines";
import { selectors } from '../modals/selectors.js'

const firebaseConfig = {
  apiKey: "AIzaSyAfiiw0580mq5pEWzC4Zl8pRsrlil4kLkg",
  authDomain: "admin-panel-8c255.firebaseapp.com",
  projectId: "admin-panel-8c255",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let data = []

const loadData = async () => {
    const querySnapshot = await getDocs(collection(db, "content"));
    const contentData = []

    querySnapshot.forEach((doc) => {

    const data = doc.data()
    selectors.dataKey.forEach((item) => {

        const key = item.dataset.key

        if (data[key]) {
            item.innerHTML = data[key]
        }
        selectors.loading.style.opacity = '0'
        setTimeout(()=>{
            selectors.loading.style.display = 'none'
            selectors.body.style.overflow = 'visible'
        }, 600)
    })

    })
}


export default loadData;
