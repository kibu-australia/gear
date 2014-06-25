// Compiled by ClojureScript 0.0-2234
goog.provide('gear.calculator');
goog.require('cljs.core');
gear.calculator.sprockets = cljs.core.range.call(null,11,25);
gear.calculator.chainrings = cljs.core.range.call(null,28,59);
/**
* Returns the gear inches for a given chainring/sprocket combination
*/
gear.calculator.gear_inch = (function gear_inch(wheel,chainring,sprocket){return (wheel * (chainring / sprocket));
});
/**
* Returns the closest chainring for the desired gear inch/sprocket combination
*/
gear.calculator.find_chainring = (function find_chainring(wheel,sprocket,gear_inch){return (Math.ceil.call(null,(sprocket * (gear_inch / wheel))) | 0);
});
/**
* Returns the closest sprocket for the desired gear inch/chainring combination
*/
gear.calculator.find_sprocket = (function find_sprocket(wheel,chainring,gear_inch){return (Math.ceil.call(null,(chainring * (wheel / gear_inch))) | 0);
});
/**
* Returns a vector of vectors containing chainring/sprocket combinations
* closest to desired gear inch
*/
gear.calculator.suggest_ratio = (function suggest_ratio(wheel,gear_inch){var iter__8651__auto__ = (function iter__9442(s__9443){return (new cljs.core.LazySeq(null,(function (){var s__9443__$1 = s__9443;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9443__$1);if(temp__4092__auto__)
{var s__9443__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9443__$2))
{var c__8649__auto__ = cljs.core.chunk_first.call(null,s__9443__$2);var size__8650__auto__ = cljs.core.count.call(null,c__8649__auto__);var b__9445 = cljs.core.chunk_buffer.call(null,size__8650__auto__);if((function (){var i__9444 = 0;while(true){
if((i__9444 < size__8650__auto__))
{var chainring = cljs.core._nth.call(null,c__8649__auto__,i__9444);cljs.core.chunk_append.call(null,b__9445,(function (){var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,gear.calculator.sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,gear.calculator.sprockets))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null);
} else
{return null;
}
})());
{
var G__9446 = (i__9444 + 1);
i__9444 = G__9446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9445),iter__9442.call(null,cljs.core.chunk_rest.call(null,s__9443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9445),null);
}
} else
{var chainring = cljs.core.first.call(null,s__9443__$2);return cljs.core.cons.call(null,(function (){var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,gear.calculator.sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,gear.calculator.sprockets))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null);
} else
{return null;
}
})(),iter__9442.call(null,cljs.core.rest.call(null,s__9443__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8651__auto__.call(null,gear.calculator.chainrings);
});

//# sourceMappingURL=calculator.js.map