import container from 'container';
import { IServer, SERVER_TYPE } from 'IServer';

const server = container.get<IServer>(SERVER_TYPE);

server.start().then(() => console.log('Server is running'));
