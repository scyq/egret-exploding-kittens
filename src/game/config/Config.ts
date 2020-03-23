namespace Config {
    export const GameId: number = 1;
    export const Gm: boolean = true;

    // net
    export const TimeOutMs: number = 5000;
    export const TimeWaitMs: number = 500;
    export const ResourceUrl: string = '/resource/';
    // export const ServerUrlDebug: string = 'http://101.200.242.57:13002/'; // prod
    // export const ServerUrlDebug: string = 'http://39.104.22.7:13002/'; // dev
    export const ServerUrlDebug: string = 'http://localhost:13002/'; // local

    export const DebugMode: boolean = true;
    export const TestMode: boolean = true;
}
