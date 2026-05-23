import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { log } from "firebase/firestore/pipelines";
import content from './admin/content.js'
import { selectors } from './modals/selectors.js'

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
            item.textContent = data[key]
        }

    })

    })
}


export default loadData;
