/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { DefaultTheme } from 'styled-components/native';

interface IColorType {
  color: string;
  contrast: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: IColorType;
    background: IColorType;
  }
}
