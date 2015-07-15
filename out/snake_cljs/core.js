// Compiled by ClojureScript 0.0-3308 {}
goog.provide('snake_cljs.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
snake_cljs.core.env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-size","block-size",-1062272384),(20),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null);
snake_cljs.core.rand_color = (function snake_cljs$core$rand_color(){
return (quil.core.random.call(null,(50),(150)) | (0));
});
snake_cljs.core.rand_int_in = (function snake_cljs$core$rand_int_in(max){
return (quil.core.random.call(null,max) | (0));
});
snake_cljs.core.add_points = (function snake_cljs$core$add_points(p1,p2){
var vec__6134 = cljs.core.map.call(null,cljs.core._PLUS_,p1,p2);
var x = cljs.core.nth.call(null,vec__6134,(0),null);
var y = cljs.core.nth.call(null,vec__6134,(1),null);
var block_size = new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,x,(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env) / block_size)),cljs.core.mod.call(null,y,(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env) / block_size))], null);
});
snake_cljs.core.scale_point = (function snake_cljs$core$scale_point(point){
return cljs.core.map.call(null,(function (p1__6135_SHARP_){
return (p1__6135_SHARP_ * new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env));
}),point);
});
snake_cljs.core.make_snake = (function snake_cljs$core$make_snake(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"can-turn?","can-turn?",1588534846),true], null);
});
snake_cljs.core.make_frog = (function snake_cljs$core$make_frog(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_cljs.core.rand_int_in.call(null,(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env) / new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env))),snake_cljs.core.rand_int_in.call(null,(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env) / new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env)))], null);
});
snake_cljs.core.make_game = (function snake_cljs$core$make_game(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),snake_cljs.core.make_snake.call(null),new cljs.core.Keyword(null,"frog","frog",37988944),snake_cljs.core.make_frog.call(null)], null);
});
snake_cljs.core.draw_block = (function snake_cljs$core$draw_block(block){
var vec__6137 = snake_cljs.core.scale_point.call(null,block);
var x = cljs.core.nth.call(null,vec__6137,(0),null);
var y = cljs.core.nth.call(null,vec__6137,(1),null);
var size = new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env);
return quil.core.rect.call(null,x,y,size,size);
});
snake_cljs.core.draw_snake = (function snake_cljs$core$draw_snake(snake){
var color = cljs.core.repeatedly.call(null,(3),snake_cljs.core.rand_color);
cljs.core.apply.call(null,quil.core.fill,color);

var seq__6142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake));
var chunk__6143 = null;
var count__6144 = (0);
var i__6145 = (0);
while(true){
if((i__6145 < count__6144)){
var block = cljs.core._nth.call(null,chunk__6143,i__6145);
snake_cljs.core.draw_block.call(null,block);

var G__6146 = seq__6142;
var G__6147 = chunk__6143;
var G__6148 = count__6144;
var G__6149 = (i__6145 + (1));
seq__6142 = G__6146;
chunk__6143 = G__6147;
count__6144 = G__6148;
i__6145 = G__6149;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__6142);
if(temp__4423__auto__){
var seq__6142__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6142__$1)){
var c__5094__auto__ = cljs.core.chunk_first.call(null,seq__6142__$1);
var G__6150 = cljs.core.chunk_rest.call(null,seq__6142__$1);
var G__6151 = c__5094__auto__;
var G__6152 = cljs.core.count.call(null,c__5094__auto__);
var G__6153 = (0);
seq__6142 = G__6150;
chunk__6143 = G__6151;
count__6144 = G__6152;
i__6145 = G__6153;
continue;
} else {
var block = cljs.core.first.call(null,seq__6142__$1);
snake_cljs.core.draw_block.call(null,block);

var G__6154 = cljs.core.next.call(null,seq__6142__$1);
var G__6155 = null;
var G__6156 = (0);
var G__6157 = (0);
seq__6142 = G__6154;
chunk__6143 = G__6155;
count__6144 = G__6156;
i__6145 = G__6157;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_cljs.core.draw_frog = (function snake_cljs$core$draw_frog(frog){
var d = new cljs.core.Keyword(null,"block-size","block-size",-1062272384).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env);
var vec__6160 = cljs.core.map.call(null,((function (d){
return (function (p1__6158_SHARP_){
return ((d / (2)) + p1__6158_SHARP_);
});})(d))
,snake_cljs.core.scale_point.call(null,frog));
var x = cljs.core.nth.call(null,vec__6160,(0),null);
var y = cljs.core.nth.call(null,vec__6160,(1),null);
cljs.core.apply.call(null,quil.core.fill,cljs.core.repeatedly.call(null,(3),snake_cljs.core.rand_color));

quil.core.ellipse.call(null,x,y,d,d);

quil.core.fill.call(null,(170));

return quil.core.ellipse.call(null,x,y,(d / (2)),(d / (2)));
});
snake_cljs.core.grow_snake = (function snake_cljs$core$grow_snake(snake){
return cljs.core.update_in.call(null,snake,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,snake_cljs.core.add_points.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(snake),cljs.core.last.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake))));
});
snake_cljs.core.eating_QMARK_ = (function snake_cljs$core$eating_QMARK_(snake,frog){
return cljs.core._EQ_.call(null,frog,cljs.core.last.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake)));
});
snake_cljs.core.key_press = (function snake_cljs$core$key_press(state,e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"can-turn?","can-turn?",1588534846).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.assoc_in.call(null,(function (){var pred__6168 = cljs.core._EQ_;
var expr__6169 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__6168.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__6169))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (pred__6168,expr__6169){
return (function (p1__6161_SHARP_){
if(cljs.core._EQ_.call(null,p1__6161_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
}
});})(pred__6168,expr__6169))
);
} else {
if(cljs.core.truth_(pred__6168.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__6169))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (pred__6168,expr__6169){
return (function (p1__6162_SHARP_){
if(cljs.core._EQ_.call(null,p1__6162_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
});})(pred__6168,expr__6169))
);
} else {
if(cljs.core.truth_(pred__6168.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__6169))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (pred__6168,expr__6169){
return (function (p1__6163_SHARP_){
if(cljs.core._EQ_.call(null,p1__6163_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
}
});})(pred__6168,expr__6169))
);
} else {
if(cljs.core.truth_(pred__6168.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__6169))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (pred__6168,expr__6169){
return (function (p1__6164_SHARP_){
if(cljs.core._EQ_.call(null,p1__6164_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
}
});})(pred__6168,expr__6169))
);
} else {
return state;
}
}
}
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"can-turn?","can-turn?",1588534846)], null),false);
} else {
return state;
}
});
snake_cljs.core.setup = (function snake_cljs$core$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(10));

return snake_cljs.core.make_game.call(null);
});
snake_cljs.core.update_state = (function snake_cljs$core$update_state(state){
var frog = new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(state)))),cljs.core.last.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(state)))))?snake_cljs.core.make_game.call(null):state);
var state__$2 = cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242)], null),snake_cljs.core.grow_snake);
var state__$3 = (cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,snake_cljs.core.eating_QMARK_).call(null,new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(state__$2),frog))?cljs.core.update_in.call(null,state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest)):cljs.core.assoc.call(null,state__$2,new cljs.core.Keyword(null,"frog","frog",37988944),snake_cljs.core.make_frog.call(null)));
return cljs.core.assoc_in.call(null,state__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"can-turn?","can-turn?",1588534846)], null),true);
});
snake_cljs.core.draw_state = (function snake_cljs$core$draw_state(state){
quil.core.background.call(null,(170));

snake_cljs.core.draw_frog.call(null,new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(state));

return snake_cljs.core.draw_snake.call(null,new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(state));
});
snake_cljs.core.quil_test = (function snake_cljs$core$quil_test(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267),true], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,snake_cljs.core.update_state))?(function() { 
var G__6171__delegate = function (args){
return cljs.core.apply.call(null,snake_cljs.core.update_state,args);
};
var G__6171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6172__i = 0, G__6172__a = new Array(arguments.length -  0);
while (G__6172__i < G__6172__a.length) {G__6172__a[G__6172__i] = arguments[G__6172__i + 0]; ++G__6172__i;}
  args = new cljs.core.IndexedSeq(G__6172__a,0);
} 
return G__6171__delegate.call(this,args);};
G__6171.cljs$lang$maxFixedArity = 0;
G__6171.cljs$lang$applyTo = (function (arglist__6173){
var args = cljs.core.seq(arglist__6173);
return G__6171__delegate(args);
});
G__6171.cljs$core$IFn$_invoke$arity$variadic = G__6171__delegate;
return G__6171;
})()
:snake_cljs.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(snake_cljs.core.env)], null),new cljs.core.Keyword(null,"title","title",636505583),"Snake",new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,snake_cljs.core.setup))?(function() { 
var G__6174__delegate = function (args){
return cljs.core.apply.call(null,snake_cljs.core.setup,args);
};
var G__6174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6175__i = 0, G__6175__a = new Array(arguments.length -  0);
while (G__6175__i < G__6175__a.length) {G__6175__a[G__6175__i] = arguments[G__6175__i + 0]; ++G__6175__i;}
  args = new cljs.core.IndexedSeq(G__6175__a,0);
} 
return G__6174__delegate.call(this,args);};
G__6174.cljs$lang$maxFixedArity = 0;
G__6174.cljs$lang$applyTo = (function (arglist__6176){
var args = cljs.core.seq(arglist__6176);
return G__6174__delegate(args);
});
G__6174.cljs$core$IFn$_invoke$arity$variadic = G__6174__delegate;
return G__6174;
})()
:snake_cljs.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"snake-cljs",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,snake_cljs.core.key_press))?(function() { 
var G__6177__delegate = function (args){
return cljs.core.apply.call(null,snake_cljs.core.key_press,args);
};
var G__6177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6178__i = 0, G__6178__a = new Array(arguments.length -  0);
while (G__6178__i < G__6178__a.length) {G__6178__a[G__6178__i] = arguments[G__6178__i + 0]; ++G__6178__i;}
  args = new cljs.core.IndexedSeq(G__6178__a,0);
} 
return G__6177__delegate.call(this,args);};
G__6177.cljs$lang$maxFixedArity = 0;
G__6177.cljs$lang$applyTo = (function (arglist__6179){
var args = cljs.core.seq(arglist__6179);
return G__6177__delegate(args);
});
G__6177.cljs$core$IFn$_invoke$arity$variadic = G__6177__delegate;
return G__6177;
})()
:snake_cljs.core.key_press),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,snake_cljs.core.draw_state))?(function() { 
var G__6180__delegate = function (args){
return cljs.core.apply.call(null,snake_cljs.core.draw_state,args);
};
var G__6180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6181__i = 0, G__6181__a = new Array(arguments.length -  0);
while (G__6181__i < G__6181__a.length) {G__6181__a[G__6181__i] = arguments[G__6181__i + 0]; ++G__6181__i;}
  args = new cljs.core.IndexedSeq(G__6181__a,0);
} 
return G__6180__delegate.call(this,args);};
G__6180.cljs$lang$maxFixedArity = 0;
G__6180.cljs$lang$applyTo = (function (arglist__6182){
var args = cljs.core.seq(arglist__6182);
return G__6180__delegate(args);
});
G__6180.cljs$core$IFn$_invoke$arity$variadic = G__6180__delegate;
return G__6180;
})()
:snake_cljs.core.draw_state));
});
goog.exportSymbol('snake_cljs.core.quil_test', snake_cljs.core.quil_test);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5453__5454__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5453__5454__auto__);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267),true], null)))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),snake_cljs.core.quil_test,new cljs.core.Keyword(null,"host-id","host-id",742376279),"snake-cljs"], null));
}

//# sourceMappingURL=core.js.map