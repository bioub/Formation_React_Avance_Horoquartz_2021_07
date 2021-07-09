import { useCallback, useContext, useMemo, useState } from 'react';
import { concatComponents } from '../../hoc/concatComponents';
import Select from '../Select/Select';
import Clock from '../Clock/Clock';
import List from '../List/List';
import { hideable } from '../../hoc/hideable';
import { PrenomContext } from '../../context/PrenomContext';

import { memoize } from 'lodash-es'

// class Home extends Component {
//   state = {
//     prenoms: ['Jean', 'Paul', 'Eric'],
//     selectedPrenom: 'Jean',
//   };
//   render() {
//     const { prenoms, selectedPrenom } = this.state;
//     return (
//       <div>
//         <p>Vous avez sélectionné : {selectedPrenom}</p>
//         <Select
//           items={prenoms}
//           selected={selectedPrenom}
//           onSelected={(item) => this.setState({ selectedPrenom: item })}
//         />
//       </div>
//     );
//   }
// }

const DoubleClock = concatComponents(Clock, Clock);
const HideableClock = hideable(Clock);

function Home() {
  memoize(() => {});
  const [prenoms] = useState(['Jean', 'Paul', 'Eric']); // 0
//   const [selectedPrenom, setSelectedPrenom] = useState('Jean'); // 1
  const {prenom, setPrenom} = useContext(PrenomContext);

  // const renderItem = useMemo(() => (item) => <b>{item}</b>, [])
  const renderItem = useCallback((item) => <b>{item}</b>, [])
  

  return (
    <div>
        <HideableClock />
      <DoubleClock />
      <List items={prenoms} renderItem={(item) => <button>{item}</button>} />
      <p>Vous avez sélectionné : {prenom}</p>
      <Select
        items={prenoms}
        selected={prenom}
        onSelected={setPrenom}
        renderItem={renderItem}
      />
      <button onClick={() => import('xlsx').then((xlsx) => xlsx())}>Generate XSLX</button>
    </div>
  );
}

export default Home;
