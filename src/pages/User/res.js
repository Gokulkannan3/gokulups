import React from 'react'

export default function res({variable}) {
  return (
    <div>
            <iframe
                title="PDF Viewer"
                src={`http://172.22.81.182:8080/rfid/getlabel/${variable}`}
                width="100%"
                height="600px"
            >
                This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
        </div>
  )
}
