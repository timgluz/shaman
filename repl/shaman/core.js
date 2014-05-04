// Compiled by ClojureScript 0.0-2030
goog.provide('shaman.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
/**
* converts vector of string into commaseparated string
*/
shaman.core.to_csv_line = (function to_csv_line(strings){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",strings));
});
/**
* converts Clojure data into JSON
*/
shaman.core.to_json = (function to_json(data){return cljs.core.clj__GT_js.call(null,data);
});
shaman.core.RPC = {};
shaman.core.build_url = (function build_url(this$,path){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$build_url$arity$2;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$build_url$arity$2(this$,path);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.build_url[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.build_url["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.build-url",this$);
}
}
})().call(null,this$,path);
}
});
shaman.core.execute_request = (function execute_request(this$,request_map){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$execute_request$arity$2;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$execute_request$arity$2(this$,request_map);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.execute_request[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.execute_request["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.execute-request",this$);
}
}
})().call(null,this$,request_map);
}
});
shaman.core.rpc_get = (function() {
var rpc_get = null;
var rpc_get__2 = (function (this$,path){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_get$arity$2;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_get$arity$2(this$,path);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_get[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_get["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-get",this$);
}
}
})().call(null,this$,path);
}
});
var rpc_get__3 = (function (this$,path,params){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_get$arity$3;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_get$arity$3(this$,path,params);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_get[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_get["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-get",this$);
}
}
})().call(null,this$,path,params);
}
});
rpc_get = function(this$,path,params){
switch(arguments.length){
case 2:
return rpc_get__2.call(this,this$,path);
case 3:
return rpc_get__3.call(this,this$,path,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rpc_get.cljs$core$IFn$_invoke$arity$2 = rpc_get__2;
rpc_get.cljs$core$IFn$_invoke$arity$3 = rpc_get__3;
return rpc_get;
})()
;
shaman.core.rpc_post = (function() {
var rpc_post = null;
var rpc_post__3 = (function (this$,path,data){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_post$arity$3;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_post$arity$3(this$,path,data);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_post[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_post["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-post",this$);
}
}
})().call(null,this$,path,data);
}
});
var rpc_post__4 = (function (this$,path,data,params){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_post$arity$4;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_post$arity$4(this$,path,data,params);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_post[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_post["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-post",this$);
}
}
})().call(null,this$,path,data,params);
}
});
rpc_post = function(this$,path,data,params){
switch(arguments.length){
case 3:
return rpc_post__3.call(this,this$,path,data);
case 4:
return rpc_post__4.call(this,this$,path,data,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rpc_post.cljs$core$IFn$_invoke$arity$3 = rpc_post__3;
rpc_post.cljs$core$IFn$_invoke$arity$4 = rpc_post__4;
return rpc_post;
})()
;
shaman.core.rpc_delete = (function() {
var rpc_delete = null;
var rpc_delete__2 = (function (this$,path){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_delete$arity$2;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_delete$arity$2(this$,path);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_delete[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_delete["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-delete",this$);
}
}
})().call(null,this$,path);
}
});
var rpc_delete__3 = (function (this$,path,param){if((function (){var and__3213__auto__ = this$;if(and__3213__auto__)
{return this$.shaman$core$RPC$rpc_delete$arity$3;
} else
{return and__3213__auto__;
}
})())
{return this$.shaman$core$RPC$rpc_delete$arity$3(this$,path,param);
} else
{var x__3818__auto__ = (((this$ == null))?null:this$);return (function (){var or__3222__auto__ = (shaman.core.rpc_delete[goog.typeOf(x__3818__auto__)]);if(or__3222__auto__)
{return or__3222__auto__;
} else
{var or__3222__auto____$1 = (shaman.core.rpc_delete["_"]);if(or__3222__auto____$1)
{return or__3222__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RPC.rpc-delete",this$);
}
}
})().call(null,this$,path,param);
}
});
rpc_delete = function(this$,path,param){
switch(arguments.length){
case 2:
return rpc_delete__2.call(this,this$,path);
case 3:
return rpc_delete__3.call(this,this$,path,param);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rpc_delete.cljs$core$IFn$_invoke$arity$2 = rpc_delete__2;
rpc_delete.cljs$core$IFn$_invoke$arity$3 = rpc_delete__3;
return rpc_delete;
})()
;

/**
* @constructor
* @param {*} host
* @param {*} port
* @param {*} api_key
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
shaman.core.RpcClient = (function (host,port,api_key,__meta,__extmap){
this.host = host;
this.port = port;
this.api_key = api_key;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
shaman.core.RpcClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3772__auto__){var self__ = this;
var this__3772__auto____$1 = this;var h__3626__auto__ = self__.__hash;if(!((h__3626__auto__ == null)))
{return h__3626__auto__;
} else
{var h__3626__auto____$1 = cljs.core.hash_imap.call(null,this__3772__auto____$1);self__.__hash = h__3626__auto____$1;
return h__3626__auto____$1;
}
});
shaman.core.RpcClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3777__auto__,k__3778__auto__){var self__ = this;
var this__3777__auto____$1 = this;return cljs.core._lookup.call(null,this__3777__auto____$1,k__3778__auto__,null);
});
shaman.core.RpcClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3779__auto__,k10913,else__3780__auto__){var self__ = this;
var this__3779__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10913,new cljs.core.Keyword(null,"host","host",1017112858)))
{return self__.host;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10913,new cljs.core.Keyword(null,"port","port",1017351155)))
{return self__.port;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10913,new cljs.core.Keyword(null,"api-key","api-key",4507296670)))
{return self__.api_key;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10913,else__3780__auto__);
} else
{return null;
}
}
}
}
});
shaman.core.RpcClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3784__auto__,k__3785__auto__,G__10912){var self__ = this;
var this__3784__auto____$1 = this;var pred__10915 = cljs.core.keyword_identical_QMARK_;var expr__10916 = k__3785__auto__;if(pred__10915.call(null,new cljs.core.Keyword(null,"host","host",1017112858),expr__10916))
{return (new shaman.core.RpcClient(G__10912,self__.port,self__.api_key,self__.__meta,self__.__extmap,null));
} else
{if(pred__10915.call(null,new cljs.core.Keyword(null,"port","port",1017351155),expr__10916))
{return (new shaman.core.RpcClient(self__.host,G__10912,self__.api_key,self__.__meta,self__.__extmap,null));
} else
{if(pred__10915.call(null,new cljs.core.Keyword(null,"api-key","api-key",4507296670),expr__10916))
{return (new shaman.core.RpcClient(self__.host,self__.port,G__10912,self__.__meta,self__.__extmap,null));
} else
{return (new shaman.core.RpcClient(self__.host,self__.port,self__.api_key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3785__auto__,G__10912),null));
}
}
}
});
shaman.core.RpcClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3791__auto__,writer__3792__auto__,opts__3793__auto__){var self__ = this;
var this__3791__auto____$1 = this;var pr_pair__3794__auto__ = (function (keyval__3795__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3792__auto__,cljs.core.pr_writer,""," ","",opts__3793__auto__,keyval__3795__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3792__auto__,pr_pair__3794__auto__,"#shaman.core.RpcClient{",", ","}",opts__3793__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"host","host",1017112858),self__.host],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"port","port",1017351155),self__.port],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"api-key","api-key",4507296670),self__.api_key],true)], true),self__.__extmap));
});
shaman.core.RpcClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3782__auto__,entry__3783__auto__){var self__ = this;
var this__3782__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3783__auto__))
{return cljs.core._assoc.call(null,this__3782__auto____$1,cljs.core._nth.call(null,entry__3783__auto__,0),cljs.core._nth.call(null,entry__3783__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3782__auto____$1,entry__3783__auto__);
}
});
shaman.core.RpcClient.prototype.shaman$core$RPC$ = true;
shaman.core.RpcClient.prototype.shaman$core$RPC$build_url$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return [cljs.core.str(new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.str(path)].join('');
});
shaman.core.RpcClient.prototype.shaman$core$RPC$execute_request$arity$2 = (function (this$,request_map){var self__ = this;
var this$__$1 = this;var response_channel = cljs.core.async.chan.call(null,1);ajax.core.ajax_request.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(request_map),new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(request_map),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(request_map),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], true)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (resp_items){console.debug([cljs.core.str("Handler got: "),cljs.core.str(resp_items)].join(''));
var c__6092__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6093__auto__ = (function (){var switch__6022__auto__ = (function (state_10922){var state_val_10923 = (state_10922[1]);if((state_val_10923 === 2))
{var inst_10919 = (state_10922[2]);var inst_10920 = cljs.core.async.close_BANG_.call(null,response_channel);var state_10922__$1 = (function (){var statearr_10924 = state_10922;(statearr_10924[7] = inst_10919);
return statearr_10924;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10922__$1,inst_10920);
} else
{if((state_val_10923 === 1))
{var state_10922__$1 = state_10922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10922__$1,2,response_channel,resp_items);
} else
{return null;
}
}
});return ((function (switch__6022__auto__){
return (function() {
var state_machine__6023__auto__ = null;
var state_machine__6023__auto____0 = (function (){var statearr_10928 = (new Array(8));(statearr_10928[0] = state_machine__6023__auto__);
(statearr_10928[1] = 1);
return statearr_10928;
});
var state_machine__6023__auto____1 = (function (state_10922){while(true){
var ret_value__6024__auto__ = (function (){try{while(true){
var result__6025__auto__ = switch__6022__auto__.call(null,state_10922);if(cljs.core.keyword_identical_QMARK_.call(null,result__6025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6025__auto__;
}
break;
}
}catch (e10929){if((e10929 instanceof Object))
{var ex__6026__auto__ = e10929;var statearr_10930_10932 = state_10922;(statearr_10930_10932[5] = ex__6026__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10922);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6024__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10933 = state_10922;
state_10922 = G__10933;
continue;
}
} else
{return ret_value__6024__auto__;
}
break;
}
});
state_machine__6023__auto__ = function(state_10922){
switch(arguments.length){
case 0:
return state_machine__6023__auto____0.call(this);
case 1:
return state_machine__6023__auto____1.call(this,state_10922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6023__auto____0;
state_machine__6023__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6023__auto____1;
return state_machine__6023__auto__;
})()
;})(switch__6022__auto__))
})();var state__6094__auto__ = (function (){var statearr_10931 = f__6093__auto__.call(null);(statearr_10931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6092__auto__);
return statearr_10931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6094__auto__);
}));
return c__6092__auto__;
})], true));
return response_channel;
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_get$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return shaman.core.rpc_get.call(null,this$__$1,path,null);
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_get$arity$3 = (function (this$,path,params){var self__ = this;
var this$__$1 = this;return shaman.core.execute_request.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),shaman.core.build_url.call(null,this$__$1,path),new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_appkey","pio_appkey",1150897881),new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(this$__$1)], true),params)], true));
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_post$arity$3 = (function (this$,path,data){var self__ = this;
var this$__$1 = this;return shaman.core.rpc_post.call(null,this$__$1,path,data,cljs.core.PersistentArrayMap.EMPTY);
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_post$arity$4 = (function (this$,path,data,params){var self__ = this;
var this$__$1 = this;return shaman.core.execute_request.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),shaman.core.build_url.call(null,this$__$1,path),new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_appkey","pio_appkey",1150897881),new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(this$__$1)], true),params),new cljs.core.Keyword(null,"body","body",1016933652),shaman.core.to_json.call(null,data)], true));
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_delete$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return shaman.core.rpc_delete.call(null,this$__$1,path,cljs.core.PersistentArrayMap.EMPTY);
});
shaman.core.RpcClient.prototype.shaman$core$RPC$rpc_delete$arity$3 = (function (this$,path,params){var self__ = this;
var this$__$1 = this;return shaman.core.execute_request.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),shaman.core.build_url.call(null,this$__$1,path),new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_appkey","pio_appkey",1150897881),new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(this$__$1)], true),params)], true));
});
shaman.core.RpcClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3789__auto__){var self__ = this;
var this__3789__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"host","host",1017112858),self__.host],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"port","port",1017351155),self__.port],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"api-key","api-key",4507296670),self__.api_key],true)], true),self__.__extmap));
});
shaman.core.RpcClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3781__auto__){var self__ = this;
var this__3781__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
shaman.core.RpcClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3773__auto__,other__3774__auto__){var self__ = this;
var this__3773__auto____$1 = this;if(cljs.core.truth_((function (){var and__3213__auto__ = other__3774__auto__;if(cljs.core.truth_(and__3213__auto__))
{var and__3213__auto____$1 = (this__3773__auto____$1.constructor === other__3774__auto__.constructor);if(and__3213__auto____$1)
{return cljs.core.equiv_map.call(null,this__3773__auto____$1,other__3774__auto__);
} else
{return and__3213__auto____$1;
}
} else
{return and__3213__auto__;
}
})()))
{return true;
} else
{return false;
}
});
shaman.core.RpcClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3776__auto__,G__10912){var self__ = this;
var this__3776__auto____$1 = this;return (new shaman.core.RpcClient(self__.host,self__.port,self__.api_key,G__10912,self__.__extmap,self__.__hash));
});
shaman.core.RpcClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3775__auto__){var self__ = this;
var this__3775__auto____$1 = this;return self__.__meta;
});
shaman.core.RpcClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3786__auto__,k__3787__auto__){var self__ = this;
var this__3786__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"api-key","api-key",4507296670),null,new cljs.core.Keyword(null,"host","host",1017112858),null,new cljs.core.Keyword(null,"port","port",1017351155),null], true),k__3787__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3786__auto____$1),self__.__meta),k__3787__auto__);
} else
{return (new shaman.core.RpcClient(self__.host,self__.port,self__.api_key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3787__auto__)),null));
}
});
shaman.core.RpcClient.cljs$lang$type = true;
shaman.core.RpcClient.cljs$lang$ctorPrSeq = (function (this__3811__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"shaman.core/RpcClient");
});
shaman.core.RpcClient.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__){return cljs.core._write.call(null,writer__3812__auto__,"shaman.core/RpcClient");
});
shaman.core.__GT_RpcClient = (function __GT_RpcClient(host,port,api_key){return (new shaman.core.RpcClient(host,port,api_key));
});
shaman.core.map__GT_RpcClient = (function map__GT_RpcClient(G__10914){return (new shaman.core.RpcClient(new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$1(G__10914),new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(G__10914),new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(G__10914),null,cljs.core.dissoc.call(null,G__10914,new cljs.core.Keyword(null,"host","host",1017112858),new cljs.core.Keyword(null,"port","port",1017351155),new cljs.core.Keyword(null,"api-key","api-key",4507296670))));
});
/**
* builds the new api-client
* @param {...*} var_args
*/
shaman.core.make_client = (function() { 
var make_client__delegate = function (host,api_key,p__10934){var map__10936 = p__10934;var map__10936__$1 = ((cljs.core.seq_QMARK_.call(null,map__10936))?cljs.core.apply.call(null,cljs.core.hash_map,map__10936):map__10936);var port = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"port","port",1017351155),8000);return (new shaman.core.RpcClient(host,port,api_key));
};
var make_client = function (host,api_key,var_args){
var p__10934 = null;if (arguments.length > 2) {
  p__10934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return make_client__delegate.call(this,host,api_key,p__10934);};
make_client.cljs$lang$maxFixedArity = 2;
make_client.cljs$lang$applyTo = (function (arglist__10937){
var host = cljs.core.first(arglist__10937);
arglist__10937 = cljs.core.next(arglist__10937);
var api_key = cljs.core.first(arglist__10937);
var p__10934 = cljs.core.rest(arglist__10937);
return make_client__delegate(host,api_key,p__10934);
});
make_client.cljs$core$IFn$_invoke$arity$variadic = make_client__delegate;
return make_client;
})()
;
/**
* returns user data from the recommender dataset
* 
* Arguments:
* client  - an initialized RpcClient
* user-id - an id of the user
* 
* Usage:
* (get-user client "user1")
*/
shaman.core.get_user = (function get_user(client,user_id){return shaman.core.rpc_get.call(null,client,[cljs.core.str("/users/"),cljs.core.str(user_id),cljs.core.str(".json")].join(''));
});
/**
* add or update user info
* 
* Arguments:
* client  -  an initialized RpcClient
* user-id - an id of the user
* 
* Optional arguments:
* user-params - a clojure map with arguments for PredictionIO user API
* for example {:pio_latlng "69.32,23.43", :pio_inactive false}
* 
* Usage:
* (add-user client "user1")
* (add-user client "user2" {:pio_inactive false, :pio_latlng "0.0,0.0"})
*/
shaman.core.add_user = (function() {
var add_user = null;
var add_user__2 = (function (client,user_id){return add_user.call(null,client,user_id,cljs.core.PersistentArrayMap.EMPTY);
});
var add_user__3 = (function (client,user_id,user_params){return shaman.core.rpc_post.call(null,client,"/users.json","",cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_uid","pio_uid",4741586329),user_id], true),cljs.core.dissoc.call(null,user_params,new cljs.core.Keyword(null,"pio_ct","pio_ct",4320740140))));
});
add_user = function(client,user_id,user_params){
switch(arguments.length){
case 2:
return add_user__2.call(this,client,user_id);
case 3:
return add_user__3.call(this,client,user_id,user_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_user.cljs$core$IFn$_invoke$arity$2 = add_user__2;
add_user.cljs$core$IFn$_invoke$arity$3 = add_user__3;
return add_user;
})()
;
/**
* deletes user by user-id
* 
* Arguments:
* client  - an initialized RpcClient
* user-id = an id of the user
* Usage:
* (delete-user client "user1")
*/
shaman.core.delete_user = (function delete_user(client,user_id){return shaman.core.rpc_delete.call(null,client,[cljs.core.str("/users/"),cljs.core.str(user_id),cljs.core.str(".json")].join(''));
});
/**
* adds new item into the dataset
* Arguments:
* client      - an initialized RpcClient
* item-id     - an id of the item
* item-types  - a vector of string with item's types
* Optional arguments:
* params  - a Clojure map with additional descriptors
* Usage:
* (add-item client "item1" ["beer" "belgium" "duval"]
* (add-item client "item1" [] {:pio_price 5.40 :pio_profit 0.24}))
*/
shaman.core.add_item = (function() {
var add_item = null;
var add_item__3 = (function (client,item_id,item_types){return add_item.call(null,client,item_id,item_types,cljs.core.PersistentArrayMap.EMPTY);
});
var add_item__4 = (function (client,item_id,item_types,params){return shaman.core.rpc_post.call(null,client,"/items.json","",cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_iid","pio_iid",4741574797),item_id,new cljs.core.Keyword(null,"pio_itypes","pio_itypes",1383898091),shaman.core.to_csv_line.call(null,item_types)], true),cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"pio_ct","pio_ct",4320740140))));
});
add_item = function(client,item_id,item_types,params){
switch(arguments.length){
case 3:
return add_item__3.call(this,client,item_id,item_types);
case 4:
return add_item__4.call(this,client,item_id,item_types,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_item.cljs$core$IFn$_invoke$arity$3 = add_item__3;
add_item.cljs$core$IFn$_invoke$arity$4 = add_item__4;
return add_item;
})()
;
/**
* request item from recommender's dataset
* Arguments:
* client  - an initialized RpcClient
* item-id - an id of the item
* Usage:
* (get-item client "item1")
*/
shaman.core.get_item = (function get_item(client,item_id){return shaman.core.rpc_get.call(null,client,[cljs.core.str("/items/"),cljs.core.str(item_id),cljs.core.str(".json")].join(''));
});
/**
* remove item from recommender's dataset
* Arguments:
* client  - an initialized RpcClient
* item-id - an id of the item
* Usage:
* (delete-item client "item1")
*/
shaman.core.delete_item = (function delete_item(client,item_id){return shaman.core.rpc_delete.call(null,client,[cljs.core.str("/items/"),cljs.core.str(item_id),cljs.core.str(".json")].join(''));
});
/**
* adds action that connects the user and the item
* 
* Arguments:
* client    - an initialized RpcClient
* user-id   - an id of the user
* item-id   - an id of the item
* action    - a keyword or a string with action name,
* builtin actions [:rate :like :dislike :view :conversion]
* Optional arguments:
* rate          - a value of rate action on the scale 1..5
* extra-params  - an additional arguments to pass into API
* Usage:
* (add-action client "user1" "item1" :like)
* (add-action client "user2" "item1" :rate 5
* (add-action client "user3" "item2" :dislike 0 {:pio_t "2013-09.."}))
*/
shaman.core.add_action = (function() {
var add_action = null;
var add_action__4 = (function (client,user_id,item_id,action){return add_action.call(null,client,user_id,item_id,action,0,cljs.core.PersistentArrayMap.EMPTY);
});
var add_action__5 = (function (client,user_id,item_id,action,rate){return add_action.call(null,client,user_id,item_id,action,rate,cljs.core.PersistentArrayMap.EMPTY);
});
var add_action__6 = (function (client,user_id,item_id,action,rate,extra_params){var action_ = (((action instanceof cljs.core.Keyword))?cljs.core.name.call(null,action):[cljs.core.str(action)].join(''));return shaman.core.rpc_post.call(null,client,"/actions/u2i.json","",cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_uid","pio_uid",4741586329),user_id,new cljs.core.Keyword(null,"pio_iid","pio_iid",4741574797),item_id,new cljs.core.Keyword(null,"pio_action","pio_action",1139009649),action_], true),((cljs.core._EQ_.call(null,"rate",action_))?cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_rate","pio_rate",607835483),rate], true):null),extra_params));
});
add_action = function(client,user_id,item_id,action,rate,extra_params){
switch(arguments.length){
case 4:
return add_action__4.call(this,client,user_id,item_id,action);
case 5:
return add_action__5.call(this,client,user_id,item_id,action,rate);
case 6:
return add_action__6.call(this,client,user_id,item_id,action,rate,extra_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_action.cljs$core$IFn$_invoke$arity$4 = add_action__4;
add_action.cljs$core$IFn$_invoke$arity$5 = add_action__5;
add_action.cljs$core$IFn$_invoke$arity$6 = add_action__6;
return add_action;
})()
;
/**
* recommends topN items to user
* 
* Required arguments:
* client      - a initialized RpcClient
* engine-name - a name of recommendation engine
* user-id     - a id of user
* max-n       - a number of result should it return
* 
* Optional arguments:
* :item-types - a vector of string of item's type, ["soup", "cheap"]
* :attributes - a vector of string with names of attributes to return
* :latlng     - a tuple of coordinates, [59.345 34.234]
* :within     - to specify a bounding distance
* :unit       - a unit of length of the :within argument
* 
* You can also pass raw optional arguments (:pio_<argname>)
* as it's specified on the official PredictionIO API documentation,
* but then you have to take care of proper formatting by yourself
* Usage:
* (recommend-topn client "oracle1" "user1" 10)
* (recommend-topn client "oracle1" "user2" 5
* :item-types ["soup" "spicey"] :pio_attributes "price,name")
* @param {...*} var_args
*/
shaman.core.recommend_topn = (function() { 
var recommend_topn__delegate = function (client,engine_name,user_id,max_n,p__10938){var map__10940 = p__10938;var map__10940__$1 = ((cljs.core.seq_QMARK_.call(null,map__10940))?cljs.core.apply.call(null,cljs.core.hash_map,map__10940):map__10940);var extra_params = map__10940__$1;var within = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"within","within",4521301981));var unit = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"unit","unit",1017498870),"km");var latlng = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"latlng","latlng",4198997144),cljs.core.PersistentVector.EMPTY);var attributes = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"attributes","attributes",1419549897),cljs.core.PersistentVector.EMPTY);var item_types = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"item-types","item-types",1926496433),cljs.core.PersistentVector.EMPTY);return shaman.core.rpc_get.call(null,client,[cljs.core.str("/engines/itemrec/"),cljs.core.str(engine_name),cljs.core.str("/topn.json")].join(''),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_uid","pio_uid",4741586329),user_id,new cljs.core.Keyword(null,"pio_n","pio_n",1120576375),max_n], true),cljs.core.dissoc.call(null,extra_params,new cljs.core.Keyword(null,"item-types","item-types",1926496433),new cljs.core.Keyword(null,"attributes","attributes",1419549897),new cljs.core.Keyword(null,"latlng","latlng",4198997144),new cljs.core.Keyword(null,"within","within",4521301981),new cljs.core.Keyword(null,"unit","unit",1017498870)),((cljs.core.empty_QMARK_.call(null,item_types))?null:cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_itypes","pio_itypes",1383898091),shaman.core.to_csv_line.call(null,item_types)], true)),((cljs.core.empty_QMARK_.call(null,attributes))?null:cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_attributes","pio_attributes",2420606738),shaman.core.to_csv_line.call(null,item_types)], true)),((cljs.core.empty_QMARK_.call(null,latlng))?null:cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_latlng","pio_latlng",1452086113),shaman.core.to_csv_line.call(null,latlng)], true)),(((within == null))?null:cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_within","pio_within",1774390950),within,new cljs.core.Keyword(null,"pio_unit","pio_unit",607937023),unit], true))));
};
var recommend_topn = function (client,engine_name,user_id,max_n,var_args){
var p__10938 = null;if (arguments.length > 4) {
  p__10938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return recommend_topn__delegate.call(this,client,engine_name,user_id,max_n,p__10938);};
recommend_topn.cljs$lang$maxFixedArity = 4;
recommend_topn.cljs$lang$applyTo = (function (arglist__10941){
var client = cljs.core.first(arglist__10941);
arglist__10941 = cljs.core.next(arglist__10941);
var engine_name = cljs.core.first(arglist__10941);
arglist__10941 = cljs.core.next(arglist__10941);
var user_id = cljs.core.first(arglist__10941);
arglist__10941 = cljs.core.next(arglist__10941);
var max_n = cljs.core.first(arglist__10941);
var p__10938 = cljs.core.rest(arglist__10941);
return recommend_topn__delegate(client,engine_name,user_id,max_n,p__10938);
});
recommend_topn.cljs$core$IFn$_invoke$arity$variadic = recommend_topn__delegate;
return recommend_topn;
})()
;
/**
* suggests topN most similar items
* @param {...*} var_args
*/
shaman.core.suggest_topn = (function() { 
var suggest_topn__delegate = function (client,engine_name,item_id,max_n,p__10942){var map__10944 = p__10942;var map__10944__$1 = ((cljs.core.seq_QMARK_.call(null,map__10944))?cljs.core.apply.call(null,cljs.core.hash_map,map__10944):map__10944);var extra_params = map__10944__$1;var unit = cljs.core.get.call(null,map__10944__$1,new cljs.core.Keyword(null,"unit","unit",1017498870),"km");var within = cljs.core.get.call(null,map__10944__$1,new cljs.core.Keyword(null,"within","within",4521301981));var latlng = cljs.core.get.call(null,map__10944__$1,new cljs.core.Keyword(null,"latlng","latlng",4198997144));var attributes = cljs.core.get.call(null,map__10944__$1,new cljs.core.Keyword(null,"attributes","attributes",1419549897));var item_types = cljs.core.get.call(null,map__10944__$1,new cljs.core.Keyword(null,"item-types","item-types",1926496433));return shaman.core.rpc_get.call(null,client,[cljs.core.str("/engines/itemsim/"),cljs.core.str(engine_name),cljs.core.str("/topn.json")].join(''),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_iid","pio_iid",4741574797),item_id,new cljs.core.Keyword(null,"pio_n","pio_n",1120576375),max_n], true),cljs.core.dissoc.call(null,extra_params,new cljs.core.Keyword(null,"item-types","item-types",1926496433),new cljs.core.Keyword(null,"attributes","attributes",1419549897),new cljs.core.Keyword(null,"latlng","latlng",4198997144),new cljs.core.Keyword(null,"within","within",4521301981),new cljs.core.Keyword(null,"unit","unit",1017498870)),(((item_types == null))?null:(function (){cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_itypes","pio_itypes",1383898091),shaman.core.to_csv_line.call(null,item_types)], true);
if((attributes == null))
{} else
{cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_attributes","pio_attributes",2420606738),shaman.core.to_csv_line.call(null,item_types)], true);
}
if((latlng == null))
{} else
{cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_latlng","pio_latlng",1452086113),shaman.core.to_csv_line.call(null,latlng)], true);
}
if((within == null))
{return null;
} else
{return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pio_within","pio_within",1774390950),within,new cljs.core.Keyword(null,"pio_unit","pio_unit",607937023),unit], true);
}
})())));
};
var suggest_topn = function (client,engine_name,item_id,max_n,var_args){
var p__10942 = null;if (arguments.length > 4) {
  p__10942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return suggest_topn__delegate.call(this,client,engine_name,item_id,max_n,p__10942);};
suggest_topn.cljs$lang$maxFixedArity = 4;
suggest_topn.cljs$lang$applyTo = (function (arglist__10945){
var client = cljs.core.first(arglist__10945);
arglist__10945 = cljs.core.next(arglist__10945);
var engine_name = cljs.core.first(arglist__10945);
arglist__10945 = cljs.core.next(arglist__10945);
var item_id = cljs.core.first(arglist__10945);
arglist__10945 = cljs.core.next(arglist__10945);
var max_n = cljs.core.first(arglist__10945);
var p__10942 = cljs.core.rest(arglist__10945);
return suggest_topn__delegate(client,engine_name,item_id,max_n,p__10942);
});
suggest_topn.cljs$core$IFn$_invoke$arity$variadic = suggest_topn__delegate;
return suggest_topn;
})()
;
