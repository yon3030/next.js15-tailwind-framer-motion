import React from 'react';

const AnimatedText = ({text}: {text: string}) => {
return (
<h1 className="text-6xl transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-110">
{text}
</h1>
);
};

export default AnimatedText;