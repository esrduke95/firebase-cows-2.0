import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';

const viewHelper = (id) => {
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    default:
      return cowsView.cowsView();
  }
};

const viewListener = () => {
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
