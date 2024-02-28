import FuncDiv from "./components/FuncDiv";
import ClassDiv from "./components/ClassDiv";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <FuncDiv
                header="Func Welcome"
                text="Function components are good"
            />
            <ClassDiv
                header="Class Welcome"
                text="Class components are deprecated"
            />
        </div>
    );
};

export default App;
