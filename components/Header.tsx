import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex items-center p-4 bg-black text-white">
            <button className="mr-4">
                {/* Back Button (Icon placeholder) */}
                <span className="text-xl">←</span>
            </button>
            <h1 className="text-lg font-semibold">AI cast Home</h1>
        </div>
    );
};

export default Header;
