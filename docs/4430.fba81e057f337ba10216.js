"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[4430],{84430:(U,_,a)=>{a.r(_),a.d(_,{ActivitiesModule:()=>F});var g=a(63423),l=a(76627),f=a(44466),c=a(16738),t=a(37716),x=a(26215),d=a(93342),u=a(91841);let v=(()=>{class i{constructor(n){this._httpClient=n,this._activities=new x.X(null)}get activities(){return this._activities.asObservable()}getActivities(){return this._httpClient.get("api/pages/activities").pipe((0,d.b)(n=>{this._activities.next(n)}))}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(u.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var s=a(38583);function y(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"li",11),t.TgZ(2,"div",16),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&i){const n=t.oxw().$implicit,o=t.oxw(3);t.xp6(3),t.hij(" ",o.getRelativeFormat(n.date)," ")}}function A(i,e){1&i&&(t.ynx(0),t._UZ(1,"div",17),t.BQk())}function h(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",18),t._UZ(2,"mat-icon",19),t.qZA(),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("svgIcon",n.icon)}}function Z(i,e){if(1&i&&(t.ynx(0),t._UZ(1,"img",20),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH)("alt","Activity image")}}function T(i,e){if(1&i&&(t.ynx(0),t._UZ(1,"div",21),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",n.description,t.oJD)}}function Q(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"a",23),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("routerLink",n.link),t.xp6(1),t.hij(" ",n.linkedContent," ")}}function C(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"a",24),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("href",n.link,t.LSH),t.xp6(1),t.hij(" ",n.linkedContent," ")}}function I(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",22),t._uU(2,"\u2022"),t.qZA(),t.YNc(3,Q,3,2,"ng-container",10),t.YNc(4,C,3,2,"ng-container",10),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",n.useRouter),t.xp6(1),t.Q6J("ngIf",!n.useRouter)}}function k(i,e){if(1&i&&(t.ynx(0),t._UZ(1,"div",25),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",n.extraContent,t.oJD)}}function w(i,e){if(1&i&&(t.ynx(0),t.YNc(1,y,4,1,"ng-container",10),t.TgZ(2,"li",11),t.YNc(3,A,2,0,"ng-container",10),t.TgZ(4,"div",12),t.YNc(5,h,3,1,"ng-container",10),t.YNc(6,Z,2,2,"ng-container",10),t.TgZ(7,"div",13),t.YNc(8,T,2,1,"ng-container",10),t.TgZ(9,"div",14),t.TgZ(10,"div",15),t._uU(11),t.ALo(12,"date"),t.qZA(),t.YNc(13,I,5,2,"ng-container",10),t.qZA(),t.YNc(14,k,2,1,"ng-container",10),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&i){const n=e.$implicit,o=e.index,r=e.first,O=e.last,m=t.oxw(2).ngIf,p=t.oxw();t.xp6(1),t.Q6J("ngIf",r||!p.isSameDay(n.date,m[o-1].date)),t.xp6(2),t.Q6J("ngIf",!O&&p.isSameDay(n.date,m[o+1].date)),t.xp6(2),t.Q6J("ngIf",n.icon&&!n.image),t.xp6(1),t.Q6J("ngIf",n.image),t.xp6(2),t.Q6J("ngIf",n.description),t.xp6(3),t.hij(" ",t.xi3(12,8,n.date,"MMM dd, h:mm a")," "),t.xp6(2),t.Q6J("ngIf",n.linkedContent),t.xp6(1),t.Q6J("ngIf",n.extraContent)}}function S(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",8),t.TgZ(2,"ol"),t.YNc(3,w,15,11,"ng-container",9),t.qZA(),t.qZA(),t.BQk()),2&i){const n=t.oxw().ngIf,o=t.oxw();t.xp6(3),t.Q6J("ngForOf",n)("ngForTrackBy",o.trackByFn)}}function J(i,e){if(1&i&&(t.ynx(0),t.YNc(1,S,4,2,"ng-container",5),t.BQk()),2&i){const n=e.ngIf;t.oxw();const o=t.MAs(12);t.xp6(1),t.Q6J("ngIf",n.length)("ngIfElse",o)}}function B(i,e){1&i&&t._uU(0," Loading... ")}function Y(i,e){1&i&&t._uU(0," There are is activity at the moment... ")}const N=[{path:"",component:(()=>{class i{constructor(n){this._activityService=n}ngOnInit(){this.activities$=this._activityService.activities}isSameDay(n,o){return c(n,c.ISO_8601).isSame(c(o,c.ISO_8601),"day")}getRelativeFormat(n){const o=c().startOf("day"),r=c().subtract(1,"day").startOf("day");return c(n,c.ISO_8601).isSame(o,"day")?"Today":c(n,c.ISO_8601).isSame(r,"day")?"Yesterday":c(n,c.ISO_8601).fromNow()}trackByFn(n,o){return o.id||n}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["activity"]],decls:13,vars:4,consts:[[1,"relative","flex","flex-col","flex-auto","min-w-0","overflow-hidden"],[1,"flex","flex-col","flex-auto","px-6","py-10","sm:px-16","sm:pt-18","sm:pb-20"],[1,"w-full","max-w-3xl"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"mt-1.5","text-lg","text-secondary"],[4,"ngIf","ngIfElse"],["loading",""],["noActivity",""],[1,"mt-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"relative","flex","py-7"],[1,"relative","flex","flex-auto"],[1,"flex","flex-col","flex-auto","items-start"],[1,"flex","flex-col","sm:flex-row","sm:items-center","mt-2","sm:mt-1","sm:space-x-2","text-md","leading-5"],[1,"text-secondary"],[1,"relative","py-2","px-8","text-md","font-medium","leading-5","rounded-full","bg-primary","text-on-primary"],[1,"absolute","top-7","left-5","w-0.5","h-full","-ml-px","bg-gray-300","dark:bg-gray-600"],[1,"flex","flex-shrink-0","items-center","justify-center","w-10","h-10","mr-4","rounded-full","bg-gray-400"],[1,"icon-size-5","text-white",3,"svgIcon"],[1,"flex-shrink-0","w-10","h-10","mr-4","rounded-full","overflow-hidden","object-cover","object-center",3,"src","alt"],[3,"innerHTML"],[1,"hidden","sm:block"],[1,"cursor-pointer","text-primary",3,"routerLink"],["target","_blank",1,"cursor-pointer","text-primary",3,"href"],[1,"mt-4","py-4","px-5","rounded-lg","bg-gray-200","dark:bg-gray-800",3,"innerHTML"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"All Activities"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Application wide activities are listed here as individual items, starting with the most recent."),t.qZA(),t.YNc(7,J,2,2,"ng-container",5),t.ALo(8,"async"),t.YNc(9,B,1,0,"ng-template",null,6,t.W1O),t.YNc(11,Y,1,0,"ng-template",null,7,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const r=t.MAs(10);t.xp6(7),t.Q6J("ngIf",t.lcZ(8,2,o.activities$))("ngIfElse",r)}},directives:[s.O5,s.sg,l.Hw,g.yS],pipes:[s.Ov,s.uU],encapsulation:2,changeDetection:0}),i})(),resolve:{activities:(()=>{class i{constructor(n){this._activityService=n}resolve(n,o){return this._activityService.getActivities()}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(v))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}];let F=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.Bz.forChild(N),l.Ps,f.m]]}),i})()}}]);