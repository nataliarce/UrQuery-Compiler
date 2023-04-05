import React, { useEffect, useState } from 'react'

export const DocumentArea = (props) => {

  const [data, setData] = useState(null);
  const [fetchDataDocument, setFetchDocument] = useState(false);
  var id = 0;

  /*const[document, setDocument] = useState([]);
  
  const cargarDocuments = () =>
  {
  
  }*/
  
  useEffect(() => {

     if (fetchDataDocument) {
      fetch(`http://localhost:8080/document/${id}`)
      .then((response) => response.text())
      .then((data) => setData(data))
        .then(id => id++)
      .catch((err) => {
        alert(err.message)
      })
      
   }
  }, [fetchDataDocument]);
  console.log(data);

  return (
    <div className='box'>
        <h4>Document Area</h4>
        <section>
        <div>
          <textarea className='' disabled  cols='50' rows='15' value={data == null ? '' : data}>
          </textarea>
          
          <button onClick={() => setFetchDocument(true)}>Document</button>
        </div>
        <div>

        </div>
        </section>
    </div>
  )
}


