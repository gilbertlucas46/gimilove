import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const LightboxContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px; */
`;

const PreviewButton = styled.div`
  /* background: transparent;
  border: none;
  padding: 0;
  margin: 0; */
`;

export default class Lightbox extends Component {
  static propTypes = {
    Images: PropTypes.object, // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render() {
    const { Images } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <Fragment>
        <LightboxContainer>
        <PreviewButton
          key={Images.thumb.childImageSharp.fluid.src}
          type="button"
          onClick={() => this.setState({ showLightbox: true, selectedImage: Images })}
        >
          <Img fluid={Images.thumb.childImageSharp.fluid} />
        </PreviewButton>
        </LightboxContainer>
        {showLightbox && (
        <Dialog aria-label="Our Photos">
          <Img fluid={Images.full.childImageSharp.fluid} />
          <button type="button" onClick={() => this.setState({ showLightbox: false })}>
            Close
          </button>
        </Dialog>
        )}
      </Fragment>
    );
  }
}