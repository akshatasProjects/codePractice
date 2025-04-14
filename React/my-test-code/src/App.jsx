import "./App.css";
import Five_Counter from "./components/Five_Counter";
import Four_Keystroke from "./components/Four_Keystroke";
import One_SimpleApp from "./components/One_SimpleApp";
import Seven_FormValidation from "./components/Seven_FormValidation";
import Six_FetchAPI from "./components/Six_FetchAPI";
import Three_ToggleBtn from "./components/Three_ToggleBtn";
import Two_FuncProp from "./components/Two_FuncProp";
import Nine_ConditionalRender from "./Nine_ConditionalRender";
import Ten_ListItems from "./Ten_ListItems";

function App() {
  return (
    <>
      {/* <One_SimpleApp />
      <Two_FuncProp name='Akshata' />
      <Three_ToggleBtn /> */}
      {/* <Four_Keystroke /> */}
      {/* <Five_Counter /> */}
      {/* <Six_FetchAPI /> */}
      {/* <Seven_FormValidation /> */}

      <Nine_ConditionalRender type={"button"} />
      <Ten_ListItems />
    </>
  );
}

export default App;
