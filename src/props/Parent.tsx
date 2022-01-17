import { Children } from 'react';
import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return <div>
        <h1>A Parent Component</h1>
        {/* <Child color='red' onClick={()=> console.log("on-click!")}>fdsf</Child> */}
        <ChildAsFC color='blue' onClick={()=> console.log("on-click!")}>{Children}</ChildAsFC>
    </div>
}

export default Parent;