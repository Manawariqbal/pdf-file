import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css'

class App extends React.Component{
  state = {
    name: 'Manawar Iqbal',
    
 }
 handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
 createAndDownloadPdf = () => {
  axios.post('/create-pdf', this.state)
  .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
  .then((res) => { 
    const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
    saveAs(pdfBlob, 'generatedDocument.pdf')
  })
  
}
  render(){
  return (
    <div className="App">
      <h2>Enter your name to generate pdf</h2>
      <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
      <button className="btn" onClick={this.createAndDownloadPdf}><i class="fa fa-download"></i>Download PDF</button>
    </div>
  );
}
}

export default App;
