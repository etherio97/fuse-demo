"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[2659],{32659:(ae,U,r)=>{r.r(U),r.d(U,{TasksModule:()=>ee});var g=r(63423),h=r(83461),S=r(21554),D=r(51095),q=r(7539),I=r(72458),T=r(43220),L=r(1769),Z=r(98295),Q=r(76627),w=r(83166),C=r(33935),O=r(36063),E=r(12178),P=r(82613),$=r(67441),y=r(23017),N=r(11436),b=r(16738),z=r(7853),j=r(44466),t=r(37716);let H=(()=>{class n{canDeactivate(e,s,i,o){let c=o.root;for(;c.firstChild;)c=c.firstChild;return!(o.url.includes("/tasks")&&!c.paramMap.get("id"))||e.closeDrawer().then(()=>!0)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=r(40205),G=r(5304),J=r(26215),K=r(25917),A=r(93342),u=r(15257),d=r(43190),k=r(88002),x=r(45435),V=r(91841);let v=(()=>{class n{constructor(e){this._httpClient=e,this._tags=new J.X(null),this._task=new J.X(null),this._tasks=new J.X(null)}get tags$(){return this._tags.asObservable()}get task$(){return this._task.asObservable()}get tasks$(){return this._tasks.asObservable()}getTags(){return this._httpClient.get("api/apps/tasks/tags").pipe((0,A.b)(e=>{this._tags.next(e)}))}createTag(e){return this.tags$.pipe((0,u.q)(1),(0,d.w)(s=>this._httpClient.post("api/apps/tasks/tag",{tag:e}).pipe((0,k.U)(i=>(this._tags.next([...s,i]),i)))))}updateTag(e,s){return this.tags$.pipe((0,u.q)(1),(0,d.w)(i=>this._httpClient.patch("api/apps/tasks/tag",{id:e,tag:s}).pipe((0,k.U)(o=>{const c=i.findIndex(l=>l.id===e);return i[c]=o,this._tags.next(i),o}))))}deleteTag(e){return this.tags$.pipe((0,u.q)(1),(0,d.w)(s=>this._httpClient.delete("api/apps/tasks/tag",{params:{id:e}}).pipe((0,k.U)(i=>{const o=s.findIndex(c=>c.id===e);return s.splice(o,1),this._tags.next(s),i}),(0,x.h)(i=>i),(0,d.w)(i=>this.tasks$.pipe((0,u.q)(1),(0,k.U)(o=>(o.forEach(c=>{const l=c.tags.findIndex(_=>_===e);l>-1&&c.tags.splice(l,1)}),i)))))))}getTasks(){return this._httpClient.get("api/apps/tasks/all").pipe((0,A.b)(e=>{this._tasks.next(e)}))}updateTasksOrders(e){return this._httpClient.patch("api/apps/tasks/order",{tasks:e})}searchTasks(e){return this._httpClient.get("api/apps/tasks/search",{params:{query:e}})}getTaskById(e){return this._tasks.pipe((0,u.q)(1),(0,k.U)(s=>{const i=s.find(o=>o.id===e)||null;return this._task.next(i),i}),(0,d.w)(s=>s?(0,K.of)(s):(0,R._)("Could not found task with id of "+e+"!")))}createTask(e){return this.tasks$.pipe((0,u.q)(1),(0,d.w)(s=>this._httpClient.post("api/apps/tasks/task",{type:e}).pipe((0,k.U)(i=>(this._tasks.next([i,...s]),i)))))}updateTask(e,s){return this.tasks$.pipe((0,u.q)(1),(0,d.w)(i=>this._httpClient.patch("api/apps/tasks/task",{id:e,task:s}).pipe((0,k.U)(o=>{const c=i.findIndex(l=>l.id===e);return i[c]=o,this._tasks.next(i),o}),(0,d.w)(o=>this.task$.pipe((0,u.q)(1),(0,x.h)(c=>c&&c.id===e),(0,A.b)(()=>(this._task.next(o),o)))))))}deleteTask(e){return this.tasks$.pipe((0,u.q)(1),(0,d.w)(s=>this._httpClient.delete("api/apps/tasks/task",{params:{id:e}}).pipe((0,k.U)(i=>{const o=s.findIndex(c=>c.id===e);return s.splice(o,1),this._tasks.next(s),i}))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(V.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),X=(()=>{class n{constructor(e){this._tasksService=e}resolve(e,s){return this._tasksService.getTags()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),W=(()=>{class n{constructor(e){this._tasksService=e}resolve(e,s){return this._tasksService.getTasks()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),tt=(()=>{class n{constructor(e,s){this._router=e,this._tasksService=s}resolve(e,s){return this._tasksService.getTaskById(e.paramMap.get("id")).pipe((0,G.K)(i=>{console.error(i);const o=s.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(o),(0,R._)(i)}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.F0),t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),et=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tasks"]],decls:1,vars:0,template:function(e,s){1&e&&t._UZ(0,"router-outlet")},directives:[g.lC],encapsulation:2,changeDetection:0}),n})();var m=r(38583),Y=r(79765),nt=r(22759),p=r(46782),st=r(91812),it=r(63575);const at=["matDrawer"];function ot(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"All tasks completed!"),t.qZA())}function rt(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("",e.tasksCount.incomplete," remaining tasks")}}function ct(n,a){1&n&&t._UZ(0,"div",28)}function lt(n,a){1&n&&(t.ynx(0),t._UZ(1,"div",29),t.BQk())}function gt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",31),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function pt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function mt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit;return t.oxw(2).toggleCompleted(i)}),t.YNc(1,gt,2,1,"ng-container",9),t.YNc(2,pt,2,1,"ng-container",9),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.completed),t.xp6(1),t.Q6J("ngIf",!e.completed)}}function ut(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.title)}}function dt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span",33),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij("",t.lcZ(3,1,e.type)," title")}}function _t(n,a){1&n&&t._UZ(0,"mat-icon",37),2&n&&t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down")("title","Low")}function kt(n,a){1&n&&t._UZ(0,"mat-icon",38),2&n&&t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up")("title","High")}function ft(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",34),t.YNc(2,_t,1,2,"mat-icon",35),t.YNc(3,kt,1,2,"mat-icon",36),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",0===e.priority),t.xp6(1),t.Q6J("ngIf",2===e.priority)}}function ht(n,a){if(1&n&&(t.TgZ(0,"div",39),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.dueDate,"LLL dd")," ")}}const Tt=function(n,a,e){return{"h-12 text-lg font-semibold bg-gray-50 dark:bg-transparent":n,"h-16":a,"text-hint":e}},xt=function(n){return[n]};function vt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",19),t.YNc(2,ct,1,0,"div",20),t.TgZ(3,"div",21),t.YNc(4,lt,2,0,"ng-container",9),t.TgZ(5,"div",22),t._UZ(6,"mat-icon",23),t.qZA(),t.YNc(7,mt,3,2,"button",24),t.TgZ(8,"a",25),t.TgZ(9,"div",26),t.YNc(10,ut,3,1,"ng-container",9),t.YNc(11,dt,4,3,"ng-container",9),t.qZA(),t.YNc(12,ft,4,2,"ng-container",9),t.YNc(13,ht,3,4,"div",27),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&n){const e=a.$implicit,s=a.first,i=t.oxw(2);t.xp6(1),t.ekj("border-t",s),t.Q6J("id","task-"+e.id)("ngClass",t.kEZ(13,Tt,"section"===e.type,"task"===e.type,e.completed))("cdkDragLockAxis","y"),t.xp6(3),t.Q6J("ngIf",i.selectedTask&&i.selectedTask.id===e.id),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:menu"),t.xp6(1),t.Q6J("ngIf","task"===e.type),t.xp6(1),t.Q6J("routerLink",t.VKq(17,xt,e.id)),t.xp6(2),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",!e.title),t.xp6(1),t.Q6J("ngIf","task"===e.type),t.xp6(1),t.Q6J("ngIf","task"===e.type)}}function Zt(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17),t.NdJ("cdkDropListDropped",function(i){return t.CHM(e),t.oxw().dropped(i)}),t.YNc(2,vt,14,19,"ng-container",18),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("cdkDropListData",e.tasks),t.xp6(1),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",e.trackByFn)}}function Ct(n,a){1&n&&(t.TgZ(0,"div",40),t._UZ(1,"mat-icon",41),t.TgZ(2,"div",42),t._uU(3,"Add a task to start planning!"),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:bulleted_list"))}let M=(()=>{class n{constructor(e,s,i,o,c,l,_){this._activatedRoute=e,this._changeDetectorRef=s,this._document=i,this._router=o,this._tasksService=c,this._fuseMediaWatcherService=l,this._fuseNavigationService=_,this.tasksCount={completed:0,incomplete:0,total:0},this._unsubscribeAll=new Y.xQ}ngOnInit(){this._tasksService.tags$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tags=e,this._changeDetectorRef.markForCheck()}),this._tasksService.tasks$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tasks=e,this.tasksCount.total=this.tasks.filter(s=>"task"===s.type).length,this.tasksCount.completed=this.tasks.filter(s=>"task"===s.type&&s.completed).length,this.tasksCount.incomplete=this.tasksCount.total-this.tasksCount.completed,this._changeDetectorRef.markForCheck(),setTimeout(()=>{const s=this._fuseNavigationService.getComponent("mainNavigation");s&&(this._fuseNavigationService.getItem("apps.tasks",s.navigation).subtitle=this.tasksCount.incomplete+" remaining tasks",s.refresh())})}),this._tasksService.task$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.selectedTask=e,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.drawerMode=e.matches?"side":"over",this._changeDetectorRef.markForCheck()}),(0,nt.R)(this._document,"keydown").pipe((0,p.R)(this._unsubscribeAll),(0,x.h)(e=>(!0===e.ctrlKey||e.metaKey)&&("/"===e.key||"."===e.key))).subscribe(e=>{"/"===e.key&&this.createTask("task"),"."===e.key&&this.createTask("section")})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}createTask(e){this._tasksService.createTask(e).subscribe(s=>{this._router.navigate(["./",s.id],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()})}toggleCompleted(e){e.completed=!e.completed,this._tasksService.updateTask(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()}dropped(e){(0,h.bA)(e.container.data,e.previousIndex,e.currentIndex),this._tasksService.updateTasksOrders(e.container.data).subscribe(),this._changeDetectorRef.markForCheck()}trackByFn(e,s){return s.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz),t.Y36(t.sBO),t.Y36(m.K0),t.Y36(g.F0),t.Y36(v),t.Y36(st.T),t.Y36(it.Jf))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tasks-list"]],viewQuery:function(e,s){if(1&e&&t.Gf(at,7),2&e){let i;t.iGM(i=t.CRH())&&(s.matDrawer=i.first)}},decls:26,vars:14,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-128","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","py-8","px-6","md:px-8"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"ml-0.5","font-medium","text-secondary"],[4,"ngIf"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color","matTooltip","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],["mat-flat-button","",1,"ml-3",3,"color","matTooltip","click"],[4,"ngIf","ngIfElse"],["noTasks",""],["cdkDropList","",1,"divide-y",3,"cdkDropListData","cdkDropListDropped"],[4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"group","w-full","select-none","hover:bg-gray-100","dark:hover:bg-hover",3,"id","ngClass","cdkDragLockAxis"],["class","flex flex-0 w-0 h-0",4,"cdkDragPreview"],[1,"relative","flex","items-center","h-full","pl-10"],["cdkDragHandle","",1,"md:hidden","absolute","flex","items-center","justify-center","inset-y-0","left-0","w-8","cursor-move","md:group-hover:flex"],[1,"icon-size-5","text-hint",3,"svgIcon"],["class","mr-2 -ml-2.5 leading-none","mat-icon-button","",3,"click",4,"ngIf"],[1,"flex","flex-auto","items-center","min-w-0","h-full","pr-7",3,"routerLink"],[1,"flex-auto","mr-2","truncate"],["class","text-sm whitespace-nowrap text-secondary",4,"ngIf"],[1,"flex","flex-0","w-0","h-0"],[1,"z-10","absolute","-top-px","right-0","-bottom-px","flex","flex-0","w-1","bg-primary"],["mat-icon-button","",1,"mr-2","-ml-2.5","leading-none",3,"click"],[1,"text-primary",3,"svgIcon"],[1,"text-hint",3,"svgIcon"],[1,"select-none","text-hint"],[1,"w-4","h-4","mr-3"],["class","icon-size-4 text-green-600 dark:text-green-400",3,"svgIcon","title",4,"ngIf"],["class","icon-size-4 text-red-600 dark:text-red-400",3,"svgIcon","title",4,"ngIf"],[1,"icon-size-4","text-green-600","dark:text-green-400",3,"svgIcon","title"],[1,"icon-size-4","text-red-600","dark:text-red-400",3,"svgIcon","title"],[1,"text-sm","whitespace-nowrap","text-secondary"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-drawer-container",1),t.NdJ("backdropClick",function(){return s.onBackdropClicked()}),t.TgZ(2,"mat-drawer",2,3),t._UZ(4,"router-outlet"),t.qZA(),t.TgZ(5,"mat-drawer-content",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div"),t.TgZ(9,"div",7),t._uU(10,"Tasks"),t.qZA(),t.TgZ(11,"div",8),t.YNc(12,ot,2,0,"span",9),t.YNc(13,rt,2,1,"span",9),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"button",11),t.NdJ("click",function(){return s.createTask("section")}),t._UZ(16,"mat-icon",12),t.TgZ(17,"span",13),t._uU(18,"Add Section"),t.qZA(),t.qZA(),t.TgZ(19,"button",14),t.NdJ("click",function(){return s.createTask("task")}),t._UZ(20,"mat-icon",12),t.TgZ(21,"span",13),t._uU(22,"Add Task"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(23,Zt,3,3,"ng-container",15),t.YNc(24,Ct,4,1,"ng-template",null,16,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.MAs(25);t.xp6(2),t.Q6J("mode",s.drawerMode)("opened",!1)("position","end")("disableClose",!0),t.xp6(10),t.Q6J("ngIf",0===s.tasksCount.incomplete),t.xp6(1),t.Q6J("ngIf",0!==s.tasksCount.incomplete),t.xp6(2),t.Q6J("color","accent")("matTooltip","Shortcut: Ctrl + ."),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(3),t.Q6J("color","primary")("matTooltip","Shortcut: Ctrl + /"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(3),t.Q6J("ngIf",s.tasks&&s.tasks.length>0)("ngIfElse",i)}},directives:[y.kh,y.jA,g.lC,y.LW,m.O5,D.lW,N.gM,Q.Hw,h.Wj,m.sg,h.Zt,m.mk,h.pV,h.Bh,g.yS],pipes:[m.rS,m.uU],encapsulation:2,changeDetection:0}),n})();var yt=r(87636),B=r(54395),bt=r(5202),f=r(3679),At=r(1400),Dt=r(58203),It=r(3005);const Qt=["tagsPanelOrigin"],wt=["tagsPanel"],Jt=["titleField"];function Ft(n,a){1&n&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"mat-icon",7),t.TgZ(3,"span",40),t._uU(4,"MARK AS COMPLETE"),t.qZA(),t.qZA(),t.BQk()),2&n&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function Ut(n,a){1&n&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"mat-icon",41),t.TgZ(3,"span",40),t._uU(4,"MARK AS INCOMPLETE"),t.qZA(),t.qZA(),t.BQk()),2&n&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function qt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",43),t.TgZ(2,"span",44),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=a.$implicit;t.xp6(3),t.Oqu(e.title)}}function Lt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,qt,4,1,"ng-container",42),t.ALo(2,"fuseFindByKey"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,e.task.tags,"id",e.tags))("ngForTrackBy",e.trackByFn)}}function Nt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.TgZ(2,"span",46),t._uU(3,"Edit"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:pencil-alt"))}function Rt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.TgZ(2,"span",46),t._uU(3,"Add"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"))}function Yt(n,a){1&n&&t._UZ(0,"mat-icon",45),2&n&&t.Q6J("svgIcon","heroicons_solid:pencil-alt")}function Mt(n,a){1&n&&t._UZ(0,"mat-icon",45),2&n&&t.Q6J("svgIcon","heroicons_solid:check")}function Bt(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",56),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).toggleTaskTag(o)}),t._UZ(2,"mat-checkbox",57),t.TgZ(3,"div",58),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=a.$implicit,s=t.oxw(3);t.xp6(2),t.Q6J("color","primary")("checked",s.task.tags.includes(e.id)),t.xp6(2),t.Oqu(e.title)}}function St(n,a){if(1&n&&(t.ynx(0),t.YNc(1,Bt,5,3,"ng-container",42),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.filteredTags)("ngForTrackBy",e.trackByFn)}}function Ot(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",5),t.TgZ(2,"mat-form-field",60),t.TgZ(3,"input",61),t.NdJ("input",function(i){const c=t.CHM(e).$implicit;return t.oxw(3).updateTagTitle(c,i)}),t.qZA(),t.TgZ(4,"button",62),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).deleteTag(o)}),t._UZ(5,"mat-icon",63),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=a.$implicit;t.xp6(3),t.Q6J("value",e.title),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function Et(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",59),t.YNc(2,Ot,6,2,"ng-container",42),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.filteredTags)("ngForTrackBy",e.trackByFn)}}function Pt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",64),t.NdJ("click",function(){t.CHM(e),t.oxw();const i=t.MAs(6);return t.oxw().createTag(i.value),i.value=""}),t._UZ(1,"mat-icon",65),t.TgZ(2,"div",66),t._uU(3,'Create "'),t.TgZ(4,"b"),t._uU(5),t.qZA(),t._uU(6,'"'),t.qZA(),t.qZA()}if(2&n){t.oxw();const e=t.MAs(6);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(4),t.Oqu(e.value)}}function $t(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",47),t.TgZ(1,"div",48),t.TgZ(2,"div",5),t._UZ(3,"mat-icon",45),t.TgZ(4,"div",49),t.TgZ(5,"input",50,51),t.NdJ("input",function(i){return t.CHM(e),t.oxw().filterTags(i)})("keydown",function(i){return t.CHM(e),t.oxw().filterTagsInputKeyDown(i)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"button",52),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggleTagsEditMode()}),t.YNc(8,Yt,1,1,"mat-icon",53),t.YNc(9,Mt,1,1,"mat-icon",53),t.qZA(),t.qZA(),t.TgZ(10,"div",54),t.YNc(11,St,2,2,"ng-container",4),t.YNc(12,Et,3,2,"ng-container",4),t.YNc(13,Pt,7,2,"div",55),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(6),s=t.oxw();t.xp6(3),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(2),t.Q6J("maxLength",30),t.xp6(3),t.Q6J("ngIf",!s.tagsEditMode),t.xp6(1),t.Q6J("ngIf",s.tagsEditMode),t.xp6(2),t.Q6J("ngIf",!s.tagsEditMode),t.xp6(1),t.Q6J("ngIf",s.tagsEditMode),t.xp6(1),t.Q6J("ngIf",s.shouldShowCreateTagButton(e.value))}}function zt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.TgZ(2,"span",67),t._uU(3,"Low"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"))}function jt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",68),t.TgZ(2,"span",67),t._uU(3,"Normal"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:minus"))}function Ht(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",68),t.TgZ(2,"span",67),t._uU(3,"High"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"))}function Gt(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,e.task.dueDate,"longDate"))}}function Kt(n,a){1&n&&(t.ynx(0),t._uU(1,"Not set"),t.BQk())}const Vt=function(){return["../"]},Xt=function(n,a,e){return{"text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500":n,"text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-500":a,"text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500":e}},F=function(n){return{"bg-hover":n}},Wt=function(n,a,e){return{"text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700":n,"text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500":a,"text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500":e}},te=[{path:"",component:et,resolve:{tags:X},children:[{path:"",component:M,resolve:{tasks:W},children:[{path:":id",component:(()=>{class n{constructor(e,s,i,o,c,l,_,ne,se,ie){this._activatedRoute=e,this._changeDetectorRef=s,this._formBuilder=i,this._fuseConfirmationService=o,this._renderer2=c,this._router=l,this._tasksListComponent=_,this._tasksService=ne,this._overlay=se,this._viewContainerRef=ie,this.tagsEditMode=!1,this._unsubscribeAll=new Y.xQ}ngOnInit(){this._tasksListComponent.matDrawer.open(),this.taskForm=this._formBuilder.group({id:[""],type:[""],title:[""],notes:[""],completed:[!1],dueDate:[null],priority:[0],tags:[[]],order:[0]}),this._tasksService.tags$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tags=e,this.filteredTags=e,this._changeDetectorRef.markForCheck()}),this._tasksService.tasks$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tasks=e,this._changeDetectorRef.markForCheck()}),this._tasksService.task$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this._tasksListComponent.matDrawer.open(),this.task=e,this.taskForm.patchValue(e,{emitEvent:!1}),this._changeDetectorRef.markForCheck()}),this.taskForm.valueChanges.pipe((0,A.b)(e=>{this.task=(0,bt.Z)(this.task,e)}),(0,B.b)(300),(0,p.R)(this._unsubscribeAll)).subscribe(e=>{this._tasksService.updateTask(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()}),this._router.events.pipe((0,p.R)(this._unsubscribeAll),(0,x.h)(e=>e instanceof g.m2)).subscribe(()=>{this._titleField.nativeElement.focus()})}ngAfterViewInit(){this._tasksListComponent.matDrawer.openedChange.pipe((0,p.R)(this._unsubscribeAll),(0,x.h)(e=>e)).subscribe(()=>{this._titleField.nativeElement.focus()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete(),this._tagsPanelOverlayRef&&this._tagsPanelOverlayRef.dispose()}closeDrawer(){return this._tasksListComponent.matDrawer.close()}toggleCompleted(){const e=this.taskForm.get("completed");e.setValue(!e.value)}openTagsPanel(){this._tagsPanelOverlayRef=this._overlay.create({backdropClass:"",hasBackdrop:!0,scrollStrategy:this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().flexibleConnectedTo(this._tagsPanelOrigin.nativeElement).withFlexibleDimensions(!0).withViewportMargin(64).withLockedPosition(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"}])}),this._tagsPanelOverlayRef.attachments().subscribe(()=>{this._tagsPanelOverlayRef.overlayElement.querySelector("input").focus()});const e=new yt.UE(this._tagsPanel,this._viewContainerRef);this._tagsPanelOverlayRef.attach(e),this._tagsPanelOverlayRef.backdropClick().subscribe(()=>{this._tagsPanelOverlayRef&&this._tagsPanelOverlayRef.hasAttached()&&(this._tagsPanelOverlayRef.detach(),this.filteredTags=this.tags,this.tagsEditMode=!1),e&&e.isAttached&&e.detach()})}toggleTagsEditMode(){this.tagsEditMode=!this.tagsEditMode}filterTags(e){const s=e.target.value.toLowerCase();this.filteredTags=this.tags.filter(i=>i.title.toLowerCase().includes(s))}filterTagsInputKeyDown(e){if("Enter"!==e.key)return;if(0===this.filteredTags.length)return this.createTag(e.target.value),void(e.target.value="");const s=this.filteredTags[0];this.task.tags.find(o=>o===s.id)?this.deleteTagFromTask(s):this.addTagToTask(s)}createTag(e){this._tasksService.createTag({title:e}).subscribe(i=>{this.addTagToTask(i)})}updateTagTitle(e,s){e.title=s.target.value,this._tasksService.updateTag(e.id,e).pipe((0,B.b)(300)).subscribe(),this._changeDetectorRef.markForCheck()}deleteTag(e){this._tasksService.deleteTag(e.id).subscribe(),this._changeDetectorRef.markForCheck()}addTagToTask(e){this.task.tags.unshift(e.id),this.taskForm.get("tags").patchValue(this.task.tags),this._changeDetectorRef.markForCheck()}deleteTagFromTask(e){this.task.tags.splice(this.task.tags.findIndex(s=>s===e.id),1),this.taskForm.get("tags").patchValue(this.task.tags),this._changeDetectorRef.markForCheck()}toggleTaskTag(e){this.task.tags.includes(e.id)?this.deleteTagFromTask(e):this.addTagToTask(e)}shouldShowCreateTagButton(e){return!(""===e||this.tags.findIndex(s=>s.title.toLowerCase()===e.toLowerCase())>-1)}setTaskPriority(e){this.taskForm.get("priority").setValue(e)}isOverdue(){return b(this.task.dueDate,b.ISO_8601).isBefore(b(),"days")}deleteTask(){this._fuseConfirmationService.open({title:"Delete task",message:"Are you sure you want to delete this task? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(s=>{if("confirmed"===s){const i=this.task.id,o=this.tasks.findIndex(_=>_.id===i),c=o+(o===this.tasks.length-1?-1:1),l=1===this.tasks.length&&this.tasks[0].id===i?null:this.tasks[c].id;this._tasksService.deleteTask(i).subscribe(_=>{!_||this._router.navigate(l?["../",l]:["../"],{relativeTo:this._activatedRoute})}),this._changeDetectorRef.markForCheck()}})}trackByFn(e,s){return s.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz),t.Y36(t.sBO),t.Y36(f.qu),t.Y36(At.R),t.Y36(t.Qsj),t.Y36(g.F0),t.Y36(M),t.Y36(v),t.Y36(Dt.aV),t.Y36(t.s_b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tasks-details"]],viewQuery:function(e,s){if(1&e&&(t.Gf(Qt,5),t.Gf(wt,5),t.Gf(Jt,5)),2&e){let i;t.iGM(i=t.CRH())&&(s._tagsPanelOrigin=i.first),t.iGM(i=t.CRH())&&(s._tagsPanel=i.first),t.iGM(i=t.CRH())&&(s._titleField=i.first)}},decls:82,vars:50,consts:[[1,"flex","flex-auto"],[1,"flex","flex-col","flex-auto","p-6","pt-10","sm:p-8","sm:pt-10","overflow-y-auto",3,"formGroup"],[1,"flex","items-center","justify-between","-mt-3","-ml-4"],["mat-button","",1,"pr-4","pl-3.5",3,"click"],[4,"ngIf"],[1,"flex","items-center"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["moreMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button","",3,"routerLink"],[1,"mt-6","mb-8"],[1,"fuse-mat-textarea","fuse-mat-no-subscript","w-full"],["matInput","","matTextareaAutosize","",3,"formControlName","spellcheck"],["titleField",""],[1,"mt-8"],[1,"font-medium","mb-1.5"],[1,"flex","flex-wrap","items-center","-m-1.5"],[1,"flex","items-center","justify-center","px-4","m-1.5","rounded-full","leading-9","cursor-pointer","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700",3,"click"],["tagsPanelOrigin",""],["tagsPanel",""],[1,"flex","flex-wrap","items-center","mt-8"],[1,"font-medium"],[1,"flex","items-center","mt-1.5","px-4","leading-9","rounded-full","cursor-pointer",3,"ngClass","matMenuTriggerFor"],["priorityMenu","matMenu"],["mat-menu-item","",3,"ngClass","click"],[1,"inline-flex","items-center","justify-between","w-full","min-w-30","leading-5"],[1,"mr-0","icon-size-4","text-green-600","dark:text-green-500",3,"svgIcon"],[1,"mr-0","icon-size-4","text-gray-600","dark:text-gray-500",3,"svgIcon"],[1,"mr-0","icon-size-4","text-red-600","dark:text-red-500",3,"svgIcon"],[1,"ml-6"],[1,"relative","flex","items-center","mt-1.5","px-4","leading-9","rounded-full","cursor-pointer",3,"ngClass","click"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-2","text-md","font-medium"],[1,"fuse-mat-no-subscript","fuse-mat-dense","invisible","absolute","inset-0","-mt-2.5","opacity-0","pointer-events-none"],["matInput","",3,"formControlName","matDatepicker"],["dueDatePicker",""],["mat-button","","matDatepickerCancel","",3,"click"],["mat-flat-button","","matDatepickerApply","",1,"",3,"color"],[1,"flex","items-center","justify-center"],[1,"ml-2","font-semibold"],[1,"text-primary",3,"svgIcon"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","justify-center","px-4","m-1.5","rounded-full","leading-9","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"text-md","font-medium","whitespace-nowrap"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-1.5","text-md","font-medium","whitespace-nowrap"],[1,"w-60","rounded","border","shadow-md","bg-card"],[1,"flex","items-center","m-3","mr-2"],[1,"ml-2"],["type","text","placeholder","Enter tag name",1,"w-full","min-w-0","py-1","border-0",3,"maxLength","input","keydown"],["newTagInput",""],["mat-icon-button","",1,"ml-1",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"flex","flex-col","max-h-64","py-2","border-t","overflow-y-auto"],["class","flex items-center h-10 min-h-10 -ml-0.5 pl-4 pr-3 leading-none cursor-pointer hover:bg-hover","matRipple","",3,"click",4,"ngIf"],["matRipple","",1,"flex","items-center","h-10","min-h-10","px-4","cursor-pointer","hover:bg-hover",3,"click"],[1,"flex","items-center","h-10","min-h-10",3,"color","checked"],[1,"ml-1"],[1,"py-2","space-y-2"],[1,"fuse-mat-dense","fuse-mat-no-subscript","w-full","mx-4"],["matInput","",3,"value","input"],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5","ml-2",3,"svgIcon"],["matRipple","",1,"flex","items-center","h-10","min-h-10","-ml-0.5","pl-4","pr-3","leading-none","cursor-pointer","hover:bg-hover",3,"click"],[1,"mr-2","icon-size-5",3,"svgIcon"],[1,"break-all"],[1,"ml-2","mr-1","text-md","font-medium"],[1,"icon-size-4","text-current",3,"svgIcon"]],template:function(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"div",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return s.toggleCompleted()}),t.YNc(4,Ft,5,1,"ng-container",4),t.YNc(5,Ut,5,1,"ng-container",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"button",6),t._UZ(8,"mat-icon",7),t.qZA(),t.TgZ(9,"mat-menu",null,8),t.TgZ(11,"button",9),t.NdJ("click",function(){return s.deleteTask()}),t._UZ(12,"mat-icon",7),t.TgZ(13,"span"),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"button",10),t._UZ(16,"mat-icon",7),t.qZA(),t.qZA(),t.qZA(),t._UZ(17,"mat-divider",11),t.TgZ(18,"div"),t.TgZ(19,"mat-form-field",12),t.TgZ(20,"mat-label"),t._uU(21),t.qZA(),t._UZ(22,"textarea",13,14),t.qZA(),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"div",16),t._uU(26,"Tags"),t.qZA(),t.TgZ(27,"div",17),t.YNc(28,Lt,3,6,"ng-container",4),t.TgZ(29,"div",18,19),t.NdJ("click",function(){return s.openTagsPanel()}),t.YNc(31,Nt,4,1,"ng-container",4),t.YNc(32,Rt,4,1,"ng-container",4),t.YNc(33,$t,14,7,"ng-template",null,20,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",21),t.TgZ(36,"div"),t.TgZ(37,"div",22),t._uU(38,"Priority"),t.qZA(),t.TgZ(39,"div",23),t.YNc(40,zt,4,1,"ng-container",4),t.YNc(41,jt,4,1,"ng-container",4),t.YNc(42,Ht,4,1,"ng-container",4),t.qZA(),t.TgZ(43,"mat-menu",null,24),t.TgZ(45,"button",25),t.NdJ("click",function(){return s.setTaskPriority(0)}),t.TgZ(46,"span",26),t.TgZ(47,"span",22),t._uU(48,"Low"),t.qZA(),t._UZ(49,"mat-icon",27),t.qZA(),t.qZA(),t.TgZ(50,"button",25),t.NdJ("click",function(){return s.setTaskPriority(1)}),t.TgZ(51,"span",26),t.TgZ(52,"span",22),t._uU(53,"Normal"),t.qZA(),t._UZ(54,"mat-icon",28),t.qZA(),t.qZA(),t.TgZ(55,"button",25),t.NdJ("click",function(){return s.setTaskPriority(2)}),t.TgZ(56,"span",26),t.TgZ(57,"span",22),t._uU(58,"High"),t.qZA(),t._UZ(59,"mat-icon",29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"div",30),t.TgZ(61,"div",22),t._uU(62,"Due date"),t.qZA(),t.TgZ(63,"div",31),t.NdJ("click",function(){return t.CHM(i),t.MAs(71).open()}),t._UZ(64,"mat-icon",32),t.TgZ(65,"span",33),t.YNc(66,Gt,3,4,"ng-container",4),t.YNc(67,Kt,2,0,"ng-container",4),t.qZA(),t.TgZ(68,"mat-form-field",34),t._UZ(69,"input",35),t.TgZ(70,"mat-datepicker",null,36),t.TgZ(72,"mat-datepicker-actions"),t.TgZ(73,"button",37),t.NdJ("click",function(){return s.taskForm.get("dueDate").setValue(null)}),t._uU(74,"Clear "),t.qZA(),t.TgZ(75,"button",38),t._uU(76,"Select "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(77,"div",15),t.TgZ(78,"mat-form-field",12),t.TgZ(79,"mat-label"),t._uU(80,"Notes"),t.qZA(),t._UZ(81,"textarea",13),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const i=t.MAs(10),o=t.MAs(44),c=t.MAs(71);t.xp6(1),t.Q6J("formGroup",s.taskForm),t.xp6(3),t.Q6J("ngIf",!s.taskForm.get("completed").value),t.xp6(1),t.Q6J("ngIf",s.taskForm.get("completed").value),t.xp6(2),t.Q6J("matMenuTriggerFor",i),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:trash"),t.xp6(2),t.hij("Delete ","task"===s.task.type?"task":"section",""),t.xp6(1),t.Q6J("routerLink",t.DdM(35,Vt)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(5),t.Oqu("task"===s.task.type?"Task title":"Section title"),t.xp6(1),t.Q6J("formControlName","title")("spellcheck",!1),t.xp6(6),t.Q6J("ngIf",s.task.tags.length),t.xp6(3),t.Q6J("ngIf",s.task.tags.length),t.xp6(1),t.Q6J("ngIf",!s.task.tags.length),t.xp6(7),t.Q6J("ngClass",t.kEZ(36,Xt,0===s.task.priority,1===s.task.priority,2===s.task.priority))("matMenuTriggerFor",o),t.xp6(1),t.Q6J("ngIf",0===s.task.priority),t.xp6(1),t.Q6J("ngIf",1===s.task.priority),t.xp6(1),t.Q6J("ngIf",2===s.task.priority),t.xp6(3),t.Q6J("ngClass",t.VKq(40,F,0===s.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"),t.xp6(1),t.Q6J("ngClass",t.VKq(42,F,1===s.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:minus"),t.xp6(1),t.Q6J("ngClass",t.VKq(44,F,2===s.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"),t.xp6(4),t.Q6J("ngClass",t.kEZ(46,Wt,!s.task.dueDate,s.task.dueDate&&!s.isOverdue(),s.task.dueDate&&s.isOverdue())),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:calendar"),t.xp6(2),t.Q6J("ngIf",s.task.dueDate),t.xp6(1),t.Q6J("ngIf",!s.task.dueDate),t.xp6(2),t.Q6J("formControlName","dueDate")("matDatepicker",c),t.xp6(6),t.Q6J("color","primary"),t.xp6(6),t.Q6J("formControlName","notes")("spellcheck",!1)}},directives:[f._Y,f.JL,f.sg,D.lW,m.O5,C.p6,Q.Hw,C.VK,C.OP,g.rH,L.d,Z.KE,Z.hX,w.Nt,w.D7,f.Fj,f.JJ,f.u,m.mk,T.hl,T.Mq,T.M5,T.dp,T.DK,m.sg,I.wG,q.oG,Z.R9],pipes:[It.K,m.uU],encapsulation:2,changeDetection:0}),n})(),resolve:{task:tt},canDeactivate:[H]}]}]}];let ee=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[{provide:I.sG,useValue:{parse:{dateInput:b.ISO_8601},display:{dateInput:"ll",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}}],imports:[[g.Bz.forChild(te),h._t,S.Bb,D.ot,q.p9,T.FA,L.t,Z.lN,Q.Ps,w.c,C.Tx,O.Yd,E.Cv,P.Fk,I.si,$.LD,y.SJ,N.AV,z.V,j.m]]}),n})()}}]);