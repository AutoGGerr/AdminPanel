import { initializeApp, setLogLevel } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { log } from "firebase/firestore/pipelines";
import { selectors } from '../modals/selectors.js'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
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
