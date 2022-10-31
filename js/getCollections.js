/// firestore init

  import { initializeApp }
    from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js'

  import { getFirestore, collection,  getDocs }
    from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js'

  const firebaseConfig = {
    apiKey: "AIzaSyA8iNFJmvZUymc2nybinXIX7CQCVQ1XYpc",
    authDomain: "pugjs-1dd3d.firebaseapp.com",
    projectId: "pugjs-1dd3d",
    storageBucket: "pugjs-1dd3d.appspot.com",
    messagingSenderId: "869334856470",
    appId: "1:869334856470:web:030887cfe7e660188b1637"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)


//
/// get aym shops

  export let studios = []
  let snapshot = await getDocs(collection(db, "studios"))
    snapshot.forEach((studio) => {
    studios.push({ ...studio.data(), id: studio.id })
  })

  export let aymShops = []
  snapshot = await getDocs(collection(db, "aymShops"))
  snapshot.forEach((shop) => {
    let studio = studios.filter(stud => stud.id == shop.data().location)[0]
    aymShops.push({ ...shop.data(), id: shop.id, studio: studio })
  })

  console.table(aymShops)
  console.log(aymShops[0].studio.mapRef)


//
/// maybe

  // // get nth doc - 0 here - or it it id?
  // const NdocRef = doc(db, 'yogaWorkshops', '0')
  // const snapper = await(getDoc(NdocRef))
  // if (snapper.exists()) {
  //   // console.log("Document data:", snapper.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  // // do a query on derek
  // const newQ = query(collection(db, 'yogaWorkshops'), where('location', '==', 'derek'));
  // const querySnapshot = await getDocs(newQ);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   // console.log(doc.id, " => ", doc.data());
  // });
