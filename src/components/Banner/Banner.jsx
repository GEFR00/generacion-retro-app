import { getPrograms } from "../../services/service"


export const Banner = () => {

    const handleFile = () => {

        getPrograms()
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error));
        
    }


  return (
    <div>
        Banner
        <button onClick={handleFile}>Click</button>
    </div>
  )
}
