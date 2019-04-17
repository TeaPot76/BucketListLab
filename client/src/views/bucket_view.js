const PubSub = require('../helpers/pub_sub.js');

const BucketView = function(container){
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

  const deleteButton = this.createDeleteButton(bucket._id);
  bucketContainer.appendChild(deleteButton);

  const updateBox = this.createUpdateBox(bucket._id);
  bucketContainer.appendChild(updateBox);

  this.container.appendChild(bucketContainer);
};

BucketView.prototype.createHeading = function(textContent){
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function(textContent){
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

BucketView.prototype.createDeleteButton = function(bucketId){
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketId;
  button.textContent = "delete";

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:bucket-delete-cliked', evt.target.value);
  });
return button;
};

BucketView.prototype.createUpdateBox = function(bucketId){
  const updateButton = document.createElement('button');
  updateButton.classList.add('submit');
  updateButton.value = bucketId;
  updateButton.textContent = "update"


  updateButton.addEventListener('input', (evt) => {
    PubSub.publish('BucketView:bucket-completed', evt.target.value);
  });
return updateButton;
};


module.exports = BucketView;
