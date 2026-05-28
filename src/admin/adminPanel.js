import { selectors } from '../modals/selectors.js'
import { initializeApp, setLogLevel } from "firebase/app";
import { getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { log } from 'firebase/firestore/lite/pipelines';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
};


const adminBlock = selectors.adminBlock
const adminBtnSave = selectors.adminBtnSave

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Header
const headerData = async() =>{
    const docRef = doc(db, 'content', 'header');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)


    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })

}

// About
const aboutData = async() =>{
    const docRef = doc(db, 'content', 'aboutSection');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)


    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}


// offer
const offerData = async() =>{
    const docRef = doc(db, 'content', 'offer');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)

    
    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}

// popular
const popularData = async() =>{
    const docRef = doc(db, 'content', 'popular');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)

    
    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}

// blog 
const blogData = async() =>{
    const docRef = doc(db, 'content', 'blog');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)

    
    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}

// photo
const photoData = async() =>{
    const docRef = doc(db, 'content', 'photo');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)

    
    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}


// feedback
const feedbackData = async() =>{
    const docRef = doc(db, 'content', 'feedBack');
    const docSnap = await getDoc(docRef);
    let сontent = []

    const data = docSnap.data()
    сontent = Object.values(data)
    
    const docId = docRef.id
    const docName = document.createElement('h1')
    docName.textContent = docId
    docName.className = 'admin__block-title'

    const adminText = document.createElement('div')
    adminText.append(docName)
    adminText.className = 'admin__text'
    
    const adminInput = document.createElement('div')
    adminInput.className = 'admin__text-input'
    adminText.append(adminInput)
    adminBlock.prepend(adminText)

    
    let dataArray = Object.entries(data)

    dataArray.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        
        const docInput = document.createElement('input')
        docInput.value += value
        docInput.className = 'admin__block-text'

        adminInput.append(docInput);

        adminBtnSave.addEventListener('click', async ()=> {
            await updateDoc(docRef, {
                [key]: docInput.value
            })
        })
    })
}

feedbackData()
photoData()
blogData()
popularData()
offerData()
aboutData()
headerData()
