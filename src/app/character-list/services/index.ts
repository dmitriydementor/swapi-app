import { CharactersStoreManagerService } from './characters-store-manager.service';
import { PeopleProviderService } from './people-provider.service';

export const services = [
  CharactersStoreManagerService,
  PeopleProviderService,
];

export * from './characters-store-manager.service';
export * from './people-provider.service';
