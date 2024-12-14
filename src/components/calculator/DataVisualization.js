import { styled } from "styled-components";

const DataVizualizationStyle = styled.div`
        grid-column: 2 / 4;

        background-color: white;
        border-radius: 12px;
        padding: 1rem;
`;
const DataVizualization = () => {
  return (
    <DataVizualizationStyle>
        <h1>My viz</h1>
    </DataVizualizationStyle>
  );
};

export default DataVizualization;
