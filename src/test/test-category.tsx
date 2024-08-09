// import {useRef, useState} from 'react';
//
// // @ts-ignore
// const Category = ({title, children}) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const contentRef = useRef(null);
//
//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//     };
//
//     return (
//         <div className="mb-4">
//             <button
//                 className="bg-blue-500 text-white w-full py-2 px-4 rounded focus:outline-none"
//                 onClick={toggleOpen}
//             >
//                 {title}
//             </button>
//             <div
//                 ref={contentRef}
//                 className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
//                 style={{maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'}}
//             >
//                 <div className="p-4">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Category;
