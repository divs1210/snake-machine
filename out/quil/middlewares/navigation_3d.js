// Compiled by ClojureScript 0.0-3308 {}
goog.provide('quil.middlewares.navigation_3d');
goog.require('cljs.core');
goog.require('quil.core');
quil.middlewares.navigation_3d.missing_navigation_key_error = [cljs.core.str("state map is missing :navigation-3d key. "),cljs.core.str("Did you accidentally removed it from the state in "),cljs.core.str(":update or any other handler?")].join('');
/**
 * Asserts that state map contains :navigation-2d object.
 */
quil.middlewares.navigation_3d.assert_state_has_navigation = (function quil$middlewares$navigation_3d$assert_state_has_navigation(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_3d.missing_navigation_key_error));
}
});
/**
 * Default position configuration. Check default configuration in
 * 'camera' function.
 */
quil.middlewares.navigation_3d.default_position = (function quil$middlewares$navigation_3d$default_position(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / 2.0),(quil.core.height.call(null) / 2.0),((quil.core.height.call(null) / 2.0) / quil.core.tan.call(null,((quil.core.PI * 60.0) / 360.0)))], null),new cljs.core.Keyword(null,"straight","straight",-1252567854),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null);
});
/**
 * Rotates vector v by angle with axis.
 * Formula is taken from wiki:
 * http://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
 */
quil.middlewares.navigation_3d.rotate_by_axis_and_angle = (function quil$middlewares$navigation_3d$rotate_by_axis_and_angle(v,axis,angle){
var vec__6573 = axis;
var a_x = cljs.core.nth.call(null,vec__6573,(0),null);
var a_y = cljs.core.nth.call(null,vec__6573,(1),null);
var a_z = cljs.core.nth.call(null,vec__6573,(2),null);
var vec__6574 = v;
var x = cljs.core.nth.call(null,vec__6574,(0),null);
var y = cljs.core.nth.call(null,vec__6574,(1),null);
var z = cljs.core.nth.call(null,vec__6574,(2),null);
var cs = quil.core.cos.call(null,angle);
var _cs = ((1) - cs);
var sn = quil.core.sin.call(null,angle);
var a = (cs + ((a_x * a_x) * _cs));
var b = (((a_x * a_y) * _cs) - (a_z * sn));
var c = (((a_x * a_z) * _cs) + (a_y * sn));
var d = (((a_x * a_y) * _cs) + (a_z * sn));
var e = (cs + ((a_y * a_y) * _cs));
var f = (((a_y * a_z) * _cs) - (a_x * sn));
var g = (((a_x * a_z) * _cs) - (a_y * sn));
var h = (((a_y * a_z) * _cs) + (a_x * sn));
var i = (cs + ((a_z * a_z) * _cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((a * x) + (b * y)) + (c * z)),(((d * x) + (e * y)) + (f * z)),(((g * x) + (h * y)) + (i * z))], null);
});
/**
 * Rotates nav-3d configuration left-right. angle positive - rotate right,
 * negative - left.
 */
quil.middlewares.navigation_3d.rotate_lr = (function quil$middlewares$navigation_3d$rotate_lr(nav_3d,angle){
return cljs.core.update_in.call(null,nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),quil.middlewares.navigation_3d.rotate_by_axis_and_angle,new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(nav_3d),angle);
});
/**
 * Vector cross-product: http://en.wikipedia.org/wiki/Cross_product
 */
quil.middlewares.navigation_3d.cross_product = (function quil$middlewares$navigation_3d$cross_product(p__6575,p__6576){
var vec__6579 = p__6575;
var u1 = cljs.core.nth.call(null,vec__6579,(0),null);
var u2 = cljs.core.nth.call(null,vec__6579,(1),null);
var u3 = cljs.core.nth.call(null,vec__6579,(2),null);
var vec__6580 = p__6576;
var v1 = cljs.core.nth.call(null,vec__6580,(0),null);
var v2 = cljs.core.nth.call(null,vec__6580,(1),null);
var v3 = cljs.core.nth.call(null,vec__6580,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((u2 * v3) - (u3 * v2)),((u3 * v1) - (u1 * v3)),((u1 * v2) - (u2 * v1))], null);
});
/**
 * Multiply vector v by scalar mult.
 */
quil.middlewares.navigation_3d.v_mult = (function quil$middlewares$navigation_3d$v_mult(v,mult){
return cljs.core.mapv.call(null,(function (p1__6581_SHARP_){
return (p1__6581_SHARP_ * mult);
}),v);
});
/**
 * Sum of 2 vectors.
 */
quil.middlewares.navigation_3d.v_plus = (function quil$middlewares$navigation_3d$v_plus(v1,v2){
return cljs.core.mapv.call(null,cljs.core._PLUS_,v1,v2);
});
/**
 * Returns vector opposite to vector v.
 */
quil.middlewares.navigation_3d.v_opposite = (function quil$middlewares$navigation_3d$v_opposite(v){
return quil.middlewares.navigation_3d.v_mult.call(null,v,(-1));
});
/**
 * Normalize vector, returning vector
 * which has same direction but with norm equals to 1.
 */
quil.middlewares.navigation_3d.v_normalize = (function quil$middlewares$navigation_3d$v_normalize(v){
var norm = quil.core.sqrt.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,quil.core.sq,v)));
return quil.middlewares.navigation_3d.v_mult.call(null,v,((1) / norm));
});
/**
 * Rotates nav-3d configuration up-down.
 */
quil.middlewares.navigation_3d.rotate_ud = (function quil$middlewares$navigation_3d$rotate_ud(nav_3d,angle){
var axis = quil.middlewares.navigation_3d.cross_product.call(null,new cljs.core.Keyword(null,"straight","straight",-1252567854).cljs$core$IFn$_invoke$arity$1(nav_3d),new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(nav_3d));
var rotate = ((function (axis){
return (function (p1__6582_SHARP_){
return quil.middlewares.navigation_3d.rotate_by_axis_and_angle.call(null,p1__6582_SHARP_,axis,angle);
});})(axis))
;
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),rotate),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113)], null),rotate);
});
/**
 * Mouse handler function which rotates nav-3d configuration.
 * It uses mouse from event object and pixels-in-360 to calculate
 * angles to rotate.
 */
quil.middlewares.navigation_3d.rotate = (function quil$middlewares$navigation_3d$rotate(state,event,pixels_in_360){
quil.middlewares.navigation_3d.assert_state_has_navigation.call(null,state);

if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event))){
return state;
} else {
var dx = (new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event));
var angle_lr = quil.core.map_range.call(null,dx,(0),pixels_in_360,(0),quil.core.TWO_PI);
var angle_ud = quil.core.map_range.call(null,dy,(0),pixels_in_360,(0),quil.core.TWO_PI);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),((function (dx,dy,angle_lr,angle_ud){
return (function (p1__6583_SHARP_){
return quil.middlewares.navigation_3d.rotate_ud.call(null,quil.middlewares.navigation_3d.rotate_lr.call(null,p1__6583_SHARP_,angle_lr),angle_ud);
});})(dx,dy,angle_lr,angle_ud))
);
}
});
quil.middlewares.navigation_3d.space = cljs.core.keyword.call(null," ");
/**
 * Keyboard handler function which moves nav-3d configuration.
 * It uses keyboard key from event object to determing in which
 * direction to move.
 */
quil.middlewares.navigation_3d.move = (function quil$middlewares$navigation_3d$move(state,event,step_size){
quil.middlewares.navigation_3d.assert_state_has_navigation.call(null,state);

var map__6589 = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state);
var map__6589__$1 = ((cljs.core.seq_QMARK_.call(null,map__6589))?cljs.core.apply.call(null,cljs.core.hash_map,map__6589):map__6589);
var up = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var straight = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"straight","straight",-1252567854));
var temp__4421__auto__ = (function (){var pred__6590 = cljs.core._EQ_;
var expr__6591 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__6590.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__6591))){
return straight;
} else {
if(cljs.core.truth_(pred__6590.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__6591))){
return quil.middlewares.navigation_3d.v_opposite.call(null,straight);
} else {
if(cljs.core.truth_(pred__6590.call(null,quil.middlewares.navigation_3d.space,expr__6591))){
return quil.middlewares.navigation_3d.v_opposite.call(null,up);
} else {
if(cljs.core.truth_(pred__6590.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__6591))){
return up;
} else {
if(cljs.core.truth_(pred__6590.call(null,new cljs.core.Keyword(null,"d","d",1972142424),expr__6591))){
return quil.middlewares.navigation_3d.cross_product.call(null,straight,up);
} else {
if(cljs.core.truth_(pred__6590.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__6591))){
return quil.middlewares.navigation_3d.cross_product.call(null,up,straight);
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var dir = temp__4421__auto__;
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301),new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (dir,temp__4421__auto__,map__6589,map__6589__$1,up,straight){
return (function (p1__6584_SHARP_){
return quil.middlewares.navigation_3d.v_plus.call(null,p1__6584_SHARP_,quil.middlewares.navigation_3d.v_mult.call(null,dir,step_size));
});})(dir,temp__4421__auto__,map__6589,map__6589__$1,up,straight))
);
} else {
return state;
}
});
/**
 * Custom 'setup' function which creates initial position
 * configuration and puts it to the state map.
 */
quil.middlewares.navigation_3d.setup_3d_nav = (function quil$middlewares$navigation_3d$setup_3d_nav(user_setup,user_settings){
var initial_state = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.merge.call(null,quil.middlewares.navigation_3d.default_position.call(null),cljs.core.select_keys.call(null,user_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"position","position",-2011731912)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),quil.middlewares.navigation_3d.v_normalize),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113)], null),quil.middlewares.navigation_3d.v_normalize);
return cljs.core.update_in.call(null,user_setup.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),((function (initial_state){
return (function (p1__6593_SHARP_){
return cljs.core.merge.call(null,initial_state,p1__6593_SHARP_);
});})(initial_state))
);
});
/**
 * Enables navigation in 3D space. Similar to how it is done in
 * shooters: WASD navigation, space is go up, z is go down,
 * drag mouse to look around.
 */
quil.middlewares.navigation_3d.navigation_3d = (function quil$middlewares$navigation_3d$navigation_3d(options){
var user_settings = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(options);
var pixels_in_360 = new cljs.core.Keyword(null,"pixels-in-360","pixels-in-360",1789567298).cljs$core$IFn$_invoke$arity$2(user_settings,(1000));
var step_size = new cljs.core.Keyword(null,"step-size","step-size",1545609922).cljs$core$IFn$_invoke$arity$2(user_settings,(20));
var rotate_on = new cljs.core.Keyword(null,"rotate-on","rotate-on",-1282225937).cljs$core$IFn$_invoke$arity$2(user_settings,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441));
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on){
return (function (state){
return null;
});})(user_settings,pixels_in_360,step_size,rotate_on))
);
var key_pressed = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364).cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw){
return (function (state,_){
return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw))
);
var rotate_on_fn = rotate_on.call(null,options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed){
return (function (state,_){
return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed))
);
var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn))
);
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.core.partial.call(null,quil.middlewares.navigation_3d.setup_3d_nav,setup,user_settings),new cljs.core.Keyword(null,"draw","draw",1358331674),((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state){
quil.middlewares.navigation_3d.assert_state_has_navigation.call(null,state);

var map__6598_6602 = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state);
var map__6598_6603__$1 = ((cljs.core.seq_QMARK_.call(null,map__6598_6602))?cljs.core.apply.call(null,cljs.core.hash_map,map__6598_6602):map__6598_6602);
var vec__6599_6604 = cljs.core.get.call(null,map__6598_6603__$1,new cljs.core.Keyword(null,"straight","straight",-1252567854));
var c_x_6605 = cljs.core.nth.call(null,vec__6599_6604,(0),null);
var c_y_6606 = cljs.core.nth.call(null,vec__6599_6604,(1),null);
var c_z_6607 = cljs.core.nth.call(null,vec__6599_6604,(2),null);
var vec__6600_6608 = cljs.core.get.call(null,map__6598_6603__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var u_x_6609 = cljs.core.nth.call(null,vec__6600_6608,(0),null);
var u_y_6610 = cljs.core.nth.call(null,vec__6600_6608,(1),null);
var u_z_6611 = cljs.core.nth.call(null,vec__6600_6608,(2),null);
var vec__6601_6612 = cljs.core.get.call(null,map__6598_6603__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var p_x_6613 = cljs.core.nth.call(null,vec__6601_6612,(0),null);
var p_y_6614 = cljs.core.nth.call(null,vec__6601_6612,(1),null);
var p_z_6615 = cljs.core.nth.call(null,vec__6601_6612,(2),null);
quil.core.camera.call(null,p_x_6613,p_y_6614,p_z_6615,(p_x_6613 + c_x_6605),(p_y_6614 + c_y_6606),(p_z_6615 + c_z_6607),u_x_6609,u_y_6610,u_z_6611);

return draw.call(null,state);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
return key_pressed.call(null,quil.middlewares.navigation_3d.move.call(null,state,event,step_size),event);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,rotate_on,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
return rotate_on_fn.call(null,quil.middlewares.navigation_3d.rotate.call(null,state,event,pixels_in_360),event);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
);
});

//# sourceMappingURL=navigation_3d.js.map