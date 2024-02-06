const GridCanvas = () => {
  const gridData = Array.from({ length: 5 }, () => Array(13).fill(null));

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {gridData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((column, columnIndex) => (
              <td
                key={`${rowIndex}-${columnIndex}`}
                style={{
                  width: "60px",
                  height: "60px",
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
