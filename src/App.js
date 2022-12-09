import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobileoperating';
import Manufacture from './components/Mobilemanu';
import Trail from './components/Trail';

function App() {
  // let items = {
  //   l1:"Android",
  //   l2:"Blackberry",
  //   l3:"Iphone",
  //   l4:"Windows Phone",
  // }

  let items = [{ l1:"Android"},
  {l2:"Blackberry"},
  {l3:"Iphone"},
  { l4:"Windows Phone"}]

 let items1 = [{L1:"Samsung"},
 {L2:"HTC"},
 {L3:"Micromax"},
 {L4:"Apple"}]
  return (
    <div className="Apps">
       <h1>Mobile Operating System</h1>
      {items.map((e)=>(
       <Mobile {...e}></Mobile>
      ))}
      <h1>Mobile Manufacture</h1>
      {items1.map((e)=>(
        <div>
          <Manufacture {...e}></Manufacture>
        </div>
      ))}
     <Trail></Trail>
    </div>
  );
}

export default App;
