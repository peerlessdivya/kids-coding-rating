const BrowsePlatform = () =>{
    const[platformData,setPlatformData]= useState([]);
    
    const fetchPlatform = () => {
        fetch(url + "platform/getall")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPlatformData(data);
        });
    };

    const displayPlatform

   return (
       <div>
           
       </div>
   );
};
export default BrowsePlatform;