import styles from './FormattedTime.module.scss';

let miliseconds, seconds, minutes, hours;
const FormattedTime = ({ time }) => {
   const formatTime = (duration) => {
    
    miliseconds = Math.floor((duration % 1000) / 10);
    seconds = Math.floor((duration / 1000) % 60);
    minutes = Math.floor((duration / 60000));
    hours = Math.floor((duration / 360000));
    
    if (miliseconds < 10){
        miliseconds = '0' + miliseconds;
      };
      if (seconds < 10){
        seconds = '0' + seconds;
      };
      if (minutes < 10){
        minutes = '0' + minutes;
      };
      if (hours < 10){
        hours = '0' + hours;
      };

      return hours + ':' + minutes + ':' + seconds + '.' + miliseconds;
   };

  return (
    <div>
       <h1>{formatTime(time)}</h1>
    </div>
  );

};

export default FormattedTime;