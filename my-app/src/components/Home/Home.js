import { useState } from 'react';
import { concatComponents } from '../../hoc/concatComponents';
import Select from '../Select/Select';
import Clock from '../Clock/Clock';
import List from '../List/List';
import { hideable } from '../../hoc/hideable';

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
  const [prenoms] = useState(['Jean', 'Paul', 'Eric']); // 0
  const [selectedPrenom, setSelectedPrenom] = useState('Jean'); // 1
  return (
    <div>
        <HideableClock />
      <DoubleClock />
      <List items={prenoms} renderItem={(item) => <button>{item}</button>} />
      <p>Vous avez sélectionné : {selectedPrenom}</p>
      <Select
        items={prenoms}
        selected={selectedPrenom}
        onSelected={setSelectedPrenom}
      />
    </div>
  );
}

export default Home;
