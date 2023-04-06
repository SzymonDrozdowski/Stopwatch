import FormattedTime from './components/FormattedTime/FormattedTime'
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';
import Container from './components/Container/Container';

const App = () => {

    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);

    const start = () => {
        clearInterval(timer);
        setTimer(setInterval(() => {
          setTime((prevValue) => prevValue + 100);
        }, 100))
      };
    
    const stop = () => {
        clearInterval(timer);
      };

      const reset = () => {
        clearInterval(timer);
        setTime(0);
      }

      useEffect(() => {
        return () => {
           if (timer) {
            clearInterval(timer);
           }
        };
      }, []);

    return(
    <Container>
        <FormattedTime time={time} />
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
    </Container>
    );
};
export default App;