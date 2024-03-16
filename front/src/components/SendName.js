import React, { useState } from 'react'

function SendName() {
    const [name, setName] = useState("");

  return (
    <div>
        <form>
            <div className="sendName">
                <input 
                    placeholder="学籍番号と名前を入力してください．" 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                />
            </div> 
        </form>
    </div>
  );
}

export default SendName