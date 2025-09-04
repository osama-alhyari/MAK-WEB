import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useTranslation } from "react-i18next";

const PaginatedTable = ({
  value,
  columns,
  totalRecords,
  onLazyLoad,
  pageNumber,
  query = {},
  id = null,
  emptyMessage = "NoResultsFound",
}) => {
  const { t } = useTranslation();

  return (
    <div className="general-table-container" id={id}>
      <DataTable
        value={value}
        lazy
        first={pageNumber * 10}
        emptyMessage={t(emptyMessage)}
        rows={10}
        totalRecords={totalRecords}
        onPage={async (e) => await onLazyLoad({ ...query, page: e.page })}
        stripedRows
        paginator
      >
        {columns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            style={col.style}
            body={col.body || null}
            colSpan={col.colSpan || null}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default PaginatedTable;
