import './App.css';
import React, { useState }  from 'react';
import Headroom from 'react-headroom';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Header, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
  

function App() {
  const [open, setOpen] = useState(false)
  const countryOptions = [
    {
      key: 1,
      text: 'Kulina',
      value: 'Kulina',
      content: (
        <Header icon={{ className: 'custom-icon' }} content='Kulina' subheader='Jalan Tulodong Atas 28, Senayan, Kebayoran Baru' />
      ),
    },
    {
      key: 2,
      text: 'Pancoran Riverside Apartement',
      value: 'Pancoran Riverside Apartement',
      content: (
        <Header
          icon={{ className: 'custom-icon' }}
          content='Pancoran Riverside Apartement'
          subheader='RT 6/RW 1, Pengadegan, Pancoran, South Jakarta'
        />
      ),
    },
    {
      key: 3,
      text: 'Jalan Tulodong Atas 28',
      value:'Jalan Tulodong Atas 28',
      content: (
        <Header icon={{ className: 'custom-icon' }} content='Jalan Tulodong Atas 28' subheader='Jalan Tulodong Atas 28, Senayan, Kebayoran Baru' />
      ),
    },
    {
      key: 4,
      text: 'Block 71 Jakarta',
      value: 'Block 71 Jakarta',
      content: (
        <Header icon={{ className: 'custom-icon' }} content='Block 71 Jakarta' subheader='Ariobimo Sentral, South Jakarta, RT 9/RW 4, East Jakarta' />
      ),
    },
  ]
const getVal = (event, {value}) => {
  let addr = value;
  let element = <p>{addr}</p>;
  ReactDOM.render(element, document.getElementById('addr'));
}  
const inlineStyle = {
  modal : {
    position:'fixed',
   top:'auto',
   right:'auto',
   left:'auto',
   bottom:'0',
    width:'100%',
    height:'80%'
  }
};
const [isActive, setIsActive] = useState(false)
const [isActiveTab, setIsActiveTab] = useState('1')

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"/>
      <title>Kulina</title>
      <div class="fixed">
        <div class="row">
          <div class="col-2"><span class="material-icons">arrow_back</span></div>
          <div class="col-10">
            <div class="row p-0"><p class="title-alamat m-0">ALAMAT PENGANTARAN</p></div>
            <div class="row p-0">
              <Modal
                closeIcon
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                style={inlineStyle.modal}
                trigger={<div class="col"> <div id="addr" class="alamat float-start">Tokopedia Tower</div><span class="material-icons primary">expand_more</span></div>}
              >
                <Modal.Content>
                  <Modal.Description>
                    <p class="alamat">
                      <br/>Cek makanan yang tersedia di lokasi kamu!
                    </p>
                    <Dropdown
                      placeholder='Pilih Alamat'
                      fluid
                      search
                      selection
                      options={countryOptions}
                      onChange={getVal}
                    />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </div>
        </div>
        <div class="scrolll">
            <div class="scroll1">
              <div class="date isDisabled" href="#">SAB<br/><span class="title-date">8</span></div>
              <div class="date isDisabled" href="#">MIN<br/><span class="title-date">9</span></div>
              <div class="date" href="#">SEN<br/><span class="title-date">10</span></div>
              <div class="date" href="#">SEL<br/><span class="title-date">11</span></div>
              <div class="date" href="#">RAB<br/><span class="title-date">12</span></div>
              <div class="date active-3" href="#">KAM<br/><span class="title-date active-3">13</span></div>
              <div class="date" href="#">JUM<br/><span class="title-date">14</span></div>
              <div class="date isDisabled" href="#">SAB<br/><span class="title-date">15</span></div>
              <div class="date isDisabled" href="#">MIN<br/><span class="title-date">16</span></div>
              <div class="date" href="#">SEN<br/><span class="title-date">17</span></div>
              <div class="date" href="#">SEL<br/><span class="title-date">18</span></div>
              <div class="date" href="#">RAB<br/><span class="title-date">19</span></div>
              <div class="date" href="#">KAM<br/><span class="title-date">20</span></div>
              <div class="date" href="#">JUM<br/><span class="title-date">21</span></div>
            </div>
        </div>
      </div>
      
      <Headroom>
        <div class="containerheader">
        {isActiveTab==='1' && (
          <div class="tab">
            <button class="tablinks left active-2">Lunch</button>
            <button class="tablinks right" onClick={() => setIsActiveTab('2')}>Dinner</button>
          </div>
        )}
        
        {isActiveTab==='2' && (
          <div class="tab">
            <button class="tablinks left" onClick={() => setIsActiveTab('1')}>Lunch</button>
            <button class="tablinks right active-2" >Dinner</button>
          </div>
        )}
          
			  </div>
      </Headroom>

      <div class="containertop">
      
      {isActive ? 
      <div class="fixed-bot">
        <div class="d-grid gap-2 pb-2">
          <button class="btn btn-primary pt-2 pb-2 ml-2" type="button" onClick={() => setIsActive(false)}>
            <div class="row">
              <div class="col-10">
                <div class="row p-0"><p class="cart">5 Items | Rp 125,000</p></div>
                <div class="row p-0"><p class="sub-cart">Termasuk ongkos kirim</p></div>
              </div>
              <div class="col-2 d-flex align-self-center"><span class="material-icons-outlined">local_grocery_store</span><span class="material-icons">navigate_next</span></div>
            </div>
          </button>
        </div>
        </div>
      : null }
        <p class="alamat">Kamis, 13 Maret 2019</p>
        <div class="card">
          <div class="pict">
            <img alt="card1" src="https://kln.imgix.net/production/W75Q5EX8YK-Nasi%20Urap%20Solo.jpg?w=300" class="card-img-top "/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
        <div class="card mt-3">
          <div class="pict">
            <img alt="card2" src="https://kln.imgix.net/production/BBF55M6HRX-Paket%20Nasi%20Lemak%20Dada%20Ayam%20Guling%20Original%20%281%29.jpg?w=300" class="card-img-top"/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
        <div class="card mt-3">
          <div class="pict">
            <img alt="card3" src="https://kln.imgix.net/production/CHICKEN%20BULGOGI%20RICEBOWL%20%281%29.JPG?w=300" class="card-img-top"/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
        <div class="card mt-3">
          <div class="pict">
            <img alt="card4" src="https://kln.imgix.net/production/P3260050.jpg?w=300" class="card-img-top"/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
        <div class="card mt-3">
          <div class="pict">
            <img alt="card5" src="https://kln.imgix.net/production/OXY3S9AJGX-Salty%20Calamari.jpg?w=300" class="card-img-top"/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
        <div class="card mt-3">
          <div class="pict">
            <img alt="card6" src="https://kln.imgix.net/production/BBF55M6HRX-Paket%20Nasi%20Lemak%20Dada%20Ayam%20Guling%20Original%20%281%29.jpg?w=300" class="card-img-top"/>
          </div>
          <div class="card-body">
            <p class="star m-0">4.5&ensp;<span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span><span class="material-icons primary2 align-top">grade</span></p>
            <p class="name m-0">Roasted Chicken with Scrambled Egg</p>
            <p class="by mb-2">by Kulina - Uptown Lunch</p>
            <p class="name m-0 float-start">Rp 35,0000</p>
            <button class="btn float-end" onClick={() => setIsActive(true)}>ADD +</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
