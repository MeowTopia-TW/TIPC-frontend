declare module '@material-tailwind/react' {
  import * as React from 'react';

  // Lightweight, permissive declarations for components used in the repo.
  // These intentionally accept any props to avoid third-party type mismatches.
  export const Card: React.ComponentType<unknown>;
  export const CardBody: React.ComponentType<unknown>;
  export const CardHeader: React.ComponentType<unknown>;
  export const CardFooter: React.ComponentType<unknown>;
  export const Button: React.ComponentType<unknown>;
  export const Typography: React.ComponentType<unknown>;

  const _default: {
  Card: React.ComponentType<unknown>;
  CardBody: React.ComponentType<unknown>;
  CardHeader: React.ComponentType<unknown>;
  CardFooter: React.ComponentType<unknown>;
  Button: React.ComponentType<unknown>;
  Typography: React.ComponentType<unknown>;
  };

  export default _default;
}
