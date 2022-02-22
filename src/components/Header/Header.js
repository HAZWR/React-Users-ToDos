import { useState } from "react";

export function Header(props) {
     const [value, setValue] = useState(false);
     return (
          <div className="header">
               {{value}}
               <button onClick={() => setValue(!value)}>
                    Go
               </button>
          </div>
     );
}
