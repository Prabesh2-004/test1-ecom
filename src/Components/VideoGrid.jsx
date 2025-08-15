import React from 'react'

const VideoGrid = () => {
    const VideoContainer = [
        {
            Title: "Me and Gewn having some Fun",
            Channel: "Miles Moralis",
            Thumb: "/download1.jpeg"
        },
        {
            Title: "Feeling Depressed",
            Channel: "Eren Yeager",
            Thumb: "/5.jpeg"
        },
        {
            Title: "Nimbus Cloud riding",
            Channel: "Master Roshi Vlog",
            Thumb: "/4.jpeg"
        },
        {
            Title: "Adventure Somewhere high",
            Channel: "Son Goku",
            Thumb: "/3.jpeg"
        },
        {
            Title: "I am Nobody",
            Channel: "obito Uchia",
            Thumb: "/8.jpeg"
        },
        {
            Title: "I am Batman",
            Channel: "Batman",
            Thumb: "/9.jpeg"
        },
        {
            Title: "Killing Somebody because my dog dead",
            Channel: "John Wick",
            Thumb: "/6.jpeg"
        },
        {
            Title: "Feeling Nature",
            Channel: "Guts",
            Thumb: "/7.jpeg"
        },
    ];

    return (
        <div className="w-[100vw - 64px] h-[100vh - 65px] p-5 grid gap-5 grid-cols-3">
                {VideoContainer.map(videos => (
                    <div className="h-[50%] rounded-2xl flex flex-col gap-2 w-full">
                            <img src={videos.Thumb} alt="thumb" className='rounded-2xl w-full'/>
                            <h2 key={videos.Title} className='text-xl font-bold text-black'>{videos.Title}</h2>
                    </div>
                ))}
        </div>
    )
}

export default VideoGrid;