import AddCompanyBtn from './components/add-company-btn';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyBtn />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
