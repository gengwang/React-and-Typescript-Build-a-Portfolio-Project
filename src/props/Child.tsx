interface ChildProps {
    color: string;
    onClick: ()=>void;
}

const Child = ({color, onClick}: ChildProps) => {
    return <div>
        <h1 style={{fontSize: 12}}>A Child Component: Color is {color} </h1>
        <button onClick={onClick}>Click me</button>
    </div>
}

export {Child};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        <h1 style={{fontSize: 12}}>A Child Component: Color is {color} </h1>
        <button onClick={onClick}>Click me</button>
    </div> 
}