import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';
import addCowView from '../components/views/addCowViews';
import updateCowsView from '../components/views/updateCowView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'cows-link':
      return cowsView.cowsView();
    case 'farmers-link':
      return farmersView.farmersView();
    case 'add-cow-link':
      return addCowView.addCowView();
    case 'update-cow-link':
      return updateCowsView.updateCowsView(arg);
    default:
      return console.warn('nada');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-cow', (e) => {
    const cowFirebaseKey = e.currentTarget.id;
    viewHelper('update-cow-link', cowFirebaseKey);
  });
};

export default { viewListener };
