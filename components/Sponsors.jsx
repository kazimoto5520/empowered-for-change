import React from 'react';
import Image from "next/image";

const Sponsors = () => {
    const images = [
        {
            source: "/sponsor3.jpg",
            alt: "sponsor",
        },

        {
            source: "/sponsor1.png",
            alt: "sponsor2",
        },

        {
            source: "/sponsor2.jpg",
            alt: "sponsor3",
        },

        {
            source: "/sponsor3.jpg",
            alt: "sponsor4",
        },
    ];

    return (
        <div className="bg-[#f0832e] py-4 px-12 max-sm:px-2">
            <div className="grid grid-cols-4 mx-24 p-4 max-sm:mx-4 max-lg:mx-8 max-sm:gap-8">
                {images.map((img) => (
                    <div key={img.alt}
                         className="w-[128px] h-[128px] rounded-full border-solid border-2 border-white bg-center bg-cover max-sm:w-[72px] max-sm:h-[72px]">
                        <Image
                            src={img.source}
                            width={128}
                            height={128}
                            alt={img.alt}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;