interface TableColumn {
  header: string;
  accessor: string;
}

interface DataTableProps {
  columns: TableColumn[];
  data: Record<string, string>[];
  title?: string;
}

export function DataTable({ columns, data, title }: DataTableProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {title && (
        <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
          <h4 className="font-semibold text-neutral-800">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-4 py-3 text-left text-sm font-semibold text-primary-800"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="px-4 py-3 text-sm text-neutral-700"
                  >
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
