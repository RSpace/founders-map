import React from 'react';
import Markup from '../components/Markup.jsx';
import expect from 'unexpected';

describe('Markup', () => {

  let TestUtils

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
  });

  it('renders normal text in a span', () => {
    let markup = TestUtils.renderIntoDocument(<Markup>Bill Gates</Markup>);
    expect(markup.getDOMNode().outerHTML, 'to contain', '<span' , '>Bill Gates</span>');
  });

  it('renders a link as an anchor', () => {
    let link = 'http://microsoft.com';
    let markup = TestUtils.renderIntoDocument(<Markup>{link}</Markup>);
    expect(markup.getDOMNode().outerHTML, 'to contain', '<a', 'href="' + link + '"', 'target="_new"', '>' + link + '</a>');
  });

  it('renders a link to an image as an image', () => {
    let link = 'http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg';
    let markup = TestUtils.renderIntoDocument(<Markup>{link}</Markup>);
    expect(markup.getDOMNode().outerHTML, 'to contain', '<img', 'src="' + link + '"');
  });

  describe('isImageLink', () => {

    let markup;

    beforeEach(() => {
      markup = TestUtils.renderIntoDocument(<Markup>Bill Gates</Markup>);
    });

    it('recognizes a link to an image', () => {
      const imagelinkString = "http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg";
      expect(markup.isImageLink(imagelinkString), 'to be true');

      const linkString = "http://microsoft.com";
      expect(markup.isImageLink(linkString), 'to be false');
    });

  });


});
