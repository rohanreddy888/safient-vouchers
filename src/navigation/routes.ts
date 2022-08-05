import { LandingScreen } from '../screens';
import { RouteName } from './route-name';
import { RoutePath } from './route-path';

export interface IRoute {
  path: string;
  name: RouteName;
  exact: boolean;
  component: React.ComponentType<any>;
  props?: any;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: RoutePath.welcome,
    name: RouteName.welcome,
    exact: true,
    private: true,
    component: LandingScreen,
    props: { name: 'LandingPage' },
  },
];
