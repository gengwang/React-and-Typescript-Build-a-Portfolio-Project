import { useState } from "react";

const GuestList: React.FC = () => {

    const [guestName, setGuestName] = useState('');
    const [guestNames, setGuestNames] = useState<string[]>([]);

    const addGuest = () => {
        setGuestName(''); // Note the order of setGuestName and setGuestNames! Note the two calls can switch positions and would still work
        setGuestNames([...guestNames, guestName]);
    }

    return (<div>
        <h3>Guest List</h3>
        <ul>
            {guestNames.map((g) => 
                <li key={g}>{g}</li>
            )}
        </ul>
        <input type="text" placeholder="Enter guest name" value={ guestName} onChange={(e) =>  setGuestName(e.target.value) }></input>
        <button onClick={ addGuest }>Add</button>
    </div>
    )
}

export default GuestList;