import { mount } from 'enzyme';

import Select from './Select';

it('renders without crashing', () => {
  const items = ['Acheter du pain', 'B', 'C'];

  const spy = jest.fn();

  const wrapper = mount(<Select items={items} selected="C" onSelected={spy} />);

  // pour les CSS modules les classes commencent par NomDuComp_ClassOrigin__
  // wrapper.find('[class^=SelectItem_host]')
  expect(wrapper.contains('Acheter du pain')).toBeTruthy();

  wrapper.find('.host').first().simulate('click');


  // Exercice
  // Ensuite simuler le click sur Acheter du pain
  // Passer une fonction créer avec jest.fn() à la props onSelected
  // vérifier que cette function soit appelée avec Acheter du pain
  wrapper.find('.host .host').first().simulate('click');

  expect(spy).toHaveBeenCalledWith('Acheter du pain');
});

