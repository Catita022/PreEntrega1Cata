
import { app } from "./firebaseConfig";
import {
    getFirestore, collection, getDoc, getDocs, addDoc,  query,
    where, doc
} from 'firebase/firestore'


const db = getFirestore(app);
const collectionDeProductos = collection(db, 'productos');

export function generateProducts() {

    
    fetch('./productos.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.productos.forEach((p) => {
                console.log(p.nombre)
                addDoc(collectionDeProductos, p)
            })
            
        })
        .catch((error) => {
            console.log(error)
        })
   
}

export function getProducts() {
    return getDocs(collectionDeProductos)
        .then((res) => {

            const productos = res.docs.map((doc) => {
                
                const producto = doc.data();
                producto._id = doc.id
                return producto;
            })
            return productos;
        })
        .catch((error) => {
            console.log('error ' + error)
        })

}

export function getProductsByCategory(categoria) {
    const filtro = query(collectionDeProductos, where('categoria', '==', categoria))

    return getDocs(filtro)
        .then((res) => {
            const productos = res.docs.map((doc) => {
                const producto = doc.data()
                producto._id = doc.id
                return producto
            })
            return productos
        })
        .catch((error) => {
            console.log('error' + error)
        })
}




export async function getProductsByIdAsync(id) {

    try {

        const filtro = doc(collectionDeProductos, id)
        const res = await getDoc(filtro)

        const producto = res.data()
        producto._id = res.id
        return producto
    } catch (err) {
        console.log(err)
        return null
    }
}

