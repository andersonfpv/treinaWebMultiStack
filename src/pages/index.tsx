import SafeEnvironment from 'ui/componentes/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/componentes/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/componentes/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha o seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Anderson Felipe"}
        picture={"https://github.com/andersonfpv.png"}
        rating={3}
        description={'Guaratinguetá-SP'}
      />
    </div>
  );
}
