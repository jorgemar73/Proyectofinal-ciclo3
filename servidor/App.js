// import { useEffect, useState } from 'react';
//import Tabla from './tabla';


function App() {
  const url ='http://localhost:3000/api/nota-nueva';

  const fetchApi = async() => { await fetch(url, {
        method: 'POST',
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: JSON.stringify({ nombre: 'mauricio', descripcion: 'prueba2', usuarioId:  '12345'})
    })
    // console.log(response.status);
    // const responseJson = await response.json()
    // setNota(responseJson);
    // console.log(responseJson);
    .then(response => response.json())
    .then(response=> {
          console.log(response);
    })}
    
//   .then(data => console.log(data));
//   useEffect(() =>{
//     fetchApi();
//   },[])
  

  return (
    <div className="App">
      <div className="conteiner">
        <div className="row">
          <button onClick= {fetchApi}>Post</button>
          {/* <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0]._id}</div>
          <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].nombre}</div>
          <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].descripcion}</div>
          <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].date}</div> */}
        </div>
      
      </div>
    </div>
  );
}

export default App;


// function App() {
//   const url ='http://localhost:3001/api/nota';
//   const [nota,setNota] = useState();
//   //const [nombre,setnombre]= useState("frank");
// /*
//   fetch(url)
//   .then(response => response.json())
//   .then(nota => console.log(nota))
//   */

//   // const fetchApi = async() => {
//   //   const response = await fetch(url,)
//   //   console.log(response.status);
//   //   const responseJson = await response.json()
//   //   setNota(responseJson);
//   //   console.log(responseJson);

//   // }
//   const fetchApi = async() => {
//     const response = await fetch(url)
//     console.log(response.status);
//     const responseJson = await response.json()
//     setNota(responseJson);
//     console.log(responseJson);

//   }

//   //.then(data => console.log(data));
//   useEffect(() =>{
//     fetchApi();
//   },[])
  

//   return (
//     <div className="App">
//      <div className="conteiner">
//       <div className="row">
//       <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0]._id}</div>
//       <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].nombre}</div>
//       <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].descripcion}</div>
//       <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[0].date}</div>
//       </div>
      
//       </div>
//     </div>
//   );
// }

// export default App;
/*
<div className="conteiner">
      <div className="row">
      <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[2].nombre}</div>
      <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[2].descripcion}</div>
      <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[2].usuario}</div>
      <div className="col-3 btn btn-primary mb-2">{!nota ? 'cargando':nota[2].date}</div>
      <tabla />
      </div>
      
      </div>

const formLogin = document.getElementById('login3')
    const formData = new FormData(formLogin)
    formLogin.addEventListener('submit', event => {
    event.preventDefault()
    fetch('http://localhost:3001/api/signIn', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
    })
  })





     */