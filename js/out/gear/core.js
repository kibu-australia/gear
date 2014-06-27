// Compiled by ClojureScript 0.0-2234
goog.provide('gear.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('gear.calculator');
goog.require('gear.calculator');
gear.core.sprockets = cljs.core.range.call(null,11,25);
gear.core.chainrings = cljs.core.range.call(null,28,59);
gear.core.inches = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,143], null);
gear.core.chainring = reagent.core.atom.call(null,42);
gear.core.sprocket = reagent.core.atom.call(null,16);
gear.core.inch = reagent.core.atom.call(null,cljs.core.apply.call(null,cljs.core.min,gear.core.inches));
gear.core.wheel = reagent.core.atom.call(null,27);
gear.core.slider = (function slider(value,range){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"min","min",1014012356),cljs.core.apply.call(null,cljs.core.min,range),new cljs.core.Keyword(null,"max","max",1014012118),cljs.core.apply.call(null,cljs.core.max,range),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__9823_SHARP_){return cljs.core.reset_BANG_.call(null,value,p1__9823_SHARP_.target.value);
})], null)], null);
});
gear.core.input_number = (function input_number(value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"number",new cljs.core.Keyword(null,"min","min",1014012356),cljs.core.apply.call(null,cljs.core.min,gear.core.inches),new cljs.core.Keyword(null,"max","max",1014012118),cljs.core.apply.call(null,cljs.core.max,gear.core.inches),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__9824_SHARP_){return cljs.core.reset_BANG_.call(null,value,Number(p1__9824_SHARP_.target.value));
})], null)], null);
});
gear.core.gear_ratio = (function gear_ratio(){return gear.calculator.gear_inch.call(null,cljs.core.deref.call(null,gear.core.wheel),cljs.core.deref.call(null,gear.core.chainring),cljs.core.deref.call(null,gear.core.sprocket)).toFixed(2);
});
gear.core.my_calculator = (function my_calculator(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Chainring: ",cljs.core.deref.call(null,gear.core.chainring),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.slider,gear.core.chainring,gear.core.chainrings], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Sprocket: ",cljs.core.deref.call(null,gear.core.sprocket),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.slider,gear.core.sprocket,gear.core.sprockets], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.result","h1.result",2751598676),gear.core.gear_ratio.call(null)," gear inches"], null)], null)], null);
});
gear.core.my_navigation = (function my_navigation(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav","ul.nav",4464734398),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),gear.core.render_calculator], null),"Calculate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),gear.core.render_suggestions], null),"Suggest"], null)], null);
});
gear.core.my_suggestion = (function my_suggestion(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.input_number,gear.core.inch], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(cljs.core.truth_(cljs.core.deref.call(null,gear.core.inch))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gear.calculator.suggest_ratio.call(null,cljs.core.deref.call(null,gear.core.wheel),cljs.core.deref.call(null,gear.core.inch),gear.core.chainrings,gear.core.sprockets))):null)], null)], null);
});
gear.core.render = (function render(id,body){return reagent.core.render_component.call(null,body,document.getElementById(id));
});
gear.core.render_calculator = (function render_calculator(){return gear.core.render.call(null,"main",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.my_calculator], null));
});
gear.core.render_suggestions = (function render_suggestions(){return gear.core.render.call(null,"main",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.my_suggestion], null));
});
gear.core.render_nav = (function render_nav(){return gear.core.render.call(null,"nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear.core.my_navigation], null));
});
gear.core.render_calculator.call(null);
gear.core.render_nav.call(null);

//# sourceMappingURL=core.js.map