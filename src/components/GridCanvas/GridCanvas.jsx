const GridCanvas = () => {
  const gridData = Array.from({ length: 6 }, () => Array(6).fill(null));

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {gridData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td
                key={columnIndex}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid black",
                }}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridCanvas;
