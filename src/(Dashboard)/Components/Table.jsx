export default function Table({ Thead, Tbody, data }) {
  return (
    <table className="border-separate border-spacing-y-2">
      <thead>
        <tr className="dark:text-lightGrey dark:bg-darkMode">
          {Thead.map((cols, i) => {
            return (
              <th key={i} className={cols.className}>
                {cols.headers}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((items, i) => {
          return Tbody(items, i);
        })}
      </tbody>
    </table>
  );
}
