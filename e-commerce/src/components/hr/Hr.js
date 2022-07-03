import { css } from "@emotion/css";

const hrCSS = css`
  border-bottom: 1px solid rgb(166, 38, 57);
  margin-top: 25px;
  margin-bottom: 25px;
`;

function Hr() {
  return <div className={hrCSS}></div>;
}

export default Hr;
