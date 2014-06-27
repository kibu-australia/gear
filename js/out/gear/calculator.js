// Compiled by ClojureScript 0.0-2234
goog.provide('gear.calculator');
goog.require('cljs.core');
/**
* Returns the gear inches for a given chainring/sprocket combination
*/
gear.calculator.gear_inch = (function gear_inch(wheel,chainring,sprocket){return (wheel * (chainring / sprocket));
});
/**
* Returns the closest chainring for the desired gear inch/sprocket combination
*/
gear.calculator.find_chainring = (function find_chainring(wheel,sprocket,gear_inch){return Math.round.call(null,(sprocket * (gear_inch / wheel)));
});
/**
* Returns the closest sprocket for the desired gear inch/chainring combination
*/
gear.calculator.find_sprocket = (function find_sprocket(wheel,chainring,gear_inch){return Math.round.call(null,(chainring * (wheel / gear_inch)));
});
/**
* Returns a vector of vectors containing chainring/sprocket combinations
* closest to desired gear inch
*/
gear.calculator.suggest_ratio = (function suggest_ratio(wheel,gear_inch,chainrings,sprockets){var iter__8651__auto__ = (function iter__9730(s__9731){return (new cljs.core.LazySeq(null,(function (){var s__9731__$1 = s__9731;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9731__$1);if(temp__4092__auto__)
{var s__9731__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9731__$2))
{var c__8649__auto__ = cljs.core.chunk_first.call(null,s__9731__$2);var size__8650__auto__ = cljs.core.count.call(null,c__8649__auto__);var b__9733 = cljs.core.chunk_buffer.call(null,size__8650__auto__);if((function (){var i__9732 = 0;while(true){
if((i__9732 < size__8650__auto__))
{var chainring = cljs.core._nth.call(null,c__8649__auto__,i__9732);var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,sprockets))))
{cljs.core.chunk_append.call(null,b__9733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null));
{
var G__9734 = (i__9732 + 1);
i__9732 = G__9734;
continue;
}
} else
{{
var G__9735 = (i__9732 + 1);
i__9732 = G__9735;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9733),iter__9730.call(null,cljs.core.chunk_rest.call(null,s__9731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9733),null);
}
} else
{var chainring = cljs.core.first.call(null,s__9731__$2);var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,sprockets))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null),iter__9730.call(null,cljs.core.rest.call(null,s__9731__$2)));
} else
{{
var G__9736 = cljs.core.rest.call(null,s__9731__$2);
s__9731__$1 = G__9736;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8651__auto__.call(null,chainrings);
});

//# sourceMappingURL=calculator.js.map