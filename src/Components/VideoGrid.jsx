import React from 'react'

const VideoGrid = () => {
    const VideoContainer = [
        {
            Title: "Me and Gewn having some Fun",
            Channel: "Miles Moralis",
            Thumb: "/download1.jpeg",
            views: "200k .",
            date: "1 months"
        },
        {
            Title: "Feeling Depressed",
            Channel: "Eren Yeager",
            Thumb: "/5.jpeg",
            views: "1M .",
            date: "9 months"
        },
        {
            Title: "Nimbus Cloud riding",
            Channel: "Master Roshi Vlog",
            Thumb: "/4.jpeg",
            views: "50k .",
            date: "2 weeks"
        },
        {
            Title: "Adventure Somewhere high",
            Channel: "Son Goku",
            Thumb: "/3.jpeg",
            views: "500k .",
            date: "2 months"
        },
        {
            Title: "I am Nobody",
            Channel: "obito Uchia",
            Thumb: "/8.jpeg",
            views: "100k .",
            date: "6 months"
        },
        {
            Title: "I am Batman",
            Channel: "Batman",
            Thumb: "/9.jpeg",
            views: "50M .",
            date: "1 Years"
        },
        {
            Title: "Killing Somebody because my dog dead",
            Channel: "John Wick",
            Thumb: "/6.jpeg",
            views: "100M .",
            date: "2 months"
        },
        {
            Title: "Feeling Nature",
            Channel: "Guts",
            Thumb: "/7.jpeg",
            views: "900k .",
            date: "3 months"
        },
    ];

    return (
        <div className="w-[100vw - 64px] h-[100vh - 65px] p-5 grid gap-1 grid-cols-3" id='video-grid'>
                {VideoContainer.map(videos => (
                    <div key={videos.Title} className=" rounded-2xl flex flex-col gap-2 w-full hover:bg-gray-300 p-3">
                            <img src={videos.Thumb} alt="thumb" className='rounded-2xl w-full'/>
                            <div className='flex gap-4'>
                                <img src={videos.Thumb} alt="img" className='w-8 h-8 rounded-full'/>
                                <div>
                                    <h2 key={videos.Title} className=' font-bold text-black'>{videos.Title}</h2>
                                    <p key={videos.Channel}>{videos.Channel}</p>
                                    <div className='flex gap-2'>
                                        <p>{videos.views}</p>
                                        <p>{videos.date}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
        </div>
    )
}

export default VideoGrid;