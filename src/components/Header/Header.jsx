import PropTypes from "prop-types";
import styled from 'styled-components'

const defaults = {
  bgColor: "white",
  spaceBefore: "60px",
  spaceAfter: "40px",
  width: "50%",
}


export default function Header({
  text,
  bgColor,
  width,
  widthLeft,
  widthRight,
  skipSpaceBefore,
  skipSpaceAfter,
  spaceBefore,
  spaceAfter,
}) {
  return (
    <HeaderWrapper
      width={width}
      bgColor={bgColor}
      skipSpaceBefore={skipSpaceBefore}
      skipSpaceAfter={skipSpaceAfter}
      spaceBefore={spaceBefore}
      spaceAfter={spaceAfter}
    >
      <Wing width={width ? "100%" : widthLeft} bgColor={bgColor}></Wing>
      {text && <TextDiv bgColor={bgColor}>{text}</TextDiv>}
      <Wing width={width ? "100%" : widthRight} bgColor={bgColor}></Wing>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.string,
  widthLeft: PropTypes.string,
  widthRight: PropTypes.string,
  skipSpaceBefore: PropTypes.bool,
  skipSpaceAfter: PropTypes.bool,
  spaceBefore: PropTypes.string,
  spaceAfter: PropTypes.string,
}


// ==========IMPLEMENTATION==========

const HeaderWrapper = styled.div`
  width: ${prop => prop.width || defaults.width};
  margin-top: ${prop => prop.skipSpaceBefore ? 0 : prop.spaceBefore || defaults.spaceBefore};
  margin-bottom: ${prop => prop.skipSpaceAfter ? 0 : prop.spaceBefore || defaults.spaceAfter};
  display: flex;
  /* justify-content:center; */
  align-items: center;
`;

const TextDiv = styled.div`
  background-color: ${prop => prop.bgColor || defaults.bgColor};

  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;

  border-radius: 4px;

  font-family: initial;
  font-style: italic;
  font-size: 14px;
  white-space: nowrap;

  color: #555;
  box-shadow: 0px 2px 10px 0px #0002, 0px 2px 1px 0px #0002;
`;

const Wing = styled.span`
  width: ${prop => prop.width || defaults.width};
  height: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: blur(1.2px);
  }

  &:first-child {
    background: linear-gradient(90deg, transparent, ${prop => prop.bgColor || defaults.bgColor});
    &::before {
      background: linear-gradient(90deg, transparent, transparent 25%, #0006);
    }
  }
  &:last-child {
    background: linear-gradient(-90deg, transparent, ${prop => prop.bgColor || defaults.bgColor});
    &::before {
      background: linear-gradient(-90deg, transparent, transparent 25%, #0006);
    }
  }
`;

