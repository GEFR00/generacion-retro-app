import PropTypes from 'prop-types';
import { usePrograms } from "../../hooks/usePrograms";
import { useEffect, useState } from 'react';

export const Banner = ({ showPrograms, tableInfoName }) => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const { programs } = usePrograms({ tableInfoName });
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('paso un minuto')
      setCurrentTime(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTime]);
  
  return (
    

    <div>

      <h2>La hora actual es:</h2>
      <p>{currentTime}</p>

      <ul>
        {showPrograms && programs.map((program, index) => (
          <li key={index}>
            <h2>{program.programName}</h2>
            <p>{program.broadCaster}</p>
            <p>{program.programDays}</p>
            <p>{program.programSchedule}</p>
            <img src={`https://drive.google.com/thumbnail?id=${program.broadCasterImgId}`} alt={program.broadCaster} />
          </li>
        ))}
      </ul>
      
    </div>
  )
}


Banner.propTypes = {
  showPrograms: PropTypes.bool.isRequired,
  tableInfoName: PropTypes.any.isRequired
};
