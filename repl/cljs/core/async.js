// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10988 = (function (f,fn_handler,meta10989){
this.f = f;
this.fn_handler = fn_handler;
this.meta10989 = meta10989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10988.cljs$lang$type = true;
cljs.core.async.t10988.cljs$lang$ctorStr = "cljs.core.async/t10988";
cljs.core.async.t10988.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t10988");
});
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10990){var self__ = this;
var _10990__$1 = this;return self__.meta10989;
});
cljs.core.async.t10988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10990,meta10989__$1){var self__ = this;
var _10990__$1 = this;return (new cljs.core.async.t10988(self__.f,self__.fn_handler,meta10989__$1));
});
cljs.core.async.__GT_t10988 = (function __GT_t10988(f__$1,fn_handler__$1,meta10989){return (new cljs.core.async.t10988(f__$1,fn_handler__$1,meta10989));
});
}
return (new cljs.core.async.t10988(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10992 = buff;if(G__10992)
{var bit__3841__auto__ = null;if(cljs.core.truth_((function (){var or__3222__auto__ = bit__3841__auto__;if(cljs.core.truth_(or__3222__auto__))
{return or__3222__auto__;
} else
{return G__10992.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10992.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10992);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10992);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10993 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10993);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10993);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4011__auto___10994 = n;var x_10995 = 0;while(true){
if((x_10995 < n__4011__auto___10994))
{(a[x_10995] = 0);
{
var G__10996 = (x_10995 + 1);
x_10995 = G__10996;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10997 = (i + 1);
i = G__10997;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11001 = (function (flag,alt_flag,meta11002){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11002 = meta11002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11001.cljs$lang$type = true;
cljs.core.async.t11001.cljs$lang$ctorStr = "cljs.core.async/t11001";
cljs.core.async.t11001.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11001");
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11003){var self__ = this;
var _11003__$1 = this;return self__.meta11002;
});
cljs.core.async.t11001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11003,meta11002__$1){var self__ = this;
var _11003__$1 = this;return (new cljs.core.async.t11001(self__.flag,self__.alt_flag,meta11002__$1));
});
cljs.core.async.__GT_t11001 = (function __GT_t11001(flag__$1,alt_flag__$1,meta11002){return (new cljs.core.async.t11001(flag__$1,alt_flag__$1,meta11002));
});
}
return (new cljs.core.async.t11001(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11007 = (function (cb,flag,alt_handler,meta11008){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11008 = meta11008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11007.cljs$lang$type = true;
cljs.core.async.t11007.cljs$lang$ctorStr = "cljs.core.async/t11007";
cljs.core.async.t11007.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11007");
});
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11009){var self__ = this;
var _11009__$1 = this;return self__.meta11008;
});
cljs.core.async.t11007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11009,meta11008__$1){var self__ = this;
var _11009__$1 = this;return (new cljs.core.async.t11007(self__.cb,self__.flag,self__.alt_handler,meta11008__$1));
});
cljs.core.async.__GT_t11007 = (function __GT_t11007(cb__$1,flag__$1,alt_handler__$1,meta11008){return (new cljs.core.async.t11007(cb__$1,flag__$1,alt_handler__$1,meta11008));
});
}
return (new cljs.core.async.t11007(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11010_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11010_SHARP_,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11011_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11011_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3222__auto__ = wport;if(cljs.core.truth_(or__3222__auto__))
{return or__3222__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__11012 = (i + 1);
i = G__11012;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3222__auto__ = ret;if(cljs.core.truth_(or__3222__auto__))
{return or__3222__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3213__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3213__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3213__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11013){var map__11015 = p__11013;var map__11015__$1 = ((cljs.core.seq_QMARK_.call(null,map__11015))?cljs.core.apply.call(null,cljs.core.hash_map,map__11015):map__11015);var opts = map__11015__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11013 = null;if (arguments.length > 1) {
  p__11013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11013);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11016){
var ports = cljs.core.first(arglist__11016);
var p__11013 = cljs.core.rest(arglist__11016);
return alts_BANG___delegate(ports,p__11013);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11024 = (function (ch,f,map_LT_,meta11025){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11025 = meta11025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11024.cljs$lang$type = true;
cljs.core.async.t11024.cljs$lang$ctorStr = "cljs.core.async/t11024";
cljs.core.async.t11024.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11024");
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11027 = (function (fn1,_,meta11025,ch,f,map_LT_,meta11028){
this.fn1 = fn1;
this._ = _;
this.meta11025 = meta11025;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11028 = meta11028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11027.cljs$lang$type = true;
cljs.core.async.t11027.cljs$lang$ctorStr = "cljs.core.async/t11027";
cljs.core.async.t11027.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11027");
});
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11017_SHARP_){return f1.call(null,(((p1__11017_SHARP_ == null))?null:self__.f.call(null,p1__11017_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11029){var self__ = this;
var _11029__$1 = this;return self__.meta11028;
});
cljs.core.async.t11027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11029,meta11028__$1){var self__ = this;
var _11029__$1 = this;return (new cljs.core.async.t11027(self__.fn1,self__._,self__.meta11025,self__.ch,self__.f,self__.map_LT_,meta11028__$1));
});
cljs.core.async.__GT_t11027 = (function __GT_t11027(fn1__$1,___$2,meta11025__$1,ch__$2,f__$2,map_LT___$2,meta11028){return (new cljs.core.async.t11027(fn1__$1,___$2,meta11025__$1,ch__$2,f__$2,map_LT___$2,meta11028));
});
}
return (new cljs.core.async.t11027(fn1,___$1,self__.meta11025,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3213__auto__ = ret;if(cljs.core.truth_(and__3213__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3213__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11026){var self__ = this;
var _11026__$1 = this;return self__.meta11025;
});
cljs.core.async.t11024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11026,meta11025__$1){var self__ = this;
var _11026__$1 = this;return (new cljs.core.async.t11024(self__.ch,self__.f,self__.map_LT_,meta11025__$1));
});
cljs.core.async.__GT_t11024 = (function __GT_t11024(ch__$1,f__$1,map_LT___$1,meta11025){return (new cljs.core.async.t11024(ch__$1,f__$1,map_LT___$1,meta11025));
});
}
return (new cljs.core.async.t11024(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11033 = (function (ch,f,map_GT_,meta11034){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11034 = meta11034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11033.cljs$lang$type = true;
cljs.core.async.t11033.cljs$lang$ctorStr = "cljs.core.async/t11033";
cljs.core.async.t11033.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11033");
});
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11035){var self__ = this;
var _11035__$1 = this;return self__.meta11034;
});
cljs.core.async.t11033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11035,meta11034__$1){var self__ = this;
var _11035__$1 = this;return (new cljs.core.async.t11033(self__.ch,self__.f,self__.map_GT_,meta11034__$1));
});
cljs.core.async.__GT_t11033 = (function __GT_t11033(ch__$1,f__$1,map_GT___$1,meta11034){return (new cljs.core.async.t11033(ch__$1,f__$1,map_GT___$1,meta11034));
});
}
return (new cljs.core.async.t11033(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11039 = (function (ch,p,filter_GT_,meta11040){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11040 = meta11040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11039.cljs$lang$type = true;
cljs.core.async.t11039.cljs$lang$ctorStr = "cljs.core.async/t11039";
cljs.core.async.t11039.cljs$lang$ctorPrWriter = (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t11039");
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11041){var self__ = this;
var _11041__$1 = this;return self__.meta11040;
});
cljs.core.async.t11039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11041,meta11040__$1){var self__ = this;
var _11041__$1 = this;return (new cljs.core.async.t11039(self__.ch,self__.p,self__.filter_GT_,meta11040__$1));
});
cljs.core.async.__GT_t11039 = (function __GT_t11039(ch__$1,p__$1,filter_GT___$1,meta11040){return (new cljs.core.async.t11039(ch__$1,p__$1,filter_GT___$1,meta11040));
});
}
return (new cljs.core.async.t11039(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___11124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11103){var state_val_11104 = (state_11103[1]);if((state_val_11104 === 1))
{var state_11103__$1 = state_11103;var statearr_11105_11125 = state_11103__$1;(statearr_11105_11125[2] = null);
(statearr_11105_11125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 2))
{var state_11103__$1 = state_11103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11103__$1,4,ch);
} else
{if((state_val_11104 === 3))
{var inst_11101 = (state_11103[2]);var state_11103__$1 = state_11103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11103__$1,inst_11101);
} else
{if((state_val_11104 === 4))
{var inst_11085 = (state_11103[7]);var inst_11085__$1 = (state_11103[2]);var inst_11086 = (inst_11085__$1 == null);var state_11103__$1 = (function (){var statearr_11106 = state_11103;(statearr_11106[7] = inst_11085__$1);
return statearr_11106;
})();if(cljs.core.truth_(inst_11086))
{var statearr_11107_11126 = state_11103__$1;(statearr_11107_11126[1] = 5);
} else
{var statearr_11108_11127 = state_11103__$1;(statearr_11108_11127[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 5))
{var inst_11088 = cljs.core.async.close_BANG_.call(null,out);var state_11103__$1 = state_11103;var statearr_11109_11128 = state_11103__$1;(statearr_11109_11128[2] = inst_11088);
(statearr_11109_11128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 6))
{var inst_11085 = (state_11103[7]);var inst_11090 = p.call(null,inst_11085);var state_11103__$1 = state_11103;if(cljs.core.truth_(inst_11090))
{var statearr_11110_11129 = state_11103__$1;(statearr_11110_11129[1] = 8);
} else
{var statearr_11111_11130 = state_11103__$1;(statearr_11111_11130[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 7))
{var inst_11099 = (state_11103[2]);var state_11103__$1 = state_11103;var statearr_11112_11131 = state_11103__$1;(statearr_11112_11131[2] = inst_11099);
(statearr_11112_11131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 8))
{var inst_11085 = (state_11103[7]);var state_11103__$1 = state_11103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11103__$1,11,out,inst_11085);
} else
{if((state_val_11104 === 9))
{var state_11103__$1 = state_11103;var statearr_11113_11132 = state_11103__$1;(statearr_11113_11132[2] = null);
(statearr_11113_11132[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 10))
{var inst_11096 = (state_11103[2]);var state_11103__$1 = (function (){var statearr_11114 = state_11103;(statearr_11114[8] = inst_11096);
return statearr_11114;
})();var statearr_11115_11133 = state_11103__$1;(statearr_11115_11133[2] = null);
(statearr_11115_11133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11104 === 11))
{var inst_11093 = (state_11103[2]);var state_11103__$1 = state_11103;var statearr_11116_11134 = state_11103__$1;(statearr_11116_11134[2] = inst_11093);
(statearr_11116_11134[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11120 = (new Array(9));(statearr_11120[0] = state_machine__6023__auto__);
(statearr_11120[1] = 1);
return statearr_11120;
});
var state_machine__6023__auto____1 = (function (state_11103){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object))
{var ex__6026__auto__ = e11121;var statearr_11122_11135 = state_11103;(statearr_11122_11135[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11136 = state_11103;
state_11103 = G__11136;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11103){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11123 = f__6093__auto__.call(null);(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___11124);
return statearr_11123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6092__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11302){var state_val_11303 = (state_11302[1]);if((state_val_11303 === 1))
{var state_11302__$1 = state_11302;var statearr_11304_11345 = state_11302__$1;(statearr_11304_11345[2] = null);
(statearr_11304_11345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 2))
{var state_11302__$1 = state_11302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11302__$1,4,in$);
} else
{if((state_val_11303 === 3))
{var inst_11300 = (state_11302[2]);var state_11302__$1 = state_11302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11302__$1,inst_11300);
} else
{if((state_val_11303 === 4))
{var inst_11243 = (state_11302[7]);var inst_11243__$1 = (state_11302[2]);var inst_11244 = (inst_11243__$1 == null);var state_11302__$1 = (function (){var statearr_11305 = state_11302;(statearr_11305[7] = inst_11243__$1);
return statearr_11305;
})();if(cljs.core.truth_(inst_11244))
{var statearr_11306_11346 = state_11302__$1;(statearr_11306_11346[1] = 5);
} else
{var statearr_11307_11347 = state_11302__$1;(statearr_11307_11347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 5))
{var inst_11246 = cljs.core.async.close_BANG_.call(null,out);var state_11302__$1 = state_11302;var statearr_11308_11348 = state_11302__$1;(statearr_11308_11348[2] = inst_11246);
(statearr_11308_11348[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 6))
{var inst_11243 = (state_11302[7]);var inst_11252 = f.call(null,inst_11243);var inst_11253 = cljs.core.seq.call(null,inst_11252);var inst_11254 = inst_11253;var inst_11255 = null;var inst_11256 = 0;var inst_11257 = 0;var state_11302__$1 = (function (){var statearr_11309 = state_11302;(statearr_11309[8] = inst_11257);
(statearr_11309[9] = inst_11256);
(statearr_11309[10] = inst_11255);
(statearr_11309[11] = inst_11254);
return statearr_11309;
})();var statearr_11310_11349 = state_11302__$1;(statearr_11310_11349[2] = null);
(statearr_11310_11349[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 7))
{var inst_11298 = (state_11302[2]);var state_11302__$1 = state_11302;var statearr_11311_11350 = state_11302__$1;(statearr_11311_11350[2] = inst_11298);
(statearr_11311_11350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 8))
{var inst_11257 = (state_11302[8]);var inst_11256 = (state_11302[9]);var inst_11259 = (inst_11257 < inst_11256);var inst_11260 = inst_11259;var state_11302__$1 = state_11302;if(cljs.core.truth_(inst_11260))
{var statearr_11312_11351 = state_11302__$1;(statearr_11312_11351[1] = 10);
} else
{var statearr_11313_11352 = state_11302__$1;(statearr_11313_11352[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 9))
{var inst_11290 = (state_11302[2]);var inst_11291 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11302__$1 = (function (){var statearr_11314 = state_11302;(statearr_11314[12] = inst_11290);
return statearr_11314;
})();if(cljs.core.truth_(inst_11291))
{var statearr_11315_11353 = state_11302__$1;(statearr_11315_11353[1] = 21);
} else
{var statearr_11316_11354 = state_11302__$1;(statearr_11316_11354[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 10))
{var inst_11257 = (state_11302[8]);var inst_11255 = (state_11302[10]);var inst_11262 = cljs.core._nth.call(null,inst_11255,inst_11257);var state_11302__$1 = state_11302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11302__$1,13,out,inst_11262);
} else
{if((state_val_11303 === 11))
{var inst_11268 = (state_11302[13]);var inst_11254 = (state_11302[11]);var inst_11268__$1 = cljs.core.seq.call(null,inst_11254);var state_11302__$1 = (function (){var statearr_11320 = state_11302;(statearr_11320[13] = inst_11268__$1);
return statearr_11320;
})();if(inst_11268__$1)
{var statearr_11321_11355 = state_11302__$1;(statearr_11321_11355[1] = 14);
} else
{var statearr_11322_11356 = state_11302__$1;(statearr_11322_11356[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 12))
{var inst_11288 = (state_11302[2]);var state_11302__$1 = state_11302;var statearr_11323_11357 = state_11302__$1;(statearr_11323_11357[2] = inst_11288);
(statearr_11323_11357[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 13))
{var inst_11257 = (state_11302[8]);var inst_11256 = (state_11302[9]);var inst_11255 = (state_11302[10]);var inst_11254 = (state_11302[11]);var inst_11264 = (state_11302[2]);var inst_11265 = (inst_11257 + 1);var tmp11317 = inst_11256;var tmp11318 = inst_11255;var tmp11319 = inst_11254;var inst_11254__$1 = tmp11319;var inst_11255__$1 = tmp11318;var inst_11256__$1 = tmp11317;var inst_11257__$1 = inst_11265;var state_11302__$1 = (function (){var statearr_11324 = state_11302;(statearr_11324[14] = inst_11264);
(statearr_11324[8] = inst_11257__$1);
(statearr_11324[9] = inst_11256__$1);
(statearr_11324[10] = inst_11255__$1);
(statearr_11324[11] = inst_11254__$1);
return statearr_11324;
})();var statearr_11325_11358 = state_11302__$1;(statearr_11325_11358[2] = null);
(statearr_11325_11358[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 14))
{var inst_11268 = (state_11302[13]);var inst_11270 = cljs.core.chunked_seq_QMARK_.call(null,inst_11268);var state_11302__$1 = state_11302;if(inst_11270)
{var statearr_11326_11359 = state_11302__$1;(statearr_11326_11359[1] = 17);
} else
{var statearr_11327_11360 = state_11302__$1;(statearr_11327_11360[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 15))
{var state_11302__$1 = state_11302;var statearr_11328_11361 = state_11302__$1;(statearr_11328_11361[2] = null);
(statearr_11328_11361[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 16))
{var inst_11286 = (state_11302[2]);var state_11302__$1 = state_11302;var statearr_11329_11362 = state_11302__$1;(statearr_11329_11362[2] = inst_11286);
(statearr_11329_11362[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 17))
{var inst_11268 = (state_11302[13]);var inst_11272 = cljs.core.chunk_first.call(null,inst_11268);var inst_11273 = cljs.core.chunk_rest.call(null,inst_11268);var inst_11274 = cljs.core.count.call(null,inst_11272);var inst_11254 = inst_11273;var inst_11255 = inst_11272;var inst_11256 = inst_11274;var inst_11257 = 0;var state_11302__$1 = (function (){var statearr_11330 = state_11302;(statearr_11330[8] = inst_11257);
(statearr_11330[9] = inst_11256);
(statearr_11330[10] = inst_11255);
(statearr_11330[11] = inst_11254);
return statearr_11330;
})();var statearr_11331_11363 = state_11302__$1;(statearr_11331_11363[2] = null);
(statearr_11331_11363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 18))
{var inst_11268 = (state_11302[13]);var inst_11277 = cljs.core.first.call(null,inst_11268);var state_11302__$1 = state_11302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11302__$1,20,out,inst_11277);
} else
{if((state_val_11303 === 19))
{var inst_11283 = (state_11302[2]);var state_11302__$1 = state_11302;var statearr_11332_11364 = state_11302__$1;(statearr_11332_11364[2] = inst_11283);
(statearr_11332_11364[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 20))
{var inst_11268 = (state_11302[13]);var inst_11279 = (state_11302[2]);var inst_11280 = cljs.core.next.call(null,inst_11268);var inst_11254 = inst_11280;var inst_11255 = null;var inst_11256 = 0;var inst_11257 = 0;var state_11302__$1 = (function (){var statearr_11333 = state_11302;(statearr_11333[8] = inst_11257);
(statearr_11333[9] = inst_11256);
(statearr_11333[10] = inst_11255);
(statearr_11333[11] = inst_11254);
(statearr_11333[15] = inst_11279);
return statearr_11333;
})();var statearr_11334_11365 = state_11302__$1;(statearr_11334_11365[2] = null);
(statearr_11334_11365[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 21))
{var state_11302__$1 = state_11302;var statearr_11335_11366 = state_11302__$1;(statearr_11335_11366[2] = null);
(statearr_11335_11366[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 22))
{var state_11302__$1 = state_11302;var statearr_11336_11367 = state_11302__$1;(statearr_11336_11367[2] = null);
(statearr_11336_11367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11303 === 23))
{var inst_11296 = (state_11302[2]);var state_11302__$1 = state_11302;var statearr_11337_11368 = state_11302__$1;(statearr_11337_11368[2] = inst_11296);
(statearr_11337_11368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11341 = (new Array(16));(statearr_11341[0] = state_machine__6023__auto__);
(statearr_11341[1] = 1);
return statearr_11341;
});
var state_machine__6023__auto____1 = (function (state_11302){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11302);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11342){if((e11342 instanceof Object))
{var ex__6026__auto__ = e11342;var statearr_11343_11369 = state_11302;(statearr_11343_11369[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11370 = state_11302;
state_11302 = G__11370;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11302){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11344 = f__6093__auto__.call(null);(statearr_11344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto__);
return statearr_11344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return c__6092__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6092__auto___11465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11441){var state_val_11442 = (state_11441[1]);if((state_val_11442 === 1))
{var state_11441__$1 = state_11441;var statearr_11443_11466 = state_11441__$1;(statearr_11443_11466[2] = null);
(statearr_11443_11466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 2))
{var state_11441__$1 = state_11441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11441__$1,4,from);
} else
{if((state_val_11442 === 3))
{var inst_11439 = (state_11441[2]);var state_11441__$1 = state_11441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11441__$1,inst_11439);
} else
{if((state_val_11442 === 4))
{var inst_11420 = (state_11441[7]);var inst_11420__$1 = (state_11441[2]);var inst_11421 = (inst_11420__$1 == null);var state_11441__$1 = (function (){var statearr_11444 = state_11441;(statearr_11444[7] = inst_11420__$1);
return statearr_11444;
})();if(cljs.core.truth_(inst_11421))
{var statearr_11445_11467 = state_11441__$1;(statearr_11445_11467[1] = 5);
} else
{var statearr_11446_11468 = state_11441__$1;(statearr_11446_11468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 5))
{var state_11441__$1 = state_11441;if(cljs.core.truth_(close_QMARK_))
{var statearr_11447_11469 = state_11441__$1;(statearr_11447_11469[1] = 8);
} else
{var statearr_11448_11470 = state_11441__$1;(statearr_11448_11470[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 6))
{var inst_11420 = (state_11441[7]);var state_11441__$1 = state_11441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11441__$1,11,to,inst_11420);
} else
{if((state_val_11442 === 7))
{var inst_11437 = (state_11441[2]);var state_11441__$1 = state_11441;var statearr_11449_11471 = state_11441__$1;(statearr_11449_11471[2] = inst_11437);
(statearr_11449_11471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 8))
{var inst_11424 = cljs.core.async.close_BANG_.call(null,to);var state_11441__$1 = state_11441;var statearr_11450_11472 = state_11441__$1;(statearr_11450_11472[2] = inst_11424);
(statearr_11450_11472[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 9))
{var state_11441__$1 = state_11441;var statearr_11451_11473 = state_11441__$1;(statearr_11451_11473[2] = null);
(statearr_11451_11473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 10))
{var inst_11427 = (state_11441[2]);var state_11441__$1 = state_11441;var statearr_11452_11474 = state_11441__$1;(statearr_11452_11474[2] = inst_11427);
(statearr_11452_11474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 11))
{var inst_11430 = (state_11441[2]);var state_11441__$1 = state_11441;if(cljs.core.truth_(inst_11430))
{var statearr_11453_11475 = state_11441__$1;(statearr_11453_11475[1] = 12);
} else
{var statearr_11454_11476 = state_11441__$1;(statearr_11454_11476[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 12))
{var state_11441__$1 = state_11441;var statearr_11455_11477 = state_11441__$1;(statearr_11455_11477[2] = null);
(statearr_11455_11477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 13))
{var state_11441__$1 = state_11441;var statearr_11456_11478 = state_11441__$1;(statearr_11456_11478[2] = null);
(statearr_11456_11478[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 14))
{var inst_11435 = (state_11441[2]);var state_11441__$1 = state_11441;var statearr_11457_11479 = state_11441__$1;(statearr_11457_11479[2] = inst_11435);
(statearr_11457_11479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11461 = (new Array(8));(statearr_11461[0] = state_machine__6023__auto__);
(statearr_11461[1] = 1);
return statearr_11461;
});
var state_machine__6023__auto____1 = (function (state_11441){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11462){if((e11462 instanceof Object))
{var ex__6026__auto__ = e11462;var statearr_11463_11480 = state_11441;(statearr_11463_11480[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11481 = state_11441;
state_11441 = G__11481;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11441){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11464 = f__6093__auto__.call(null);(statearr_11464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___11465);
return statearr_11464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6092__auto___11582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11557){var state_val_11558 = (state_11557[1]);if((state_val_11558 === 1))
{var state_11557__$1 = state_11557;var statearr_11559_11583 = state_11557__$1;(statearr_11559_11583[2] = null);
(statearr_11559_11583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 2))
{var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11557__$1,4,ch);
} else
{if((state_val_11558 === 3))
{var inst_11555 = (state_11557[2]);var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11557__$1,inst_11555);
} else
{if((state_val_11558 === 4))
{var inst_11534 = (state_11557[7]);var inst_11534__$1 = (state_11557[2]);var inst_11535 = (inst_11534__$1 == null);var state_11557__$1 = (function (){var statearr_11560 = state_11557;(statearr_11560[7] = inst_11534__$1);
return statearr_11560;
})();if(cljs.core.truth_(inst_11535))
{var statearr_11561_11584 = state_11557__$1;(statearr_11561_11584[1] = 5);
} else
{var statearr_11562_11585 = state_11557__$1;(statearr_11562_11585[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 5))
{var inst_11537 = cljs.core.async.close_BANG_.call(null,tc);var inst_11538 = cljs.core.async.close_BANG_.call(null,fc);var state_11557__$1 = (function (){var statearr_11563 = state_11557;(statearr_11563[8] = inst_11537);
return statearr_11563;
})();var statearr_11564_11586 = state_11557__$1;(statearr_11564_11586[2] = inst_11538);
(statearr_11564_11586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 6))
{var inst_11534 = (state_11557[7]);var inst_11540 = p.call(null,inst_11534);var state_11557__$1 = state_11557;if(cljs.core.truth_(inst_11540))
{var statearr_11565_11587 = state_11557__$1;(statearr_11565_11587[1] = 9);
} else
{var statearr_11566_11588 = state_11557__$1;(statearr_11566_11588[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 7))
{var inst_11553 = (state_11557[2]);var state_11557__$1 = state_11557;var statearr_11567_11589 = state_11557__$1;(statearr_11567_11589[2] = inst_11553);
(statearr_11567_11589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 8))
{var inst_11546 = (state_11557[2]);var state_11557__$1 = state_11557;if(cljs.core.truth_(inst_11546))
{var statearr_11568_11590 = state_11557__$1;(statearr_11568_11590[1] = 12);
} else
{var statearr_11569_11591 = state_11557__$1;(statearr_11569_11591[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 9))
{var state_11557__$1 = state_11557;var statearr_11570_11592 = state_11557__$1;(statearr_11570_11592[2] = tc);
(statearr_11570_11592[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 10))
{var state_11557__$1 = state_11557;var statearr_11571_11593 = state_11557__$1;(statearr_11571_11593[2] = fc);
(statearr_11571_11593[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 11))
{var inst_11534 = (state_11557[7]);var inst_11544 = (state_11557[2]);var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11557__$1,8,inst_11544,inst_11534);
} else
{if((state_val_11558 === 12))
{var state_11557__$1 = state_11557;var statearr_11572_11594 = state_11557__$1;(statearr_11572_11594[2] = null);
(statearr_11572_11594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 13))
{var state_11557__$1 = state_11557;var statearr_11573_11595 = state_11557__$1;(statearr_11573_11595[2] = null);
(statearr_11573_11595[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 14))
{var inst_11551 = (state_11557[2]);var state_11557__$1 = state_11557;var statearr_11574_11596 = state_11557__$1;(statearr_11574_11596[2] = inst_11551);
(statearr_11574_11596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11578 = (new Array(9));(statearr_11578[0] = state_machine__6023__auto__);
(statearr_11578[1] = 1);
return statearr_11578;
});
var state_machine__6023__auto____1 = (function (state_11557){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11557);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11579){if((e11579 instanceof Object))
{var ex__6026__auto__ = e11579;var statearr_11580_11597 = state_11557;(statearr_11580_11597[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11598 = state_11557;
state_11557 = G__11598;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11557){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11581 = f__6093__auto__.call(null);(statearr_11581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___11582);
return statearr_11581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6092__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11645){var state_val_11646 = (state_11645[1]);if((state_val_11646 === 7))
{var inst_11641 = (state_11645[2]);var state_11645__$1 = state_11645;var statearr_11647_11663 = state_11645__$1;(statearr_11647_11663[2] = inst_11641);
(statearr_11647_11663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 6))
{var inst_11634 = (state_11645[7]);var inst_11631 = (state_11645[8]);var inst_11638 = f.call(null,inst_11631,inst_11634);var inst_11631__$1 = inst_11638;var state_11645__$1 = (function (){var statearr_11648 = state_11645;(statearr_11648[8] = inst_11631__$1);
return statearr_11648;
})();var statearr_11649_11664 = state_11645__$1;(statearr_11649_11664[2] = null);
(statearr_11649_11664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 5))
{var inst_11631 = (state_11645[8]);var state_11645__$1 = state_11645;var statearr_11650_11665 = state_11645__$1;(statearr_11650_11665[2] = inst_11631);
(statearr_11650_11665[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 4))
{var inst_11634 = (state_11645[7]);var inst_11634__$1 = (state_11645[2]);var inst_11635 = (inst_11634__$1 == null);var state_11645__$1 = (function (){var statearr_11651 = state_11645;(statearr_11651[7] = inst_11634__$1);
return statearr_11651;
})();if(cljs.core.truth_(inst_11635))
{var statearr_11652_11666 = state_11645__$1;(statearr_11652_11666[1] = 5);
} else
{var statearr_11653_11667 = state_11645__$1;(statearr_11653_11667[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 3))
{var inst_11643 = (state_11645[2]);var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11645__$1,inst_11643);
} else
{if((state_val_11646 === 2))
{var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11645__$1,4,ch);
} else
{if((state_val_11646 === 1))
{var inst_11631 = init;var state_11645__$1 = (function (){var statearr_11654 = state_11645;(statearr_11654[8] = inst_11631);
return statearr_11654;
})();var statearr_11655_11668 = state_11645__$1;(statearr_11655_11668[2] = null);
(statearr_11655_11668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11659 = (new Array(9));(statearr_11659[0] = state_machine__6023__auto__);
(statearr_11659[1] = 1);
return statearr_11659;
});
var state_machine__6023__auto____1 = (function (state_11645){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11645);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11660){if((e11660 instanceof Object))
{var ex__6026__auto__ = e11660;var statearr_11661_11669 = state_11645;(statearr_11661_11669[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11670 = state_11645;
state_11645 = G__11670;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11645){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11662 = f__6093__auto__.call(null);(statearr_11662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto__);
return statearr_11662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return c__6092__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6092__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_11744){var state_val_11745 = (state_11744[1]);if((state_val_11745 === 1))
{var inst_11720 = cljs.core.seq.call(null,coll);var inst_11721 = inst_11720;var state_11744__$1 = (function (){var statearr_11746 = state_11744;(statearr_11746[7] = inst_11721);
return statearr_11746;
})();var statearr_11747_11769 = state_11744__$1;(statearr_11747_11769[2] = null);
(statearr_11747_11769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 2))
{var inst_11721 = (state_11744[7]);var state_11744__$1 = state_11744;if(cljs.core.truth_(inst_11721))
{var statearr_11748_11770 = state_11744__$1;(statearr_11748_11770[1] = 4);
} else
{var statearr_11749_11771 = state_11744__$1;(statearr_11749_11771[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 3))
{var inst_11742 = (state_11744[2]);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11744__$1,inst_11742);
} else
{if((state_val_11745 === 4))
{var inst_11721 = (state_11744[7]);var inst_11724 = cljs.core.first.call(null,inst_11721);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11744__$1,7,ch,inst_11724);
} else
{if((state_val_11745 === 5))
{var inst_11721 = (state_11744[7]);var state_11744__$1 = state_11744;var statearr_11750_11772 = state_11744__$1;(statearr_11750_11772[2] = inst_11721);
(statearr_11750_11772[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 6))
{var inst_11729 = (state_11744[2]);var state_11744__$1 = state_11744;if(cljs.core.truth_(inst_11729))
{var statearr_11751_11773 = state_11744__$1;(statearr_11751_11773[1] = 8);
} else
{var statearr_11752_11774 = state_11744__$1;(statearr_11752_11774[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 7))
{var inst_11726 = (state_11744[2]);var state_11744__$1 = state_11744;var statearr_11753_11775 = state_11744__$1;(statearr_11753_11775[2] = inst_11726);
(statearr_11753_11775[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 8))
{var inst_11721 = (state_11744[7]);var inst_11731 = cljs.core.next.call(null,inst_11721);var inst_11721__$1 = inst_11731;var state_11744__$1 = (function (){var statearr_11754 = state_11744;(statearr_11754[7] = inst_11721__$1);
return statearr_11754;
})();var statearr_11755_11776 = state_11744__$1;(statearr_11755_11776[2] = null);
(statearr_11755_11776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 9))
{var state_11744__$1 = state_11744;if(cljs.core.truth_(close_QMARK_))
{var statearr_11756_11777 = state_11744__$1;(statearr_11756_11777[1] = 11);
} else
{var statearr_11757_11778 = state_11744__$1;(statearr_11757_11778[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 10))
{var inst_11740 = (state_11744[2]);var state_11744__$1 = state_11744;var statearr_11758_11779 = state_11744__$1;(statearr_11758_11779[2] = inst_11740);
(statearr_11758_11779[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 11))
{var inst_11735 = cljs.core.async.close_BANG_.call(null,ch);var state_11744__$1 = state_11744;var statearr_11759_11780 = state_11744__$1;(statearr_11759_11780[2] = inst_11735);
(statearr_11759_11780[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 12))
{var state_11744__$1 = state_11744;var statearr_11760_11781 = state_11744__$1;(statearr_11760_11781[2] = null);
(statearr_11760_11781[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11745 === 13))
{var inst_11738 = (state_11744[2]);var state_11744__$1 = state_11744;var statearr_11761_11782 = state_11744__$1;(statearr_11761_11782[2] = inst_11738);
(statearr_11761_11782[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_11765 = (new Array(8));(statearr_11765[0] = state_machine__6023__auto__);
(statearr_11765[1] = 1);
return statearr_11765;
});
var state_machine__6023__auto____1 = (function (state_11744){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_11744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e11766){if((e11766 instanceof Object))
{var ex__6026__auto__ = e11766;var statearr_11767_11783 = state_11744;(statearr_11767_11783[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11784 = state_11744;
state_11744 = G__11784;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_11744){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_11744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_11768 = f__6093__auto__.call(null);(statearr_11768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto__);
return statearr_11768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return c__6092__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3213__auto__ = _;if(and__3213__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3213__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3818__auto__ = (((_ == null))?null:_);return (function (){var or__3222__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12006 = (function (cs,ch,mult,meta12007){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12007 = meta12007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12006.cljs$lang$type = true;
cljs.core.async.t12006.cljs$lang$ctorStr = "cljs.core.async/t12006";
cljs.core.async.t12006.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t12006");
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12008){var self__ = this;
var _12008__$1 = this;return self__.meta12007;
});})(cs))
;
cljs.core.async.t12006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12008,meta12007__$1){var self__ = this;
var _12008__$1 = this;return (new cljs.core.async.t12006(self__.cs,self__.ch,self__.mult,meta12007__$1));
});})(cs))
;
cljs.core.async.__GT_t12006 = ((function (cs){
return (function __GT_t12006(cs__$1,ch__$1,mult__$1,meta12007){return (new cljs.core.async.t12006(cs__$1,ch__$1,mult__$1,meta12007));
});})(cs))
;
}
return (new cljs.core.async.t12006(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6092__auto___12227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_12139){var state_val_12140 = (state_12139[1]);if((state_val_12140 === 32))
{var inst_12079 = (state_12139[7]);var inst_12080 = (state_12139[8]);var inst_12081 = (state_12139[9]);var inst_12082 = (state_12139[10]);var inst_12094 = (state_12139[2]);var inst_12095 = (inst_12082 + 1);var tmp12141 = inst_12079;var tmp12142 = inst_12080;var tmp12143 = inst_12081;var inst_12079__$1 = tmp12141;var inst_12080__$1 = tmp12142;var inst_12081__$1 = tmp12143;var inst_12082__$1 = inst_12095;var state_12139__$1 = (function (){var statearr_12144 = state_12139;(statearr_12144[7] = inst_12079__$1);
(statearr_12144[8] = inst_12080__$1);
(statearr_12144[9] = inst_12081__$1);
(statearr_12144[10] = inst_12082__$1);
(statearr_12144[11] = inst_12094);
return statearr_12144;
})();var statearr_12145_12228 = state_12139__$1;(statearr_12145_12228[2] = null);
(statearr_12145_12228[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 1))
{var state_12139__$1 = state_12139;var statearr_12146_12229 = state_12139__$1;(statearr_12146_12229[2] = null);
(statearr_12146_12229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 33))
{var inst_12098 = (state_12139[12]);var inst_12100 = cljs.core.chunked_seq_QMARK_.call(null,inst_12098);var state_12139__$1 = state_12139;if(inst_12100)
{var statearr_12147_12230 = state_12139__$1;(statearr_12147_12230[1] = 36);
} else
{var statearr_12148_12231 = state_12139__$1;(statearr_12148_12231[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 2))
{var state_12139__$1 = state_12139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,4,ch);
} else
{if((state_val_12140 === 34))
{var state_12139__$1 = state_12139;var statearr_12149_12232 = state_12139__$1;(statearr_12149_12232[2] = null);
(statearr_12149_12232[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 3))
{var inst_12137 = (state_12139[2]);var state_12139__$1 = state_12139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12139__$1,inst_12137);
} else
{if((state_val_12140 === 35))
{var inst_12121 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12150_12233 = state_12139__$1;(statearr_12150_12233[2] = inst_12121);
(statearr_12150_12233[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 4))
{var inst_12011 = (state_12139[13]);var inst_12011__$1 = (state_12139[2]);var inst_12012 = (inst_12011__$1 == null);var state_12139__$1 = (function (){var statearr_12151 = state_12139;(statearr_12151[13] = inst_12011__$1);
return statearr_12151;
})();if(cljs.core.truth_(inst_12012))
{var statearr_12152_12234 = state_12139__$1;(statearr_12152_12234[1] = 5);
} else
{var statearr_12153_12235 = state_12139__$1;(statearr_12153_12235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 36))
{var inst_12098 = (state_12139[12]);var inst_12102 = cljs.core.chunk_first.call(null,inst_12098);var inst_12103 = cljs.core.chunk_rest.call(null,inst_12098);var inst_12104 = cljs.core.count.call(null,inst_12102);var inst_12079 = inst_12103;var inst_12080 = inst_12102;var inst_12081 = inst_12104;var inst_12082 = 0;var state_12139__$1 = (function (){var statearr_12154 = state_12139;(statearr_12154[7] = inst_12079);
(statearr_12154[8] = inst_12080);
(statearr_12154[9] = inst_12081);
(statearr_12154[10] = inst_12082);
return statearr_12154;
})();var statearr_12155_12236 = state_12139__$1;(statearr_12155_12236[2] = null);
(statearr_12155_12236[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 5))
{var inst_12018 = cljs.core.deref.call(null,cs);var inst_12019 = cljs.core.seq.call(null,inst_12018);var inst_12020 = inst_12019;var inst_12021 = null;var inst_12022 = 0;var inst_12023 = 0;var state_12139__$1 = (function (){var statearr_12156 = state_12139;(statearr_12156[14] = inst_12022);
(statearr_12156[15] = inst_12023);
(statearr_12156[16] = inst_12020);
(statearr_12156[17] = inst_12021);
return statearr_12156;
})();var statearr_12157_12237 = state_12139__$1;(statearr_12157_12237[2] = null);
(statearr_12157_12237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 37))
{var inst_12107 = (state_12139[18]);var inst_12011 = (state_12139[13]);var inst_12098 = (state_12139[12]);var inst_12107__$1 = cljs.core.first.call(null,inst_12098);var inst_12108 = cljs.core.async.put_BANG_.call(null,inst_12107__$1,inst_12011,done);var state_12139__$1 = (function (){var statearr_12158 = state_12139;(statearr_12158[18] = inst_12107__$1);
return statearr_12158;
})();if(cljs.core.truth_(inst_12108))
{var statearr_12159_12238 = state_12139__$1;(statearr_12159_12238[1] = 39);
} else
{var statearr_12160_12239 = state_12139__$1;(statearr_12160_12239[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 6))
{var inst_12071 = (state_12139[19]);var inst_12070 = cljs.core.deref.call(null,cs);var inst_12071__$1 = cljs.core.keys.call(null,inst_12070);var inst_12072 = cljs.core.count.call(null,inst_12071__$1);var inst_12073 = cljs.core.reset_BANG_.call(null,dctr,inst_12072);var inst_12078 = cljs.core.seq.call(null,inst_12071__$1);var inst_12079 = inst_12078;var inst_12080 = null;var inst_12081 = 0;var inst_12082 = 0;var state_12139__$1 = (function (){var statearr_12161 = state_12139;(statearr_12161[7] = inst_12079);
(statearr_12161[8] = inst_12080);
(statearr_12161[9] = inst_12081);
(statearr_12161[19] = inst_12071__$1);
(statearr_12161[20] = inst_12073);
(statearr_12161[10] = inst_12082);
return statearr_12161;
})();var statearr_12162_12240 = state_12139__$1;(statearr_12162_12240[2] = null);
(statearr_12162_12240[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 38))
{var inst_12118 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12163_12241 = state_12139__$1;(statearr_12163_12241[2] = inst_12118);
(statearr_12163_12241[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 7))
{var inst_12135 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12164_12242 = state_12139__$1;(statearr_12164_12242[2] = inst_12135);
(statearr_12164_12242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 39))
{var state_12139__$1 = state_12139;var statearr_12165_12243 = state_12139__$1;(statearr_12165_12243[2] = null);
(statearr_12165_12243[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 8))
{var inst_12022 = (state_12139[14]);var inst_12023 = (state_12139[15]);var inst_12025 = (inst_12023 < inst_12022);var inst_12026 = inst_12025;var state_12139__$1 = state_12139;if(cljs.core.truth_(inst_12026))
{var statearr_12166_12244 = state_12139__$1;(statearr_12166_12244[1] = 10);
} else
{var statearr_12167_12245 = state_12139__$1;(statearr_12167_12245[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 40))
{var inst_12107 = (state_12139[18]);var inst_12111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12112 = cljs.core.async.untap_STAR_.call(null,m,inst_12107);var state_12139__$1 = (function (){var statearr_12168 = state_12139;(statearr_12168[21] = inst_12111);
return statearr_12168;
})();var statearr_12169_12246 = state_12139__$1;(statearr_12169_12246[2] = inst_12112);
(statearr_12169_12246[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 9))
{var inst_12068 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12170_12247 = state_12139__$1;(statearr_12170_12247[2] = inst_12068);
(statearr_12170_12247[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 41))
{var inst_12098 = (state_12139[12]);var inst_12114 = (state_12139[2]);var inst_12115 = cljs.core.next.call(null,inst_12098);var inst_12079 = inst_12115;var inst_12080 = null;var inst_12081 = 0;var inst_12082 = 0;var state_12139__$1 = (function (){var statearr_12171 = state_12139;(statearr_12171[22] = inst_12114);
(statearr_12171[7] = inst_12079);
(statearr_12171[8] = inst_12080);
(statearr_12171[9] = inst_12081);
(statearr_12171[10] = inst_12082);
return statearr_12171;
})();var statearr_12172_12248 = state_12139__$1;(statearr_12172_12248[2] = null);
(statearr_12172_12248[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 10))
{var inst_12023 = (state_12139[15]);var inst_12021 = (state_12139[17]);var inst_12029 = cljs.core._nth.call(null,inst_12021,inst_12023);var inst_12030 = cljs.core.nth.call(null,inst_12029,0,null);var inst_12031 = cljs.core.nth.call(null,inst_12029,1,null);var state_12139__$1 = (function (){var statearr_12173 = state_12139;(statearr_12173[23] = inst_12030);
return statearr_12173;
})();if(cljs.core.truth_(inst_12031))
{var statearr_12174_12249 = state_12139__$1;(statearr_12174_12249[1] = 13);
} else
{var statearr_12175_12250 = state_12139__$1;(statearr_12175_12250[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 42))
{var state_12139__$1 = state_12139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,45,dchan);
} else
{if((state_val_12140 === 11))
{var inst_12020 = (state_12139[16]);var inst_12040 = (state_12139[24]);var inst_12040__$1 = cljs.core.seq.call(null,inst_12020);var state_12139__$1 = (function (){var statearr_12176 = state_12139;(statearr_12176[24] = inst_12040__$1);
return statearr_12176;
})();if(inst_12040__$1)
{var statearr_12177_12251 = state_12139__$1;(statearr_12177_12251[1] = 16);
} else
{var statearr_12178_12252 = state_12139__$1;(statearr_12178_12252[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 43))
{var state_12139__$1 = state_12139;var statearr_12179_12253 = state_12139__$1;(statearr_12179_12253[2] = null);
(statearr_12179_12253[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 12))
{var inst_12066 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12180_12254 = state_12139__$1;(statearr_12180_12254[2] = inst_12066);
(statearr_12180_12254[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 44))
{var inst_12132 = (state_12139[2]);var state_12139__$1 = (function (){var statearr_12181 = state_12139;(statearr_12181[25] = inst_12132);
return statearr_12181;
})();var statearr_12182_12255 = state_12139__$1;(statearr_12182_12255[2] = null);
(statearr_12182_12255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 13))
{var inst_12030 = (state_12139[23]);var inst_12033 = cljs.core.async.close_BANG_.call(null,inst_12030);var state_12139__$1 = state_12139;var statearr_12183_12256 = state_12139__$1;(statearr_12183_12256[2] = inst_12033);
(statearr_12183_12256[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 45))
{var inst_12129 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12187_12257 = state_12139__$1;(statearr_12187_12257[2] = inst_12129);
(statearr_12187_12257[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 14))
{var state_12139__$1 = state_12139;var statearr_12188_12258 = state_12139__$1;(statearr_12188_12258[2] = null);
(statearr_12188_12258[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 15))
{var inst_12022 = (state_12139[14]);var inst_12023 = (state_12139[15]);var inst_12020 = (state_12139[16]);var inst_12021 = (state_12139[17]);var inst_12036 = (state_12139[2]);var inst_12037 = (inst_12023 + 1);var tmp12184 = inst_12022;var tmp12185 = inst_12020;var tmp12186 = inst_12021;var inst_12020__$1 = tmp12185;var inst_12021__$1 = tmp12186;var inst_12022__$1 = tmp12184;var inst_12023__$1 = inst_12037;var state_12139__$1 = (function (){var statearr_12189 = state_12139;(statearr_12189[14] = inst_12022__$1);
(statearr_12189[15] = inst_12023__$1);
(statearr_12189[16] = inst_12020__$1);
(statearr_12189[17] = inst_12021__$1);
(statearr_12189[26] = inst_12036);
return statearr_12189;
})();var statearr_12190_12259 = state_12139__$1;(statearr_12190_12259[2] = null);
(statearr_12190_12259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 16))
{var inst_12040 = (state_12139[24]);var inst_12042 = cljs.core.chunked_seq_QMARK_.call(null,inst_12040);var state_12139__$1 = state_12139;if(inst_12042)
{var statearr_12191_12260 = state_12139__$1;(statearr_12191_12260[1] = 19);
} else
{var statearr_12192_12261 = state_12139__$1;(statearr_12192_12261[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 17))
{var state_12139__$1 = state_12139;var statearr_12193_12262 = state_12139__$1;(statearr_12193_12262[2] = null);
(statearr_12193_12262[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 18))
{var inst_12064 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12194_12263 = state_12139__$1;(statearr_12194_12263[2] = inst_12064);
(statearr_12194_12263[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 19))
{var inst_12040 = (state_12139[24]);var inst_12044 = cljs.core.chunk_first.call(null,inst_12040);var inst_12045 = cljs.core.chunk_rest.call(null,inst_12040);var inst_12046 = cljs.core.count.call(null,inst_12044);var inst_12020 = inst_12045;var inst_12021 = inst_12044;var inst_12022 = inst_12046;var inst_12023 = 0;var state_12139__$1 = (function (){var statearr_12195 = state_12139;(statearr_12195[14] = inst_12022);
(statearr_12195[15] = inst_12023);
(statearr_12195[16] = inst_12020);
(statearr_12195[17] = inst_12021);
return statearr_12195;
})();var statearr_12196_12264 = state_12139__$1;(statearr_12196_12264[2] = null);
(statearr_12196_12264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 20))
{var inst_12040 = (state_12139[24]);var inst_12050 = cljs.core.first.call(null,inst_12040);var inst_12051 = cljs.core.nth.call(null,inst_12050,0,null);var inst_12052 = cljs.core.nth.call(null,inst_12050,1,null);var state_12139__$1 = (function (){var statearr_12197 = state_12139;(statearr_12197[27] = inst_12051);
return statearr_12197;
})();if(cljs.core.truth_(inst_12052))
{var statearr_12198_12265 = state_12139__$1;(statearr_12198_12265[1] = 22);
} else
{var statearr_12199_12266 = state_12139__$1;(statearr_12199_12266[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 21))
{var inst_12061 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12200_12267 = state_12139__$1;(statearr_12200_12267[2] = inst_12061);
(statearr_12200_12267[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 22))
{var inst_12051 = (state_12139[27]);var inst_12054 = cljs.core.async.close_BANG_.call(null,inst_12051);var state_12139__$1 = state_12139;var statearr_12201_12268 = state_12139__$1;(statearr_12201_12268[2] = inst_12054);
(statearr_12201_12268[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 23))
{var state_12139__$1 = state_12139;var statearr_12202_12269 = state_12139__$1;(statearr_12202_12269[2] = null);
(statearr_12202_12269[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 24))
{var inst_12040 = (state_12139[24]);var inst_12057 = (state_12139[2]);var inst_12058 = cljs.core.next.call(null,inst_12040);var inst_12020 = inst_12058;var inst_12021 = null;var inst_12022 = 0;var inst_12023 = 0;var state_12139__$1 = (function (){var statearr_12203 = state_12139;(statearr_12203[14] = inst_12022);
(statearr_12203[15] = inst_12023);
(statearr_12203[16] = inst_12020);
(statearr_12203[17] = inst_12021);
(statearr_12203[28] = inst_12057);
return statearr_12203;
})();var statearr_12204_12270 = state_12139__$1;(statearr_12204_12270[2] = null);
(statearr_12204_12270[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 25))
{var inst_12081 = (state_12139[9]);var inst_12082 = (state_12139[10]);var inst_12084 = (inst_12082 < inst_12081);var inst_12085 = inst_12084;var state_12139__$1 = state_12139;if(cljs.core.truth_(inst_12085))
{var statearr_12205_12271 = state_12139__$1;(statearr_12205_12271[1] = 27);
} else
{var statearr_12206_12272 = state_12139__$1;(statearr_12206_12272[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 26))
{var inst_12071 = (state_12139[19]);var inst_12125 = (state_12139[2]);var inst_12126 = cljs.core.seq.call(null,inst_12071);var state_12139__$1 = (function (){var statearr_12207 = state_12139;(statearr_12207[29] = inst_12125);
return statearr_12207;
})();if(inst_12126)
{var statearr_12208_12273 = state_12139__$1;(statearr_12208_12273[1] = 42);
} else
{var statearr_12209_12274 = state_12139__$1;(statearr_12209_12274[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 27))
{var inst_12080 = (state_12139[8]);var inst_12087 = (state_12139[30]);var inst_12082 = (state_12139[10]);var inst_12011 = (state_12139[13]);var inst_12087__$1 = cljs.core._nth.call(null,inst_12080,inst_12082);var inst_12088 = cljs.core.async.put_BANG_.call(null,inst_12087__$1,inst_12011,done);var state_12139__$1 = (function (){var statearr_12210 = state_12139;(statearr_12210[30] = inst_12087__$1);
return statearr_12210;
})();if(cljs.core.truth_(inst_12088))
{var statearr_12211_12275 = state_12139__$1;(statearr_12211_12275[1] = 30);
} else
{var statearr_12212_12276 = state_12139__$1;(statearr_12212_12276[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 28))
{var inst_12079 = (state_12139[7]);var inst_12098 = (state_12139[12]);var inst_12098__$1 = cljs.core.seq.call(null,inst_12079);var state_12139__$1 = (function (){var statearr_12213 = state_12139;(statearr_12213[12] = inst_12098__$1);
return statearr_12213;
})();if(inst_12098__$1)
{var statearr_12214_12277 = state_12139__$1;(statearr_12214_12277[1] = 33);
} else
{var statearr_12215_12278 = state_12139__$1;(statearr_12215_12278[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 29))
{var inst_12123 = (state_12139[2]);var state_12139__$1 = state_12139;var statearr_12216_12279 = state_12139__$1;(statearr_12216_12279[2] = inst_12123);
(statearr_12216_12279[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 30))
{var state_12139__$1 = state_12139;var statearr_12217_12280 = state_12139__$1;(statearr_12217_12280[2] = null);
(statearr_12217_12280[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12140 === 31))
{var inst_12087 = (state_12139[30]);var inst_12091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12092 = cljs.core.async.untap_STAR_.call(null,m,inst_12087);var state_12139__$1 = (function (){var statearr_12218 = state_12139;(statearr_12218[31] = inst_12091);
return statearr_12218;
})();var statearr_12219_12281 = state_12139__$1;(statearr_12219_12281[2] = inst_12092);
(statearr_12219_12281[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_12223 = (new Array(32));(statearr_12223[0] = state_machine__6023__auto__);
(statearr_12223[1] = 1);
return statearr_12223;
});
var state_machine__6023__auto____1 = (function (state_12139){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_12139);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e12224){if((e12224 instanceof Object))
{var ex__6026__auto__ = e12224;var statearr_12225_12282 = state_12139;(statearr_12225_12282[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12283 = state_12139;
state_12139 = G__12283;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_12139){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_12139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_12226 = f__6093__auto__.call(null);(statearr_12226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___12227);
return statearr_12226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3213__auto__ = m;if(and__3213__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3818__auto__ = (((m == null))?null:m);return (function (){var or__3222__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12403 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12404){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12404 = meta12404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12403.cljs$lang$type = true;
cljs.core.async.t12403.cljs$lang$ctorStr = "cljs.core.async/t12403";
cljs.core.async.t12403.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t12403");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12405){var self__ = this;
var _12405__$1 = this;return self__.meta12404;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12405,meta12404__$1){var self__ = this;
var _12405__$1 = this;return (new cljs.core.async.t12403(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12404__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12403 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12403(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12404){return (new cljs.core.async.t12403(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12404));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12403(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6092__auto___12522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_12475){var state_val_12476 = (state_12475[1]);if((state_val_12476 === 1))
{var inst_12409 = (state_12475[7]);var inst_12409__$1 = calc_state.call(null);var inst_12410 = cljs.core.seq_QMARK_.call(null,inst_12409__$1);var state_12475__$1 = (function (){var statearr_12477 = state_12475;(statearr_12477[7] = inst_12409__$1);
return statearr_12477;
})();if(inst_12410)
{var statearr_12478_12523 = state_12475__$1;(statearr_12478_12523[1] = 2);
} else
{var statearr_12479_12524 = state_12475__$1;(statearr_12479_12524[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 2))
{var inst_12409 = (state_12475[7]);var inst_12412 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12409);var state_12475__$1 = state_12475;var statearr_12480_12525 = state_12475__$1;(statearr_12480_12525[2] = inst_12412);
(statearr_12480_12525[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 3))
{var inst_12409 = (state_12475[7]);var state_12475__$1 = state_12475;var statearr_12481_12526 = state_12475__$1;(statearr_12481_12526[2] = inst_12409);
(statearr_12481_12526[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 4))
{var inst_12409 = (state_12475[7]);var inst_12415 = (state_12475[2]);var inst_12416 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12417 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12418 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12419 = inst_12409;var state_12475__$1 = (function (){var statearr_12482 = state_12475;(statearr_12482[8] = inst_12416);
(statearr_12482[9] = inst_12418);
(statearr_12482[10] = inst_12417);
(statearr_12482[11] = inst_12419);
return statearr_12482;
})();var statearr_12483_12527 = state_12475__$1;(statearr_12483_12527[2] = null);
(statearr_12483_12527[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 5))
{var inst_12419 = (state_12475[11]);var inst_12422 = cljs.core.seq_QMARK_.call(null,inst_12419);var state_12475__$1 = state_12475;if(inst_12422)
{var statearr_12484_12528 = state_12475__$1;(statearr_12484_12528[1] = 7);
} else
{var statearr_12485_12529 = state_12475__$1;(statearr_12485_12529[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 6))
{var inst_12473 = (state_12475[2]);var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12475__$1,inst_12473);
} else
{if((state_val_12476 === 7))
{var inst_12419 = (state_12475[11]);var inst_12424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12419);var state_12475__$1 = state_12475;var statearr_12486_12530 = state_12475__$1;(statearr_12486_12530[2] = inst_12424);
(statearr_12486_12530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 8))
{var inst_12419 = (state_12475[11]);var state_12475__$1 = state_12475;var statearr_12487_12531 = state_12475__$1;(statearr_12487_12531[2] = inst_12419);
(statearr_12487_12531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 9))
{var inst_12427 = (state_12475[12]);var inst_12427__$1 = (state_12475[2]);var inst_12428 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12429 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12430 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12475__$1 = (function (){var statearr_12488 = state_12475;(statearr_12488[12] = inst_12427__$1);
(statearr_12488[13] = inst_12430);
(statearr_12488[14] = inst_12429);
return statearr_12488;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12475__$1,10,inst_12428);
} else
{if((state_val_12476 === 10))
{var inst_12434 = (state_12475[15]);var inst_12435 = (state_12475[16]);var inst_12433 = (state_12475[2]);var inst_12434__$1 = cljs.core.nth.call(null,inst_12433,0,null);var inst_12435__$1 = cljs.core.nth.call(null,inst_12433,1,null);var inst_12436 = (inst_12434__$1 == null);var inst_12437 = cljs.core._EQ_.call(null,inst_12435__$1,change);var inst_12438 = (inst_12436) || (inst_12437);var state_12475__$1 = (function (){var statearr_12489 = state_12475;(statearr_12489[15] = inst_12434__$1);
(statearr_12489[16] = inst_12435__$1);
return statearr_12489;
})();if(cljs.core.truth_(inst_12438))
{var statearr_12490_12532 = state_12475__$1;(statearr_12490_12532[1] = 11);
} else
{var statearr_12491_12533 = state_12475__$1;(statearr_12491_12533[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 11))
{var inst_12434 = (state_12475[15]);var inst_12440 = (inst_12434 == null);var state_12475__$1 = state_12475;if(cljs.core.truth_(inst_12440))
{var statearr_12492_12534 = state_12475__$1;(statearr_12492_12534[1] = 14);
} else
{var statearr_12493_12535 = state_12475__$1;(statearr_12493_12535[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 12))
{var inst_12430 = (state_12475[13]);var inst_12449 = (state_12475[17]);var inst_12435 = (state_12475[16]);var inst_12449__$1 = inst_12430.call(null,inst_12435);var state_12475__$1 = (function (){var statearr_12494 = state_12475;(statearr_12494[17] = inst_12449__$1);
return statearr_12494;
})();if(cljs.core.truth_(inst_12449__$1))
{var statearr_12495_12536 = state_12475__$1;(statearr_12495_12536[1] = 17);
} else
{var statearr_12496_12537 = state_12475__$1;(statearr_12496_12537[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 13))
{var inst_12471 = (state_12475[2]);var state_12475__$1 = state_12475;var statearr_12497_12538 = state_12475__$1;(statearr_12497_12538[2] = inst_12471);
(statearr_12497_12538[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 14))
{var inst_12435 = (state_12475[16]);var inst_12442 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12435);var state_12475__$1 = state_12475;var statearr_12498_12539 = state_12475__$1;(statearr_12498_12539[2] = inst_12442);
(statearr_12498_12539[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 15))
{var state_12475__$1 = state_12475;var statearr_12499_12540 = state_12475__$1;(statearr_12499_12540[2] = null);
(statearr_12499_12540[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 16))
{var inst_12445 = (state_12475[2]);var inst_12446 = calc_state.call(null);var inst_12419 = inst_12446;var state_12475__$1 = (function (){var statearr_12500 = state_12475;(statearr_12500[11] = inst_12419);
(statearr_12500[18] = inst_12445);
return statearr_12500;
})();var statearr_12501_12541 = state_12475__$1;(statearr_12501_12541[2] = null);
(statearr_12501_12541[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 17))
{var inst_12449 = (state_12475[17]);var state_12475__$1 = state_12475;var statearr_12502_12542 = state_12475__$1;(statearr_12502_12542[2] = inst_12449);
(statearr_12502_12542[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 18))
{var inst_12430 = (state_12475[13]);var inst_12429 = (state_12475[14]);var inst_12435 = (state_12475[16]);var inst_12452 = cljs.core.empty_QMARK_.call(null,inst_12430);var inst_12453 = inst_12429.call(null,inst_12435);var inst_12454 = cljs.core.not.call(null,inst_12453);var inst_12455 = (inst_12452) && (inst_12454);var state_12475__$1 = state_12475;var statearr_12503_12543 = state_12475__$1;(statearr_12503_12543[2] = inst_12455);
(statearr_12503_12543[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 19))
{var inst_12457 = (state_12475[2]);var state_12475__$1 = state_12475;if(cljs.core.truth_(inst_12457))
{var statearr_12504_12544 = state_12475__$1;(statearr_12504_12544[1] = 20);
} else
{var statearr_12505_12545 = state_12475__$1;(statearr_12505_12545[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 20))
{var inst_12434 = (state_12475[15]);var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12475__$1,23,out,inst_12434);
} else
{if((state_val_12476 === 21))
{var inst_12427 = (state_12475[12]);var inst_12419 = inst_12427;var state_12475__$1 = (function (){var statearr_12506 = state_12475;(statearr_12506[11] = inst_12419);
return statearr_12506;
})();var statearr_12507_12546 = state_12475__$1;(statearr_12507_12546[2] = null);
(statearr_12507_12546[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 22))
{var inst_12469 = (state_12475[2]);var state_12475__$1 = state_12475;var statearr_12508_12547 = state_12475__$1;(statearr_12508_12547[2] = inst_12469);
(statearr_12508_12547[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 23))
{var inst_12460 = (state_12475[2]);var state_12475__$1 = state_12475;if(cljs.core.truth_(inst_12460))
{var statearr_12509_12548 = state_12475__$1;(statearr_12509_12548[1] = 24);
} else
{var statearr_12510_12549 = state_12475__$1;(statearr_12510_12549[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 24))
{var inst_12427 = (state_12475[12]);var inst_12419 = inst_12427;var state_12475__$1 = (function (){var statearr_12511 = state_12475;(statearr_12511[11] = inst_12419);
return statearr_12511;
})();var statearr_12512_12550 = state_12475__$1;(statearr_12512_12550[2] = null);
(statearr_12512_12550[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 25))
{var state_12475__$1 = state_12475;var statearr_12513_12551 = state_12475__$1;(statearr_12513_12551[2] = null);
(statearr_12513_12551[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12476 === 26))
{var inst_12465 = (state_12475[2]);var state_12475__$1 = state_12475;var statearr_12514_12552 = state_12475__$1;(statearr_12514_12552[2] = inst_12465);
(statearr_12514_12552[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_12518 = (new Array(19));(statearr_12518[0] = state_machine__6023__auto__);
(statearr_12518[1] = 1);
return statearr_12518;
});
var state_machine__6023__auto____1 = (function (state_12475){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_12475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e12519){if((e12519 instanceof Object))
{var ex__6026__auto__ = e12519;var statearr_12520_12553 = state_12475;(statearr_12520_12553[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12554 = state_12475;
state_12475 = G__12554;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_12475){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_12475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_12521 = f__6093__auto__.call(null);(statearr_12521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___12522);
return statearr_12521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3213__auto__ = p;if(and__3213__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3213__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3818__auto__ = (((p == null))?null:p);return (function (){var or__3222__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3213__auto__ = p;if(and__3213__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3213__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3818__auto__ = (((p == null))?null:p);return (function (){var or__3222__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3213__auto__ = p;if(and__3213__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3213__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3818__auto__ = (((p == null))?null:p);return (function (){var or__3222__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3213__auto__ = p;if(and__3213__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3213__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3818__auto__ = (((p == null))?null:p);return (function (){var or__3222__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3222__auto__))
{return or__3222__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3222__auto__,mults){
return (function (p1__12555_SHARP_){if(cljs.core.truth_(p1__12555_SHARP_.call(null,topic)))
{return p1__12555_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12555_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3222__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12678 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12679){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12679 = meta12679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12678.cljs$lang$type = true;
cljs.core.async.t12678.cljs$lang$ctorStr = "cljs.core.async/t12678";
cljs.core.async.t12678.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3759__auto__,writer__3760__auto__,opt__3761__auto__){return cljs.core._write.call(null,writer__3760__auto__,"cljs.core.async/t12678");
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12680){var self__ = this;
var _12680__$1 = this;return self__.meta12679;
});})(mults,ensure_mult))
;
cljs.core.async.t12678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12680,meta12679__$1){var self__ = this;
var _12680__$1 = this;return (new cljs.core.async.t12678(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12679__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12678 = ((function (mults,ensure_mult){
return (function __GT_t12678(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12679){return (new cljs.core.async.t12678(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12679));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12678(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6092__auto___12800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_12752){var state_val_12753 = (state_12752[1]);if((state_val_12753 === 1))
{var state_12752__$1 = state_12752;var statearr_12754_12801 = state_12752__$1;(statearr_12754_12801[2] = null);
(statearr_12754_12801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 2))
{var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12752__$1,4,ch);
} else
{if((state_val_12753 === 3))
{var inst_12750 = (state_12752[2]);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12752__$1,inst_12750);
} else
{if((state_val_12753 === 4))
{var inst_12683 = (state_12752[7]);var inst_12683__$1 = (state_12752[2]);var inst_12684 = (inst_12683__$1 == null);var state_12752__$1 = (function (){var statearr_12755 = state_12752;(statearr_12755[7] = inst_12683__$1);
return statearr_12755;
})();if(cljs.core.truth_(inst_12684))
{var statearr_12756_12802 = state_12752__$1;(statearr_12756_12802[1] = 5);
} else
{var statearr_12757_12803 = state_12752__$1;(statearr_12757_12803[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 5))
{var inst_12690 = cljs.core.deref.call(null,mults);var inst_12691 = cljs.core.vals.call(null,inst_12690);var inst_12692 = cljs.core.seq.call(null,inst_12691);var inst_12693 = inst_12692;var inst_12694 = null;var inst_12695 = 0;var inst_12696 = 0;var state_12752__$1 = (function (){var statearr_12758 = state_12752;(statearr_12758[8] = inst_12696);
(statearr_12758[9] = inst_12695);
(statearr_12758[10] = inst_12693);
(statearr_12758[11] = inst_12694);
return statearr_12758;
})();var statearr_12759_12804 = state_12752__$1;(statearr_12759_12804[2] = null);
(statearr_12759_12804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 6))
{var inst_12733 = (state_12752[12]);var inst_12683 = (state_12752[7]);var inst_12731 = (state_12752[13]);var inst_12731__$1 = topic_fn.call(null,inst_12683);var inst_12732 = cljs.core.deref.call(null,mults);var inst_12733__$1 = cljs.core.get.call(null,inst_12732,inst_12731__$1);var state_12752__$1 = (function (){var statearr_12760 = state_12752;(statearr_12760[12] = inst_12733__$1);
(statearr_12760[13] = inst_12731__$1);
return statearr_12760;
})();if(cljs.core.truth_(inst_12733__$1))
{var statearr_12761_12805 = state_12752__$1;(statearr_12761_12805[1] = 19);
} else
{var statearr_12762_12806 = state_12752__$1;(statearr_12762_12806[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 7))
{var inst_12748 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12763_12807 = state_12752__$1;(statearr_12763_12807[2] = inst_12748);
(statearr_12763_12807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 8))
{var inst_12696 = (state_12752[8]);var inst_12695 = (state_12752[9]);var inst_12698 = (inst_12696 < inst_12695);var inst_12699 = inst_12698;var state_12752__$1 = state_12752;if(cljs.core.truth_(inst_12699))
{var statearr_12767_12808 = state_12752__$1;(statearr_12767_12808[1] = 10);
} else
{var statearr_12768_12809 = state_12752__$1;(statearr_12768_12809[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 9))
{var inst_12729 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12769_12810 = state_12752__$1;(statearr_12769_12810[2] = inst_12729);
(statearr_12769_12810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 10))
{var inst_12696 = (state_12752[8]);var inst_12695 = (state_12752[9]);var inst_12693 = (state_12752[10]);var inst_12694 = (state_12752[11]);var inst_12701 = cljs.core._nth.call(null,inst_12694,inst_12696);var inst_12702 = cljs.core.async.muxch_STAR_.call(null,inst_12701);var inst_12703 = cljs.core.async.close_BANG_.call(null,inst_12702);var inst_12704 = (inst_12696 + 1);var tmp12764 = inst_12695;var tmp12765 = inst_12693;var tmp12766 = inst_12694;var inst_12693__$1 = tmp12765;var inst_12694__$1 = tmp12766;var inst_12695__$1 = tmp12764;var inst_12696__$1 = inst_12704;var state_12752__$1 = (function (){var statearr_12770 = state_12752;(statearr_12770[8] = inst_12696__$1);
(statearr_12770[9] = inst_12695__$1);
(statearr_12770[10] = inst_12693__$1);
(statearr_12770[11] = inst_12694__$1);
(statearr_12770[14] = inst_12703);
return statearr_12770;
})();var statearr_12771_12811 = state_12752__$1;(statearr_12771_12811[2] = null);
(statearr_12771_12811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 11))
{var inst_12693 = (state_12752[10]);var inst_12707 = (state_12752[15]);var inst_12707__$1 = cljs.core.seq.call(null,inst_12693);var state_12752__$1 = (function (){var statearr_12772 = state_12752;(statearr_12772[15] = inst_12707__$1);
return statearr_12772;
})();if(inst_12707__$1)
{var statearr_12773_12812 = state_12752__$1;(statearr_12773_12812[1] = 13);
} else
{var statearr_12774_12813 = state_12752__$1;(statearr_12774_12813[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 12))
{var inst_12727 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12775_12814 = state_12752__$1;(statearr_12775_12814[2] = inst_12727);
(statearr_12775_12814[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 13))
{var inst_12707 = (state_12752[15]);var inst_12709 = cljs.core.chunked_seq_QMARK_.call(null,inst_12707);var state_12752__$1 = state_12752;if(inst_12709)
{var statearr_12776_12815 = state_12752__$1;(statearr_12776_12815[1] = 16);
} else
{var statearr_12777_12816 = state_12752__$1;(statearr_12777_12816[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 14))
{var state_12752__$1 = state_12752;var statearr_12778_12817 = state_12752__$1;(statearr_12778_12817[2] = null);
(statearr_12778_12817[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 15))
{var inst_12725 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12779_12818 = state_12752__$1;(statearr_12779_12818[2] = inst_12725);
(statearr_12779_12818[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 16))
{var inst_12707 = (state_12752[15]);var inst_12711 = cljs.core.chunk_first.call(null,inst_12707);var inst_12712 = cljs.core.chunk_rest.call(null,inst_12707);var inst_12713 = cljs.core.count.call(null,inst_12711);var inst_12693 = inst_12712;var inst_12694 = inst_12711;var inst_12695 = inst_12713;var inst_12696 = 0;var state_12752__$1 = (function (){var statearr_12780 = state_12752;(statearr_12780[8] = inst_12696);
(statearr_12780[9] = inst_12695);
(statearr_12780[10] = inst_12693);
(statearr_12780[11] = inst_12694);
return statearr_12780;
})();var statearr_12781_12819 = state_12752__$1;(statearr_12781_12819[2] = null);
(statearr_12781_12819[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 17))
{var inst_12707 = (state_12752[15]);var inst_12716 = cljs.core.first.call(null,inst_12707);var inst_12717 = cljs.core.async.muxch_STAR_.call(null,inst_12716);var inst_12718 = cljs.core.async.close_BANG_.call(null,inst_12717);var inst_12719 = cljs.core.next.call(null,inst_12707);var inst_12693 = inst_12719;var inst_12694 = null;var inst_12695 = 0;var inst_12696 = 0;var state_12752__$1 = (function (){var statearr_12782 = state_12752;(statearr_12782[16] = inst_12718);
(statearr_12782[8] = inst_12696);
(statearr_12782[9] = inst_12695);
(statearr_12782[10] = inst_12693);
(statearr_12782[11] = inst_12694);
return statearr_12782;
})();var statearr_12783_12820 = state_12752__$1;(statearr_12783_12820[2] = null);
(statearr_12783_12820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 18))
{var inst_12722 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12784_12821 = state_12752__$1;(statearr_12784_12821[2] = inst_12722);
(statearr_12784_12821[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 19))
{var inst_12733 = (state_12752[12]);var inst_12683 = (state_12752[7]);var inst_12735 = cljs.core.async.muxch_STAR_.call(null,inst_12733);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12752__$1,22,inst_12735,inst_12683);
} else
{if((state_val_12753 === 20))
{var state_12752__$1 = state_12752;var statearr_12785_12822 = state_12752__$1;(statearr_12785_12822[2] = null);
(statearr_12785_12822[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 21))
{var inst_12745 = (state_12752[2]);var state_12752__$1 = (function (){var statearr_12786 = state_12752;(statearr_12786[17] = inst_12745);
return statearr_12786;
})();var statearr_12787_12823 = state_12752__$1;(statearr_12787_12823[2] = null);
(statearr_12787_12823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 22))
{var inst_12737 = (state_12752[2]);var state_12752__$1 = state_12752;if(cljs.core.truth_(inst_12737))
{var statearr_12788_12824 = state_12752__$1;(statearr_12788_12824[1] = 23);
} else
{var statearr_12789_12825 = state_12752__$1;(statearr_12789_12825[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 23))
{var state_12752__$1 = state_12752;var statearr_12790_12826 = state_12752__$1;(statearr_12790_12826[2] = null);
(statearr_12790_12826[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 24))
{var inst_12731 = (state_12752[13]);var inst_12740 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12731);var state_12752__$1 = state_12752;var statearr_12791_12827 = state_12752__$1;(statearr_12791_12827[2] = inst_12740);
(statearr_12791_12827[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 25))
{var inst_12742 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12792_12828 = state_12752__$1;(statearr_12792_12828[2] = inst_12742);
(statearr_12792_12828[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_12796 = (new Array(18));(statearr_12796[0] = state_machine__6023__auto__);
(statearr_12796[1] = 1);
return statearr_12796;
});
var state_machine__6023__auto____1 = (function (state_12752){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_12752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e12797){if((e12797 instanceof Object))
{var ex__6026__auto__ = e12797;var statearr_12798_12829 = state_12752;(statearr_12798_12829[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12830 = state_12752;
state_12752 = G__12830;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_12752){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_12752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_12799 = f__6093__auto__.call(null);(statearr_12799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___12800);
return statearr_12799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6092__auto___12967 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_12937){var state_val_12938 = (state_12937[1]);if((state_val_12938 === 1))
{var state_12937__$1 = state_12937;var statearr_12939_12968 = state_12937__$1;(statearr_12939_12968[2] = null);
(statearr_12939_12968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 2))
{var inst_12900 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12901 = 0;var state_12937__$1 = (function (){var statearr_12940 = state_12937;(statearr_12940[7] = inst_12900);
(statearr_12940[8] = inst_12901);
return statearr_12940;
})();var statearr_12941_12969 = state_12937__$1;(statearr_12941_12969[2] = null);
(statearr_12941_12969[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 3))
{var inst_12935 = (state_12937[2]);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12937__$1,inst_12935);
} else
{if((state_val_12938 === 4))
{var inst_12901 = (state_12937[8]);var inst_12903 = (inst_12901 < cnt);var state_12937__$1 = state_12937;if(cljs.core.truth_(inst_12903))
{var statearr_12942_12970 = state_12937__$1;(statearr_12942_12970[1] = 6);
} else
{var statearr_12943_12971 = state_12937__$1;(statearr_12943_12971[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 5))
{var inst_12921 = (state_12937[2]);var state_12937__$1 = (function (){var statearr_12944 = state_12937;(statearr_12944[9] = inst_12921);
return statearr_12944;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12937__$1,12,dchan);
} else
{if((state_val_12938 === 6))
{var state_12937__$1 = state_12937;var statearr_12945_12972 = state_12937__$1;(statearr_12945_12972[2] = null);
(statearr_12945_12972[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 7))
{var state_12937__$1 = state_12937;var statearr_12946_12973 = state_12937__$1;(statearr_12946_12973[2] = null);
(statearr_12946_12973[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 8))
{var inst_12919 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12947_12974 = state_12937__$1;(statearr_12947_12974[2] = inst_12919);
(statearr_12947_12974[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 9))
{var inst_12901 = (state_12937[8]);var inst_12914 = (state_12937[2]);var inst_12915 = (inst_12901 + 1);var inst_12901__$1 = inst_12915;var state_12937__$1 = (function (){var statearr_12948 = state_12937;(statearr_12948[10] = inst_12914);
(statearr_12948[8] = inst_12901__$1);
return statearr_12948;
})();var statearr_12949_12975 = state_12937__$1;(statearr_12949_12975[2] = null);
(statearr_12949_12975[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 10))
{var inst_12905 = (state_12937[2]);var inst_12906 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12937__$1 = (function (){var statearr_12950 = state_12937;(statearr_12950[11] = inst_12905);
return statearr_12950;
})();var statearr_12951_12976 = state_12937__$1;(statearr_12951_12976[2] = inst_12906);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 11))
{var inst_12901 = (state_12937[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12937,10,Object,null,9);var inst_12910 = chs__$1.call(null,inst_12901);var inst_12911 = done.call(null,inst_12901);var inst_12912 = cljs.core.async.take_BANG_.call(null,inst_12910,inst_12911);var state_12937__$1 = state_12937;var statearr_12952_12977 = state_12937__$1;(statearr_12952_12977[2] = inst_12912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 12))
{var inst_12923 = (state_12937[12]);var inst_12923__$1 = (state_12937[2]);var inst_12924 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12923__$1);var state_12937__$1 = (function (){var statearr_12953 = state_12937;(statearr_12953[12] = inst_12923__$1);
return statearr_12953;
})();if(cljs.core.truth_(inst_12924))
{var statearr_12954_12978 = state_12937__$1;(statearr_12954_12978[1] = 13);
} else
{var statearr_12955_12979 = state_12937__$1;(statearr_12955_12979[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 13))
{var inst_12926 = cljs.core.async.close_BANG_.call(null,out);var state_12937__$1 = state_12937;var statearr_12956_12980 = state_12937__$1;(statearr_12956_12980[2] = inst_12926);
(statearr_12956_12980[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 14))
{var inst_12923 = (state_12937[12]);var inst_12928 = cljs.core.apply.call(null,f,inst_12923);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12937__$1,16,out,inst_12928);
} else
{if((state_val_12938 === 15))
{var inst_12933 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12957_12981 = state_12937__$1;(statearr_12957_12981[2] = inst_12933);
(statearr_12957_12981[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 16))
{var inst_12930 = (state_12937[2]);var state_12937__$1 = (function (){var statearr_12958 = state_12937;(statearr_12958[13] = inst_12930);
return statearr_12958;
})();var statearr_12959_12982 = state_12937__$1;(statearr_12959_12982[2] = null);
(statearr_12959_12982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_12963 = (new Array(14));(statearr_12963[0] = state_machine__6023__auto__);
(statearr_12963[1] = 1);
return statearr_12963;
});
var state_machine__6023__auto____1 = (function (state_12937){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_12937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e12964){if((e12964 instanceof Object))
{var ex__6026__auto__ = e12964;var statearr_12965_12983 = state_12937;(statearr_12965_12983[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12984 = state_12937;
state_12937 = G__12984;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_12937){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_12937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_12966 = f__6093__auto__.call(null);(statearr_12966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___12967);
return statearr_12966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___13092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_13068){var state_val_13069 = (state_13068[1]);if((state_val_13069 === 1))
{var inst_13039 = cljs.core.vec.call(null,chs);var inst_13040 = inst_13039;var state_13068__$1 = (function (){var statearr_13070 = state_13068;(statearr_13070[7] = inst_13040);
return statearr_13070;
})();var statearr_13071_13093 = state_13068__$1;(statearr_13071_13093[2] = null);
(statearr_13071_13093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 2))
{var inst_13040 = (state_13068[7]);var inst_13042 = cljs.core.count.call(null,inst_13040);var inst_13043 = (inst_13042 > 0);var state_13068__$1 = state_13068;if(cljs.core.truth_(inst_13043))
{var statearr_13072_13094 = state_13068__$1;(statearr_13072_13094[1] = 4);
} else
{var statearr_13073_13095 = state_13068__$1;(statearr_13073_13095[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 3))
{var inst_13066 = (state_13068[2]);var state_13068__$1 = state_13068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13068__$1,inst_13066);
} else
{if((state_val_13069 === 4))
{var inst_13040 = (state_13068[7]);var state_13068__$1 = state_13068;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13068__$1,7,inst_13040);
} else
{if((state_val_13069 === 5))
{var inst_13062 = cljs.core.async.close_BANG_.call(null,out);var state_13068__$1 = state_13068;var statearr_13074_13096 = state_13068__$1;(statearr_13074_13096[2] = inst_13062);
(statearr_13074_13096[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 6))
{var inst_13064 = (state_13068[2]);var state_13068__$1 = state_13068;var statearr_13075_13097 = state_13068__$1;(statearr_13075_13097[2] = inst_13064);
(statearr_13075_13097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 7))
{var inst_13048 = (state_13068[8]);var inst_13047 = (state_13068[9]);var inst_13047__$1 = (state_13068[2]);var inst_13048__$1 = cljs.core.nth.call(null,inst_13047__$1,0,null);var inst_13049 = cljs.core.nth.call(null,inst_13047__$1,1,null);var inst_13050 = (inst_13048__$1 == null);var state_13068__$1 = (function (){var statearr_13076 = state_13068;(statearr_13076[10] = inst_13049);
(statearr_13076[8] = inst_13048__$1);
(statearr_13076[9] = inst_13047__$1);
return statearr_13076;
})();if(cljs.core.truth_(inst_13050))
{var statearr_13077_13098 = state_13068__$1;(statearr_13077_13098[1] = 8);
} else
{var statearr_13078_13099 = state_13068__$1;(statearr_13078_13099[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 8))
{var inst_13049 = (state_13068[10]);var inst_13048 = (state_13068[8]);var inst_13047 = (state_13068[9]);var inst_13040 = (state_13068[7]);var inst_13052 = (function (){var c = inst_13049;var v = inst_13048;var vec__13045 = inst_13047;var cs = inst_13040;return ((function (c,v,vec__13045,cs,inst_13049,inst_13048,inst_13047,inst_13040,state_val_13069){
return (function (p1__12985_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12985_SHARP_);
});
;})(c,v,vec__13045,cs,inst_13049,inst_13048,inst_13047,inst_13040,state_val_13069))
})();var inst_13053 = cljs.core.filterv.call(null,inst_13052,inst_13040);var inst_13040__$1 = inst_13053;var state_13068__$1 = (function (){var statearr_13079 = state_13068;(statearr_13079[7] = inst_13040__$1);
return statearr_13079;
})();var statearr_13080_13100 = state_13068__$1;(statearr_13080_13100[2] = null);
(statearr_13080_13100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 9))
{var inst_13048 = (state_13068[8]);var state_13068__$1 = state_13068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13068__$1,11,out,inst_13048);
} else
{if((state_val_13069 === 10))
{var inst_13060 = (state_13068[2]);var state_13068__$1 = state_13068;var statearr_13082_13101 = state_13068__$1;(statearr_13082_13101[2] = inst_13060);
(statearr_13082_13101[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13069 === 11))
{var inst_13040 = (state_13068[7]);var inst_13057 = (state_13068[2]);var tmp13081 = inst_13040;var inst_13040__$1 = tmp13081;var state_13068__$1 = (function (){var statearr_13083 = state_13068;(statearr_13083[7] = inst_13040__$1);
(statearr_13083[11] = inst_13057);
return statearr_13083;
})();var statearr_13084_13102 = state_13068__$1;(statearr_13084_13102[2] = null);
(statearr_13084_13102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_13088 = (new Array(12));(statearr_13088[0] = state_machine__6023__auto__);
(statearr_13088[1] = 1);
return statearr_13088;
});
var state_machine__6023__auto____1 = (function (state_13068){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_13068);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e13089){if((e13089 instanceof Object))
{var ex__6026__auto__ = e13089;var statearr_13090_13103 = state_13068;(statearr_13090_13103[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13104 = state_13068;
state_13068 = G__13104;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_13068){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_13068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_13091 = f__6093__auto__.call(null);(statearr_13091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___13092);
return statearr_13091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___13197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_13174){var state_val_13175 = (state_13174[1]);if((state_val_13175 === 1))
{var inst_13151 = 0;var state_13174__$1 = (function (){var statearr_13176 = state_13174;(statearr_13176[7] = inst_13151);
return statearr_13176;
})();var statearr_13177_13198 = state_13174__$1;(statearr_13177_13198[2] = null);
(statearr_13177_13198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 2))
{var inst_13151 = (state_13174[7]);var inst_13153 = (inst_13151 < n);var state_13174__$1 = state_13174;if(cljs.core.truth_(inst_13153))
{var statearr_13178_13199 = state_13174__$1;(statearr_13178_13199[1] = 4);
} else
{var statearr_13179_13200 = state_13174__$1;(statearr_13179_13200[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 3))
{var inst_13171 = (state_13174[2]);var inst_13172 = cljs.core.async.close_BANG_.call(null,out);var state_13174__$1 = (function (){var statearr_13180 = state_13174;(statearr_13180[8] = inst_13171);
return statearr_13180;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13174__$1,inst_13172);
} else
{if((state_val_13175 === 4))
{var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13174__$1,7,ch);
} else
{if((state_val_13175 === 5))
{var state_13174__$1 = state_13174;var statearr_13181_13201 = state_13174__$1;(statearr_13181_13201[2] = null);
(statearr_13181_13201[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 6))
{var inst_13169 = (state_13174[2]);var state_13174__$1 = state_13174;var statearr_13182_13202 = state_13174__$1;(statearr_13182_13202[2] = inst_13169);
(statearr_13182_13202[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 7))
{var inst_13156 = (state_13174[9]);var inst_13156__$1 = (state_13174[2]);var inst_13157 = (inst_13156__$1 == null);var inst_13158 = cljs.core.not.call(null,inst_13157);var state_13174__$1 = (function (){var statearr_13183 = state_13174;(statearr_13183[9] = inst_13156__$1);
return statearr_13183;
})();if(inst_13158)
{var statearr_13184_13203 = state_13174__$1;(statearr_13184_13203[1] = 8);
} else
{var statearr_13185_13204 = state_13174__$1;(statearr_13185_13204[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 8))
{var inst_13156 = (state_13174[9]);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,11,out,inst_13156);
} else
{if((state_val_13175 === 9))
{var state_13174__$1 = state_13174;var statearr_13186_13205 = state_13174__$1;(statearr_13186_13205[2] = null);
(statearr_13186_13205[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 10))
{var inst_13166 = (state_13174[2]);var state_13174__$1 = state_13174;var statearr_13187_13206 = state_13174__$1;(statearr_13187_13206[2] = inst_13166);
(statearr_13187_13206[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 11))
{var inst_13151 = (state_13174[7]);var inst_13161 = (state_13174[2]);var inst_13162 = (inst_13151 + 1);var inst_13151__$1 = inst_13162;var state_13174__$1 = (function (){var statearr_13188 = state_13174;(statearr_13188[7] = inst_13151__$1);
(statearr_13188[10] = inst_13161);
return statearr_13188;
})();var statearr_13189_13207 = state_13174__$1;(statearr_13189_13207[2] = null);
(statearr_13189_13207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_13193 = (new Array(11));(statearr_13193[0] = state_machine__6023__auto__);
(statearr_13193[1] = 1);
return statearr_13193;
});
var state_machine__6023__auto____1 = (function (state_13174){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_13174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e13194){if((e13194 instanceof Object))
{var ex__6026__auto__ = e13194;var statearr_13195_13208 = state_13174;(statearr_13195_13208[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13209 = state_13174;
state_13174 = G__13209;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_13174){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_13174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_13196 = f__6093__auto__.call(null);(statearr_13196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___13197);
return statearr_13196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___13306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_13281){var state_val_13282 = (state_13281[1]);if((state_val_13282 === 1))
{var inst_13258 = null;var state_13281__$1 = (function (){var statearr_13283 = state_13281;(statearr_13283[7] = inst_13258);
return statearr_13283;
})();var statearr_13284_13307 = state_13281__$1;(statearr_13284_13307[2] = null);
(statearr_13284_13307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 2))
{var state_13281__$1 = state_13281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13281__$1,4,ch);
} else
{if((state_val_13282 === 3))
{var inst_13278 = (state_13281[2]);var inst_13279 = cljs.core.async.close_BANG_.call(null,out);var state_13281__$1 = (function (){var statearr_13285 = state_13281;(statearr_13285[8] = inst_13278);
return statearr_13285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13281__$1,inst_13279);
} else
{if((state_val_13282 === 4))
{var inst_13261 = (state_13281[9]);var inst_13261__$1 = (state_13281[2]);var inst_13262 = (inst_13261__$1 == null);var inst_13263 = cljs.core.not.call(null,inst_13262);var state_13281__$1 = (function (){var statearr_13286 = state_13281;(statearr_13286[9] = inst_13261__$1);
return statearr_13286;
})();if(inst_13263)
{var statearr_13287_13308 = state_13281__$1;(statearr_13287_13308[1] = 5);
} else
{var statearr_13288_13309 = state_13281__$1;(statearr_13288_13309[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 5))
{var inst_13258 = (state_13281[7]);var inst_13261 = (state_13281[9]);var inst_13265 = cljs.core._EQ_.call(null,inst_13261,inst_13258);var state_13281__$1 = state_13281;if(inst_13265)
{var statearr_13289_13310 = state_13281__$1;(statearr_13289_13310[1] = 8);
} else
{var statearr_13290_13311 = state_13281__$1;(statearr_13290_13311[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 6))
{var state_13281__$1 = state_13281;var statearr_13292_13312 = state_13281__$1;(statearr_13292_13312[2] = null);
(statearr_13292_13312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 7))
{var inst_13276 = (state_13281[2]);var state_13281__$1 = state_13281;var statearr_13293_13313 = state_13281__$1;(statearr_13293_13313[2] = inst_13276);
(statearr_13293_13313[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 8))
{var inst_13258 = (state_13281[7]);var tmp13291 = inst_13258;var inst_13258__$1 = tmp13291;var state_13281__$1 = (function (){var statearr_13294 = state_13281;(statearr_13294[7] = inst_13258__$1);
return statearr_13294;
})();var statearr_13295_13314 = state_13281__$1;(statearr_13295_13314[2] = null);
(statearr_13295_13314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 9))
{var inst_13261 = (state_13281[9]);var state_13281__$1 = state_13281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13281__$1,11,out,inst_13261);
} else
{if((state_val_13282 === 10))
{var inst_13273 = (state_13281[2]);var state_13281__$1 = state_13281;var statearr_13296_13315 = state_13281__$1;(statearr_13296_13315[2] = inst_13273);
(statearr_13296_13315[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13282 === 11))
{var inst_13261 = (state_13281[9]);var inst_13270 = (state_13281[2]);var inst_13258 = inst_13261;var state_13281__$1 = (function (){var statearr_13297 = state_13281;(statearr_13297[10] = inst_13270);
(statearr_13297[7] = inst_13258);
return statearr_13297;
})();var statearr_13298_13316 = state_13281__$1;(statearr_13298_13316[2] = null);
(statearr_13298_13316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_13302 = (new Array(11));(statearr_13302[0] = state_machine__6023__auto__);
(statearr_13302[1] = 1);
return statearr_13302;
});
var state_machine__6023__auto____1 = (function (state_13281){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_13281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e13303){if((e13303 instanceof Object))
{var ex__6026__auto__ = e13303;var statearr_13304_13317 = state_13281;(statearr_13304_13317[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13318 = state_13281;
state_13281 = G__13318;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_13281){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_13281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_13305 = f__6093__auto__.call(null);(statearr_13305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___13306);
return statearr_13305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___13453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_13423){var state_val_13424 = (state_13423[1]);if((state_val_13424 === 1))
{var inst_13386 = (new Array(n));var inst_13387 = inst_13386;var inst_13388 = 0;var state_13423__$1 = (function (){var statearr_13425 = state_13423;(statearr_13425[7] = inst_13388);
(statearr_13425[8] = inst_13387);
return statearr_13425;
})();var statearr_13426_13454 = state_13423__$1;(statearr_13426_13454[2] = null);
(statearr_13426_13454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 2))
{var state_13423__$1 = state_13423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13423__$1,4,ch);
} else
{if((state_val_13424 === 3))
{var inst_13421 = (state_13423[2]);var state_13423__$1 = state_13423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13423__$1,inst_13421);
} else
{if((state_val_13424 === 4))
{var inst_13391 = (state_13423[9]);var inst_13391__$1 = (state_13423[2]);var inst_13392 = (inst_13391__$1 == null);var inst_13393 = cljs.core.not.call(null,inst_13392);var state_13423__$1 = (function (){var statearr_13427 = state_13423;(statearr_13427[9] = inst_13391__$1);
return statearr_13427;
})();if(inst_13393)
{var statearr_13428_13455 = state_13423__$1;(statearr_13428_13455[1] = 5);
} else
{var statearr_13429_13456 = state_13423__$1;(statearr_13429_13456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 5))
{var inst_13396 = (state_13423[10]);var inst_13391 = (state_13423[9]);var inst_13388 = (state_13423[7]);var inst_13387 = (state_13423[8]);var inst_13395 = (inst_13387[inst_13388] = inst_13391);var inst_13396__$1 = (inst_13388 + 1);var inst_13397 = (inst_13396__$1 < n);var state_13423__$1 = (function (){var statearr_13430 = state_13423;(statearr_13430[11] = inst_13395);
(statearr_13430[10] = inst_13396__$1);
return statearr_13430;
})();if(cljs.core.truth_(inst_13397))
{var statearr_13431_13457 = state_13423__$1;(statearr_13431_13457[1] = 8);
} else
{var statearr_13432_13458 = state_13423__$1;(statearr_13432_13458[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 6))
{var inst_13388 = (state_13423[7]);var inst_13409 = (inst_13388 > 0);var state_13423__$1 = state_13423;if(cljs.core.truth_(inst_13409))
{var statearr_13434_13459 = state_13423__$1;(statearr_13434_13459[1] = 12);
} else
{var statearr_13435_13460 = state_13423__$1;(statearr_13435_13460[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 7))
{var inst_13419 = (state_13423[2]);var state_13423__$1 = state_13423;var statearr_13436_13461 = state_13423__$1;(statearr_13436_13461[2] = inst_13419);
(statearr_13436_13461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 8))
{var inst_13396 = (state_13423[10]);var inst_13387 = (state_13423[8]);var tmp13433 = inst_13387;var inst_13387__$1 = tmp13433;var inst_13388 = inst_13396;var state_13423__$1 = (function (){var statearr_13437 = state_13423;(statearr_13437[7] = inst_13388);
(statearr_13437[8] = inst_13387__$1);
return statearr_13437;
})();var statearr_13438_13462 = state_13423__$1;(statearr_13438_13462[2] = null);
(statearr_13438_13462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 9))
{var inst_13387 = (state_13423[8]);var inst_13401 = cljs.core.vec.call(null,inst_13387);var state_13423__$1 = state_13423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13423__$1,11,out,inst_13401);
} else
{if((state_val_13424 === 10))
{var inst_13407 = (state_13423[2]);var state_13423__$1 = state_13423;var statearr_13439_13463 = state_13423__$1;(statearr_13439_13463[2] = inst_13407);
(statearr_13439_13463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 11))
{var inst_13403 = (state_13423[2]);var inst_13404 = (new Array(n));var inst_13387 = inst_13404;var inst_13388 = 0;var state_13423__$1 = (function (){var statearr_13440 = state_13423;(statearr_13440[7] = inst_13388);
(statearr_13440[8] = inst_13387);
(statearr_13440[12] = inst_13403);
return statearr_13440;
})();var statearr_13441_13464 = state_13423__$1;(statearr_13441_13464[2] = null);
(statearr_13441_13464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 12))
{var inst_13387 = (state_13423[8]);var inst_13411 = cljs.core.vec.call(null,inst_13387);var state_13423__$1 = state_13423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13423__$1,15,out,inst_13411);
} else
{if((state_val_13424 === 13))
{var state_13423__$1 = state_13423;var statearr_13442_13465 = state_13423__$1;(statearr_13442_13465[2] = null);
(statearr_13442_13465[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 14))
{var inst_13416 = (state_13423[2]);var inst_13417 = cljs.core.async.close_BANG_.call(null,out);var state_13423__$1 = (function (){var statearr_13443 = state_13423;(statearr_13443[13] = inst_13416);
return statearr_13443;
})();var statearr_13444_13466 = state_13423__$1;(statearr_13444_13466[2] = inst_13417);
(statearr_13444_13466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13424 === 15))
{var inst_13413 = (state_13423[2]);var state_13423__$1 = state_13423;var statearr_13445_13467 = state_13423__$1;(statearr_13445_13467[2] = inst_13413);
(statearr_13445_13467[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_13449 = (new Array(14));(statearr_13449[0] = state_machine__6023__auto__);
(statearr_13449[1] = 1);
return statearr_13449;
});
var state_machine__6023__auto____1 = (function (state_13423){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_13423);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e13450){if((e13450 instanceof Object))
{var ex__6026__auto__ = e13450;var statearr_13451_13468 = state_13423;(statearr_13451_13468[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13469 = state_13423;
state_13423 = G__13469;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_13423){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_13423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_13452 = f__6093__auto__.call(null);(statearr_13452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___13453);
return statearr_13452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6092__auto___13612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_13582){var state_val_13583 = (state_13582[1]);if((state_val_13583 === 1))
{var inst_13541 = (new Array(0));var inst_13542 = inst_13541;var inst_13543 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13582__$1 = (function (){var statearr_13584 = state_13582;(statearr_13584[7] = inst_13543);
(statearr_13584[8] = inst_13542);
return statearr_13584;
})();var statearr_13585_13613 = state_13582__$1;(statearr_13585_13613[2] = null);
(statearr_13585_13613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 2))
{var state_13582__$1 = state_13582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13582__$1,4,ch);
} else
{if((state_val_13583 === 3))
{var inst_13580 = (state_13582[2]);var state_13582__$1 = state_13582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13582__$1,inst_13580);
} else
{if((state_val_13583 === 4))
{var inst_13546 = (state_13582[9]);var inst_13546__$1 = (state_13582[2]);var inst_13547 = (inst_13546__$1 == null);var inst_13548 = cljs.core.not.call(null,inst_13547);var state_13582__$1 = (function (){var statearr_13586 = state_13582;(statearr_13586[9] = inst_13546__$1);
return statearr_13586;
})();if(inst_13548)
{var statearr_13587_13614 = state_13582__$1;(statearr_13587_13614[1] = 5);
} else
{var statearr_13588_13615 = state_13582__$1;(statearr_13588_13615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 5))
{var inst_13550 = (state_13582[10]);var inst_13546 = (state_13582[9]);var inst_13543 = (state_13582[7]);var inst_13550__$1 = f.call(null,inst_13546);var inst_13551 = cljs.core._EQ_.call(null,inst_13550__$1,inst_13543);var inst_13552 = cljs.core.keyword_identical_QMARK_.call(null,inst_13543,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13553 = (inst_13551) || (inst_13552);var state_13582__$1 = (function (){var statearr_13589 = state_13582;(statearr_13589[10] = inst_13550__$1);
return statearr_13589;
})();if(cljs.core.truth_(inst_13553))
{var statearr_13590_13616 = state_13582__$1;(statearr_13590_13616[1] = 8);
} else
{var statearr_13591_13617 = state_13582__$1;(statearr_13591_13617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 6))
{var inst_13542 = (state_13582[8]);var inst_13567 = inst_13542.length;var inst_13568 = (inst_13567 > 0);var state_13582__$1 = state_13582;if(cljs.core.truth_(inst_13568))
{var statearr_13593_13618 = state_13582__$1;(statearr_13593_13618[1] = 12);
} else
{var statearr_13594_13619 = state_13582__$1;(statearr_13594_13619[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 7))
{var inst_13578 = (state_13582[2]);var state_13582__$1 = state_13582;var statearr_13595_13620 = state_13582__$1;(statearr_13595_13620[2] = inst_13578);
(statearr_13595_13620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 8))
{var inst_13550 = (state_13582[10]);var inst_13546 = (state_13582[9]);var inst_13542 = (state_13582[8]);var inst_13555 = inst_13542.push(inst_13546);var tmp13592 = inst_13542;var inst_13542__$1 = tmp13592;var inst_13543 = inst_13550;var state_13582__$1 = (function (){var statearr_13596 = state_13582;(statearr_13596[11] = inst_13555);
(statearr_13596[7] = inst_13543);
(statearr_13596[8] = inst_13542__$1);
return statearr_13596;
})();var statearr_13597_13621 = state_13582__$1;(statearr_13597_13621[2] = null);
(statearr_13597_13621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 9))
{var inst_13542 = (state_13582[8]);var inst_13558 = cljs.core.vec.call(null,inst_13542);var state_13582__$1 = state_13582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13582__$1,11,out,inst_13558);
} else
{if((state_val_13583 === 10))
{var inst_13565 = (state_13582[2]);var state_13582__$1 = state_13582;var statearr_13598_13622 = state_13582__$1;(statearr_13598_13622[2] = inst_13565);
(statearr_13598_13622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 11))
{var inst_13550 = (state_13582[10]);var inst_13546 = (state_13582[9]);var inst_13560 = (state_13582[2]);var inst_13561 = (new Array(0));var inst_13562 = inst_13561.push(inst_13546);var inst_13542 = inst_13561;var inst_13543 = inst_13550;var state_13582__$1 = (function (){var statearr_13599 = state_13582;(statearr_13599[12] = inst_13562);
(statearr_13599[13] = inst_13560);
(statearr_13599[7] = inst_13543);
(statearr_13599[8] = inst_13542);
return statearr_13599;
})();var statearr_13600_13623 = state_13582__$1;(statearr_13600_13623[2] = null);
(statearr_13600_13623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 12))
{var inst_13542 = (state_13582[8]);var inst_13570 = cljs.core.vec.call(null,inst_13542);var state_13582__$1 = state_13582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13582__$1,15,out,inst_13570);
} else
{if((state_val_13583 === 13))
{var state_13582__$1 = state_13582;var statearr_13601_13624 = state_13582__$1;(statearr_13601_13624[2] = null);
(statearr_13601_13624[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 14))
{var inst_13575 = (state_13582[2]);var inst_13576 = cljs.core.async.close_BANG_.call(null,out);var state_13582__$1 = (function (){var statearr_13602 = state_13582;(statearr_13602[14] = inst_13575);
return statearr_13602;
})();var statearr_13603_13625 = state_13582__$1;(statearr_13603_13625[2] = inst_13576);
(statearr_13603_13625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13583 === 15))
{var inst_13572 = (state_13582[2]);var state_13582__$1 = state_13582;var statearr_13604_13626 = state_13582__$1;(statearr_13604_13626[2] = inst_13572);
(statearr_13604_13626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_13608 = (new Array(15));(statearr_13608[0] = state_machine__6023__auto__);
(statearr_13608[1] = 1);
return statearr_13608;
});
var state_machine__6023__auto____1 = (function (state_13582){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_13582);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e13609){if((e13609 instanceof Object))
{var ex__6026__auto__ = e13609;var statearr_13610_13627 = state_13582;(statearr_13610_13627[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13628 = state_13582;
state_13582 = G__13628;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_13582){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_13582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_13611 = f__6093__auto__.call(null);(statearr_13611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto___13612);
return statearr_13611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
