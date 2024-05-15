import { useEffect, useState } from "react";
import { getPrograms } from "../services/service";
import { getGoogleIdFromImage } from "../utils/utils";

export const usePrograms = ({ tableInfoName }) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {

      getPrograms(tableInfoName)
      .then(data => {
        console.log('data', data.values)
        const formattedData = data.values.slice(1).map(row => ({
          programName: row[0],
          broadCaster: row[1],
          programDays: row[2],
          programSchedule: row[3],
          broadCasterImgId: row[4] ? getGoogleIdFromImage(row[4]) : null
        }));
        console.log(formattedData);
        setPrograms(formattedData);

          // console.log(data);
          // setPrograms(data.values);
      })
      .catch(error => console.log(error));

  }, [tableInfoName]);

  return { programs }

}
