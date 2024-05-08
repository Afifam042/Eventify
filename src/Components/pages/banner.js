import React, { useState } from 'react';
import ProgressBar from '../progressbar';
import { useLocation } from 'react-router-dom';
import AddImage from '../addImage';
//{ProgressBar}<ProgressBar />
  //        {AddImage}<AddImage />
  //const progress = location.state ? location.state.progress : 0;
  //const handleProgressChange = location.state ? location.state.handleProgressChange : () => {};
 // const { progress, handleProgressChange } = location.state || { progress: 0, handleProgressChange: () => {} };
 //const progress = location.state ? location.state.progress : 0;
const Banner= () =>{
  const location = useLocation();
  const initialProgress = location.state ? location.state.progress : 0;
 
  const [progress, setProgress] = useState(initialProgress);
  

  const handleProgressChange = (newProgress) => {
    // Logic to handle form submission
    // Assuming the form submission logic is successful, increment progress
    
    setProgress(newProgress);
    
  };
 return(

  <div className="banner">
         <h1>Welcome to Our Website</h1>
         
         <ProgressBar progress={progress} handleProgressChange={handleProgressChange} prev='/'   next={{ pathname: '/addticket' }}/>
       <AddImage />
         
  {/* Add more JSX components or elements as needed */}
  </div>

 );

};
export default Banner;