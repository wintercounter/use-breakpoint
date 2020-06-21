import useBreakpoint from './useBreakpoint';
import useResize from './useResize';
import mediaQuery from './mediaQuery';
export declare const UP = "+";
export declare const DOWN = "-";
export declare const LANDSCAPE = "-";
export declare const PORTRAIT = "|";
interface IOptions {
    breakpoints: {
        [key: string]: number[];
    };
}
export declare let options: any;
export declare const setup: (opts: IOptions) => void;
export declare const breakpoints: {
    micro: number[];
    mi: number[];
    mobile: number[];
    m: number[];
    tablet: number[];
    t: number[];
    small: number[];
    s: number[];
    medium: number[];
    med: number[];
    large: number[];
    l: number[];
    device: number[];
    d: number[];
    smallDevice: number[];
    sd: number[];
};
export default useBreakpoint;
export { useResize, mediaQuery };
