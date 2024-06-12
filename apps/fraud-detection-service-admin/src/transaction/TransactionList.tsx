import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="destinationAccount" source="destinationAccount" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFraudulent" source="isFraudulent" />
        <TextField label="sourceAccount" source="sourceAccount" />
        <TextField label="status" source="status" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="transactionId" source="transactionId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
