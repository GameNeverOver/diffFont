/**
 * @description class组件对应的mobx
 */
 import { observable } from 'mobx';

 export const observableValue: any = {
   tabKey: 0
 };
 
 const counterStore = observable(observableValue);
 export default counterStore;
 