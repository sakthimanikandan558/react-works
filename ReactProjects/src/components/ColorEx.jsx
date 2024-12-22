import React, { useState, useEffect } from 'react';

export const ColorEx = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        if (color === '') {
            setColor('Empty Value');
        }
    }, [color]);

    const handleClr = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className={`inline-flex space-y-4 flex-col justify-center items-center h-screen w-full`}>
            <div className={`border-2 border-black px-4 py-12 inline-block bg-${color}-700`}>
                <p>{color}</p>
            </div>
            <div>
                <input
                    className="w-[150px] py-3 px-2 border-2 border-black"
                    type="text"
                    placeholder="Add color name"
                    onChange={handleClr}
                />
            </div>
            <div className="border-2 border-black p-4">
                <p>Toggle Text Color</p>
            </div>
        </div>
    );
};
