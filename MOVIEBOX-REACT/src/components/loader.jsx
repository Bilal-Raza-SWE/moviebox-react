import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .circle {
    background: rgba(50, 120, 180, 1);
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    animation: figureEight 1.5s linear infinite;
  }

  .circle:nth-child(2) {
    animation-delay: 0.1s;
    width: 12px;
    height: 12px;
    background: rgba(50, 120, 180, 0.5);
  }

  .circle:nth-child(3) {
    animation-delay: 0.2s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.35);
  }

  .circle:nth-child(4) {
    animation-delay: 0.3s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.15);
  }

  .circle:nth-child(5) {
    animation-delay: 0.4s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.15);
  }

  .circle:nth-child(6) {
    animation-delay: 0.5s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.15);
  }

  .circle:nth-child(7) {
    animation-delay: 0.6s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.15);
  }

  .circle:nth-child(8) {
    animation-delay: 0.7s;
    width: 10px;
    height: 10px;
    background: rgba(50, 120, 180, 0.15);
  }

  @keyframes figureEight {
    0%,
    100% {
      transform: translate(0, 0);
    }
    12.5% {
      transform: translate(50px, -25px);
    }
    25% {
      transform: translate(100px, 0);
    }
    37.5% {
      transform: translate(50px, 25px);
    }
    50% {
      transform: translate(0, 0);
    }
    62.5% {
      transform: translate(-50px, -25px);
    }
    75% {
      transform: translate(-100px, 0);
    }
    87.5% {
      transform: translate(-50px, 25px);
    }
  }`;

export default Loader;
