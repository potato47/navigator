 declare interface ITab{
     title:string;
     apps:Array<IApp>;
 }
 declare interface IApp{
    name:string;
    url:string;
    desc?:string;
 }