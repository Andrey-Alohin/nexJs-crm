import AddCompanyBtn from '../components/add-company-btn';
import CompanyRow from '../components/company-row';
import CompanyTable from '../components/company-table';
import Header from '../components/header';
import SearchInput from '../components/search-input';
import { Status } from '../components/status-label';
import Toolbar from '../components/toolbar';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costoco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="12.02.2023"
        />
      </CompanyTable>
    </>
  );
}
