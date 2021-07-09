import { Component, useEffect, useRef, useState } from 'react';

// export default class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       options: {
//         format: 'HH:mm:ss',
//       },
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     this._interval = setInterval(() => {
//       // Object.assign() / shallow merge
//       this.setState({
//         options: {
//           delay: 1000,
//         },
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     // dans un composant stateful on manipule les props via this.props
//     return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
//   }
// }

function useInterval(cb, delay) {
  const cbRef = useRef();

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    const _interval = setInterval(cbRef.current, delay);
    return () => {
      console.log('clearInterval');
      clearInterval(_interval);
    };
  }, [delay]);
}

export default function Clock() {
  const [now, setNow] = useState(new Date());
  const [delay, setDelay] = useState(1000);

  setTimeout(() => {
    setDelay(2000);
  }, 3000);
 

  useInterval(() => {
    setNow(new Date());
  }, delay);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}
