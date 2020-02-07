declare type TBreakpointItem = [string, unknown];
declare type TCalculateValue = (defaultValue: unknown, breakpointValues: TBreakpointItem[] | TBreakpointItem, iw?: number) => typeof defaultValue;
export declare const calculateValue: TCalculateValue;
export declare function useBreakpoint(defaultValue: any, breakpointValues: any[]): any;
export declare function useBreakpoint(defaultValue: undefined, breakpointValues: undefined): {
    [key: string]: boolean;
};
export default useBreakpoint;