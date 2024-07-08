export default class ObjectUtils {
    public isObject = (val: any): boolean => {
        return val != null && typeof val === 'object' && Array.isArray(val) === false;
    }

    public isEmptyObject = (obj: any): boolean => {
        return !Object.keys(obj).length;
    }

    public objectClone = (obj: object): any[] => {
        return JSON.parse(JSON.stringify(obj))
    }

}