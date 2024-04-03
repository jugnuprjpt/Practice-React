// import Navbar from "./Component/Navbar";
// import MainSection from "./Component/MainSection"
// import Footer from "./Component/MainSection"
// import Pract from "./Component/Revesion/Props/Pract";

import AddNumber from "./Component/NeoG/Basic/AddNumber";
import MaxMiniNumber from "./Component/NeoG/Basic/MaxMiniNumber";
import ApiCalling from "./Component/NeoG/NeoGInterview/ApiCalling";
import Calculation from "./Component/NeoG/NeoGInterview/Calculation";
import ChangeInputColor from "./Component/NeoG/NeoGInterview/ChangeInputColor";
import IncreaseFontSize from "./Component/NeoG/NeoGInterview/IncreaseFontSize";
import Increaseh1 from "./Component/NeoG/NeoGInterview/Increaseh1";
import LoadingBtn from "./Component/NeoG/NeoGInterview/LoadingBtn";
import MaritMarks from "./Component/NeoG/NeoGInterview/MaritMarks";
import CharacterCount from "./Component/Usestate/CharacterCount";
import ColorSwitcher from "./Component/Usestate/ColorSwitcher";
import Counter from "./Component/Usestate/Counter";
import Example1 from "./Component/Usestate/Example1";
import Example2 from "./Component/Usestate/Example2";
import Example3 from "./Component/Usestate/Example3";
import Example4 from "./Component/Usestate/Example4";
import Form from "./Component/Usestate/Form";
import SearchFilter from "./Component/Usestate/SearchFilter";
import ToDoList from "./Component/Usestate/ToDoList";
import ToggleButton from "./Component/Usestate/ToggleButton";
import ToggleSwitch from "./Component/Usestate/ToggleSwitch";
import TypeInputField from "./Component/Usestate/TypeInputField";




function App() {
  // const arjun = "vishal" 
  return (
    <>
     {/* <Pract><h1>Helo</h1></Pract> */}
    {/* ---------------- neoG ----------- */}
    <ApiCalling/>
    <LoadingBtn/>
    <MaritMarks/>
    <ChangeInputColor/>
    
    <Increaseh1/>
    <IncreaseFontSize/>
    <Calculation/>
    <MaxMiniNumber/>
    <AddNumber/>

     {/* ----- useState example ----- */}
     <SearchFilter/>                  
     <ColorSwitcher/>             
     <ToDoList/>
     <CharacterCount/>
     <Form/>
     <ToggleSwitch/>
     <ToggleButton/>
     <TypeInputField/>
     <Counter/>
     <Example1/>
     <Example2/>
     <Example3/>
     <Example4/>

    </>
  );
}

export default App;
