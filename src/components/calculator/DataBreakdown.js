import { styled } from "styled-components";

const DataBreakdownStyle = styled.div`
        grid-column: 1 / 4;

        background-color: white;
        border-radius: 12px;
        padding: 1rem;
`;
const DataBreakdown = () => {
  return (
    <DataBreakdownStyle>
        <h1>My break</h1>
    </DataBreakdownStyle>
  );
};

export default DataBreakdown;
