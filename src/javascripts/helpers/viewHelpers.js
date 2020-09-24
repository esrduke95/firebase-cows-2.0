import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';
import addCowView from '../components/views/addCowViews';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'cows-link':
      return cowsView.cowsView();
    case 'farmers-link':
      return farmersView.farmersView();
    case 'add-cow-link':
      return addCowView.addCowView();
    default:
      return console.warn('nada');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
