import { Container } from 'inversify';
import servicesContainer from 'services/servicesContainer';
import modulesContainer from 'domain/modules/modulesContainer';
import infrastructureContainer from 'infrastructure/infrastructureContainer';

const container = new Container();

container.load(infrastructureContainer);
container.load(servicesContainer);
container.load(modulesContainer);

export default container;
