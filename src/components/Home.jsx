import RkHeaderBox101 from "./RkHeaderBox101.jsx";
import RkHeaderBox102 from "./RkHeaderBox102.jsx";

export default function Home(props) {
  return (
    <div>

    {/*RkHeaderBox101*/}
    <h2 className="item-id">RkHeaderBox101</h2>
    <div className="row">  
      <div className="col-sm-3">
        39
      </div>  
      <div className="col-sm-9">
        <RkHeaderBox101 />
      </div>
    </div> 

    {/*RkHeaderBox102*/}
    <h2 className="item-id">RkHeaderBox102</h2>
    <div className="row">  
      <div className="col-sm-3">
        39
      </div>  
      <div className="col-sm-9">
        <RkHeaderBox102 />
      </div>
    </div> 

    </div> 
  );
}