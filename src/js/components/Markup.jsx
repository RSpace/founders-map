import React from 'react';

const Markup = React.createClass({

  displayName: 'Markup',
  urlRegEx: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,

  isImageLink: function(link) {
    return /\.(jpg|png|gif|jpeg)$/.test(link);
  },

  render: function() {
    var content = this.props.children.join ? this.props.children.join(' ') : this.props.children;
    if(this.urlRegEx.test(content)) {
      if(this.isImageLink(content)) {
        return (<img src={content} />);
      } else {
        return (<a href={content} target="_new">{content}</a>);
      }
    } else {
      return <span>{content}</span>;
    }
  }

});

export default Markup;