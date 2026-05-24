import { selectors } from '../modals/selectors.js'
import { initializeApp, setLogLevel } from "firebase/app";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { log } from 'firebase/firestore/lite/pipelines';

const firebaseConfig = {
  apiKey: "AIzaSyAfiiw0580mq5pEWzC4Zl8pRsrlil4kLkg",
  authDomain: "admin-panel-8c255.firebaseapp.com",
  projectId: "admin-panel-8c255",
};
const adminText = selectors.adminText

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const loadData = async() =>{
    const docRef = doc(db, 'content', 'header');
    const docSnap = await getDoc(docRef);
    let headerContent = []

    const data = docSnap.data()
    headerContent = Object.values(data)

    headerContent.forEach((item)=> {
        const div = document.createElement('div')


        div.innerHTML += item
        div.className = 'admin__block-text'
        adminText.append(div);
    })
}
loadData()

