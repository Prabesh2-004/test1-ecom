import Sidebar from "../Components/Sidebar";
import VideoGrid from "../Components/VideoGrid";

const Home = () => {
  // const product = [
  //   {
  //     Name: "T-shirt",
  //     Image: "1.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "Pants",
  //     Image: "2.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "Shoe",
  //     Image: "3.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "jacket",
  //     Image: "4.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "jacket",
  //     Image: "5.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "jacket",
  //     Image: "6.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "jacket",
  //     Image: "7.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  //   {
  //     Name: "jacket",
  //     Image: "8.jpeg",
  //     Dis: "Here are the biggest enterprise technology acquisitions of 2021 so far"   
  //   },
  // ]
  
  // return (
  //   <div className="grid grid-cols-4 w-screen p-20 gap-5">
  //     {/* <Sidebar />
  //     <VideoGrid /> */}

  //     {product.map((products, index) => (
  //       <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  //         <img src={products.Image} alt="nbdnsd" className="rounded-2xl mb-2"/>
  //         <a href="#">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //             {products.Name}
  //           </h5>
  //         </a>
  //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //           {products.Dis}
  //         </p>
  //         <a
  //           href="#"
  //           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //         >
  //           Buy 
  //           <svg
  //             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 14 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M1 5h12m0 0L9 1m4 4L9 9"
  //             />
  //           </svg>
  //         </a>
  //         <a
  //           href="#"
  //           className="inline-flex ml-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-500"
  //         >
  //           Add to Cart
  //           <svg
  //             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 14 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M1 5h12m0 0L9 1m4 4L9 9"
  //             />
  //           </svg>
  //         </a>
  //       </div>
  //     ))}
  //   </div>
  // );

  return(
    <div className="flex">
      <Sidebar />
      <VideoGrid />
    </div>
  );
};

export default Home;