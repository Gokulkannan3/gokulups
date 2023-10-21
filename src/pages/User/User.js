import React, { useState } from 'react';
import Navbar from '../Nav';
import ReactModal from 'react-modal';
import  Axios  from 'axios';
/* import Res from './res'; */
/* import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; */

function User() {
  const [variable, setVariable] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const url ="http://172.22.81.182:8080/rfid/registerproduct"
  /* const [pdfData, setPdfData] = useState(null); */
/*   function onDocumentLoadSuccess({ numPages }) {
    console.log(`Document loaded: ${numPages} pages`);
  } */
  function openModal() {
    setModalIsOpen(true); // Function to open the modal
  }

  function closeModal() {
    setModalIsOpen(false); // Function to close the modal
  }

  const [formData, setFormData] = useState({
    origin_data: '',
    destination_data: '',
    dimensions: '',
    sender_data: '',
    receiver_data: '',
    sender_phone: '',
    receiver_phone: '',
    product_details: '',
  });

  function submit(e){
    e.preventDefault();
    Axios.post(url,formData)
    .then((response) => {
      console.log(response.data);
      setVariable(response.data);
      openModal(); 
      // Handle the response from the backend
    })
    .catch((error) => {
      console.error("Error while sending data:", error);
    });
    }

  function handle(e){
    const newdata={...formData}
    newdata[e.target.id]=e.target.value
    setFormData(newdata)
    console.log(newdata)
  }

  return (
    <div>
      <Navbar />
      <div>
      <h1 className='text-5xl flex justify-center mb-5'>CUSTOMER DETAILS</h1>
        <form
          className='flex justify-center items-center flex-col'
          onSubmit={(e)=>submit(e)}
        >
         
          <input
            type="text"
            id='origin_data'
            name='origin_data'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.origin_data}
          />
          <input
            type="text"
            name='destination_data'
            id='destination_data'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.destination_data}
          />
          <input
            type="number"
            id='dimensions'
            name='dimensions'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.dimensions}
          />
          <input
            type="text"
            id='sender_data'
            name='sender_data'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.sender_data}
          />
          <input
            type="text"
            id='receiver_data'
            name='receiver_data'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.receiver_data}
          />
          <input
            type="number"
            id='sender_phone'
            name='sender_phone'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.sender_phone}
          />
          <input
            type="number"
            id='receiver_phone'
            name='receiver_phone'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.receiver_phone}
          />
          <input
            type="text"
            id='product_details'
            name='product_details'
            placeholder='  First and Lastname'
            className='border border-black rounded-sm h-14 w-96'
            onChange={(e)=>handle(e)}
            value={formData.product_details}
          />
          
          <button type='submit'>Submit</button>
          {/* {pdfData && (
          <div>
          <Document
            file={{ data: pdfData }}
            onLoadSuccess={onDocumentLoadSuccess}
            onError={e => console.error('Error while loading PDF:', e)}
            >
            <Page pageNumber={1} />
            </Document>
                    </div>
        )} */}
        </form>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='PDF Viewer Modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '1000px',
            },
          }}
        >
          <iframe
            title='PDF Viewer'
            src={`http://172.22.81.182:8080/rfid/getlabel/${variable}`}
            width='100%'
            height='600px'
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
          <button onClick={closeModal}>Close Modal</button>
        </ReactModal>
        
      </div>
    </div>
  );
}

export default User;
