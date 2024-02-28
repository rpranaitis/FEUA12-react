import FuncButton from "./FuncButton";

const FuncDiv = ({ header, text }) => {
    return (
        <div>
            <h3>{header}</h3>
            <p>{text}</p>
            <FuncButton text="Yes" />
        </div>
    );
};

export default FuncDiv;
