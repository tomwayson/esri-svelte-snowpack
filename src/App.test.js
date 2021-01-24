import {render} from '@testing-library/svelte';
import {expect} from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('renders learn svelte link', async () => {
    const { getByText, findByText } = render(App);
    const linkElement = getByText(/esri-loader/i);
    expect(document.body.contains(linkElement));
    await findByText(/Lat: 38.00 | Lon: -90.00/);
    const centerTextElement = getByText(/Lat: 38.00 | Lon: -90.00/);
    expect(document.body.contains(centerTextElement));
  });
});
