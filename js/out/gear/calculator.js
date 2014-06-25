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
gear.calculator.suggest_ratio = (function suggest_ratio(wheel,gear_inch,sprockets){var iter__8651__auto__ = (function iter__10730(s__10731){return (new cljs.core.LazySeq(null,(function (){var s__10731__$1 = s__10731;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10731__$1);if(temp__4092__auto__)
{var s__10731__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10731__$2))
{var c__8649__auto__ = cljs.core.chunk_first.call(null,s__10731__$2);var size__8650__auto__ = cljs.core.count.call(null,c__8649__auto__);var b__10733 = cljs.core.chunk_buffer.call(null,size__8650__auto__);if((function (){var i__10732 = 0;while(true){
if((i__10732 < size__8650__auto__))
{var chainring = cljs.core._nth.call(null,c__8649__auto__,i__10732);cljs.core.chunk_append.call(null,b__10733,(function (){var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,sprockets))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null);
} else
{return null;
}
})());
{
var G__10734 = (i__10732 + 1);
i__10732 = G__10734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10733),iter__10730.call(null,cljs.core.chunk_rest.call(null,s__10731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10733),null);
}
} else
{var chainring = cljs.core.first.call(null,s__10731__$2);return cljs.core.cons.call(null,(function (){var sprocket = gear.calculator.find_sprocket.call(null,wheel,chainring,gear_inch);if(((sprocket >= cljs.core.apply.call(null,cljs.core.min,sprockets))) && ((sprocket <= cljs.core.apply.call(null,cljs.core.max,sprockets))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chainring,sprocket], null);
} else
{return null;
}
})(),iter__10730.call(null,cljs.core.rest.call(null,s__10731__$2)));
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