google.maps.__gjsload__('overlay', function(_){var Fw=_.oa("g"),Gw=_.n(),Hw=function(a){a.bg=a.bg||new Gw;return a.bg},Iw=function(a){this.aa=new _.mh(function(){var b=a.bg;if(a.getPanes()){if(a.getProjection()){if(!b.g&&a.onAdd)a.onAdd();b.g=!0;a.draw()}}else{if(b.g)if(a.onRemove)a.onRemove();else a.remove();b.g=!1}},0)},Jw=function(a,b){function c(){return _.oh(e.aa)}var d=Hw(a),e=d.He;e||(e=d.He=new Iw(a));_.B(d.$||[],_.O.removeListener);var f=d.ha=d.ha||new _.In,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Vh=d.Vh||new Fw(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.$=[_.O.addListener(a,"panes_changed",c),_.O.addListener(g,"zoom_changed",c),_.O.addListener(g,"offset_changed",c),_.O.addListener(b,"projection_changed",c),_.O.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.af&&(_.Oi(b,"Ox"),_.go("Ox","-p",a))},
Mw=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.jg()}if(b&&b instanceof _.af){var d=b.__gm;d.overlayLayer?a.__gmop=new Kw(b,a,d.overlayLayer):d.g.then(function(e){e=e.wa;var f=new Lw(b,e);e.ua(f);d.overlayLayer=f;Mw(a)})}}},Kw=function(a,b,c){this.map=a;this.ta=b;this.Pl=c;this.ue=!1;_.Oi(this.map,"Ox");_.go("Ox","-p",this.ta);c.h.push(this);c.g&&Nw(this,c.g);c.i.Sf()},Nw=function(a,b){a.ta.get("projection")!=b&&(a.ta.bindTo("panes",a.map.__gm),a.ta.set("projection",
b))},Lw=function(a,b){this.j=a;this.i=b;this.g=null;this.h=[]};_.A(Fw,_.P);Fw.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.td(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};_.A(Iw,_.P);Kw.prototype.draw=function(){this.ue||(this.ue=!0,this.ta.onAdd&&this.ta.onAdd());this.ta.draw&&this.ta.draw()};Kw.prototype.jg=function(){_.ho("Ox","-p",this.ta);this.ta.unbindAll();this.ta.set("panes",null);this.ta.set("projection",null);_.hb(this.Pl.h,this);this.ue&&(this.ue=!1,this.ta.onRemove?this.ta.onRemove():this.ta.remove())};Lw.prototype.dispose=_.n();
Lw.prototype.Ta=function(a,b,c,d,e,f){var g=this.g=this.g||new _.Bo(this.j,this.i,_.n());g.Ta(a,b,c,d,e,f);a=_.Ca(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Nw(b,g),b.draw()};_.vf("overlay",{Kg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.af||a.__gmop)Mw(a);else{b=a.getMap();var c=Hw(a),d=c.fl;c.fl=b;d&&(c=Hw(a),(d=c.ha)&&d.unbindAll(),(d=c.Vh)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.B(c.$,_.O.removeListener),c.$=null,c.He&&(c.He.aa.Ra(),c.He=null),_.ho("Ox","-p",a));b&&Jw(a,b)}}},preventMapHitsFrom:function(a){_.qp(a,{onClick:function(b){return _.Jo(b.event)},La:function(b){return _.Go(b)},sc:function(b){return _.Ho(b)},
ab:function(b){return _.Ho(b)},Qa:function(b){return _.Io(b)}}).Nc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.re);a.addEventListener("contextmenu",_.re);a.addEventListener("dblclick",_.re);a.addEventListener("mousedown",_.re);a.addEventListener("mousemove",_.re);a.addEventListener("MSPointerDown",_.re);a.addEventListener("pointerdown",_.re);a.addEventListener("touchstart",_.re);a.addEventListener("wheel",_.re)}});});
