const PubSub = require('../helpers/pub_sub.js');

const BucketView = function(container) {
  this.container = container;

};

BucketView.prototype.render = function(bucket) {
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const activity = this.createHeading(bucket.activity);
  bucketContainer.appendChild(activity);

  const date = this.createDetail(bucket.date);
  bucketContainer.appendChild(date);

  const location = this.createDetail(bucket.location);
  bucketContainer.appendChild(location);

  const status = this.createDetail(bucket.status);
  bucketContainer.appendChild(status);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.value = bucket._id;
  bucketContainer.appendChild(completeButton);

  completeButton.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:update-completed', evt.target.value);
  });

  const deleteButton = this.createDeleteButton(bucket._id);
  bucketContainer.appendChild(deleteButton);

  this.container.appendChild(bucketContainer);
};

BucketView.prototype.createHeading = function(textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function(textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

BucketView.prototype.createDeleteButton = function(bucketId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketId;
  button.textContent = "delete";

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:bucket-delete-cliked', evt.target.value);
  });
  return button;
};




module.exports = BucketView;
