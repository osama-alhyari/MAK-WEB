import { memo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useTranslation } from "react-i18next";

const GeneralTable = ({
  value,
  columns,
  paginator = false,
  showGridlines = false,
  rows = 10,
  scrollable = false,
  scrollHeight = null,
  emptyMessage = "NoResultsFound",
  rowGroupMode = null,
  groupRowsBy = null,
  sortField = null,
  bodyClassName = null,
}) => {
  const { t } = useTranslation();
  return (
    <div className="general-table-container">
      <DataTable
        value={value}
        paginator={paginator}
        rows={rows}
        rowsPerPageOptions={[10, 25, 50]}
        stripedRows
        scrollable={scrollable}
        scrollHeight={scrollHeight}
        emptyMessage={t(emptyMessage)}
        rowGroupMode={rowGroupMode}
        groupRowsBy={groupRowsBy}
        sortField={sortField}
        showGridlines={showGridlines}
        paginatorDropdownAppendTo="self"
      >
        {columns.map((col, index) => (
          <Column
            key={col}
            field={col.field}
            header={col.header}
            sortable={col.sortable || false}
            style={col.style}
            body={col.body || null}
            colSpan={col.colSpan || null}
            bodyClassName={col.bodyClassName || null}
            headerStyle={col.headerStyle || null}
            headerClassName={col.headerClassName || null}
          />
        ))}
      </DataTable>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.paginator === nextProps.paginator &&
    prevProps.value === nextProps.value &&
    prevProps.columns === nextProps.columns
  );
};

export default memo(GeneralTable, areEqual);
