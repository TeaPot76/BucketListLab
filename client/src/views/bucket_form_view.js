const PubSub = require('../helpers/pub_sub.js');

const BucketFormView = function(form) {
  this.form = form;
};

BucketFormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketFormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  const newBucket = this.createBucket(evt.target);
  PubSub.publish('BucketFormView:bucket-submitted', newBucket);
  evt.target.reset();
};

BucketFormView.prototype.createBucket = function(form) {
  const newBucket = {
    activity: form.activity.value,
    date: form.date.value,
    location: form.location.value,
    status: form.status.value
  };

  return newBucket;

};

module.exports = BucketFormView;
