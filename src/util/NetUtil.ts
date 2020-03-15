namespace Util {
    export const getCookieValue = (key: string, cookie: string): string => {
        const value = cookie.match('(^|[^;]+)\\s*' + key + '\\s*=\\s*([^;]+)');
        return value ? value.pop() : '';
    };
}
