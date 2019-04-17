const BucketFormView = require('./views/bucket_form_view.js');
const BucketGridView = require('./views/bucket_grid_view.js');
const Buckets = require('./models/buckets.js');

document.addEventListener('DOMContentLoaded', () => {

  const bucketForm = document.querySelector('#bucket-form');
  const bucketFormView = new BucketFormView(bucketForm);
  bucketFormView.bindEvents();

  const bucketContainer = document.querySelector('#buckets');
  const bucketGridView = new BucketGridView(bucketContainer);
  bucketGridView.bindEvents();


  const bucketUrl = 'http://localhost:3000/api/buckets';
  const buckets = new Buckets(bucketUrl);
  buckets.bindEvents();
  buckets.getData();
});
