import { useState } from 'react';
import Select from '../Select/Select';

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

function Home() {
  const [prenoms] = useState(['Jean', 'Paul', 'Eric']); // 0
  const [selectedPrenom, setSelectedPrenom] = useState('Jean'); // 1
  return (
    <div>
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
