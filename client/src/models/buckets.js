const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Buckets = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);

};

Buckets.prototype.bindEvents = function(){
  PubSub.subscribe('BucketFormView:bucket-submitted', (evt)=>{
    this.postBucket(evt.detail);
  });

  PubSub.subscribe('BucketView:bucket-delete-cliked', (evt)=>{
    this.deleteBucket(evt.detail);
  });

  PubSub.subscribe('BucketView:bucket-completed', (evt)=>{
    this.updateBucket(evt.detail);
  });
};

Buckets.prototype.getData = function(){
  const request = new RequestHelper(this.url);
  request.get()
  .then((buckets) => {
    PubSub.publish('BucketsList:data-loaded', buckets);
  })
  .catch(console.error);

};

Buckets.prototype.postBucket = function(bucket){
  this.request.post(bucket)
  .then((buckets)=>{
    PubSub.publish('BucketsList:data-loaded', buckets)

  });
};

Buckets.prototype.deleteBucket = function(bucketID){
  this.request.delete(bucketID)
  .then((buckets)=> {
    PubSub.publish('BucketsList:data-loaded', buckets);
  })
  .catch(console.error);
};

Buckets.prototype.updateBucket = function(bucketID){
  this.request.update(bucketID)
  .then((buckets)=> {
    PubSub.publish('BucketsList:data-loaded', buckets);
  })
  .catch(console.error);
};


module.exports = Buckets;
