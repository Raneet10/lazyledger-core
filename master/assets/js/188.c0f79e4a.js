(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{721:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state-sync-reactor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-reactor"}},[e._v("#")]),e._v(" State Sync Reactor")]),e._v(" "),a("p",[e._v("State sync allows new nodes to rapidly bootstrap and join the network by discovering, fetching,\nand restoring state machine snapshots. For more information, see the "),a("RouterLink",{attrs:{to:"/spec/abci/apps.html#state-sync"}},[e._v("state sync ABCI section")]),e._v(".")],1),e._v(" "),a("p",[e._v("The state sync reactor has two main responsibilites:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Serving state machine snapshots taken by the local ABCI application to new nodes joining the\nnetwork.")])]),e._v(" "),a("li",[a("p",[e._v("Discovering existing snapshots and fetching snapshot chunks for an empty local application\nbeing bootstrapped.")])])]),e._v(" "),a("p",[e._v("The state sync process for bootstrapping a new node is described in detail in the section linked\nabove. While technically part of the reactor (see "),a("code",[e._v("statesync/syncer.go")]),e._v(" and related components),\nthis document will only cover the P2P reactor component.")]),e._v(" "),a("p",[e._v("For details on the ABCI methods and data types, see the "),a("RouterLink",{attrs:{to:"/spec/abci/abci.html"}},[e._v("ABCI documentation")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"state-sync-p2p-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-p2p-protocol"}},[e._v("#")]),e._v(" State Sync P2P Protocol")]),e._v(" "),a("p",[e._v("When a new node begin state syncing, it will ask all peers it encounters if it has any\navailable snapshots:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBzbmFwc2hvdHNSZXF1ZXN0TWVzc2FnZSBzdHJ1Y3R7fQo="}}),e._v(" "),a("p",[e._v("The receiver will query the local ABCI application via "),a("code",[e._v("ListSnapshots")]),e._v(", and send a message\ncontaining snapshot metadata (limited to 4 MB) for each of the 10 most recent snapshots:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBzbmFwc2hvdHNSZXNwb25zZU1lc3NhZ2Ugc3RydWN0IHsKIEhlaWdodCAgIHVpbnQ2NAogRm9ybWF0ICAgdWludDMyCiBDaHVua3MgICB1aW50MzIKIEhhc2ggICAgIFtdYnl0ZQogTWV0YWRhdGEgW11ieXRlCn0K"}}),e._v(" "),a("p",[e._v("The node running state sync will offer these snapshots to the local ABCI application via\n"),a("code",[e._v("OfferSnapshot")]),e._v(" ABCI calls, and keep track of which peers contain which snapshots. Once a snapshot\nis accepted, the state syncer will request snapshot chunks from appropriate peers:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBjaHVua1JlcXVlc3RNZXNzYWdlIHN0cnVjdCB7CiBIZWlnaHQgdWludDY0CiBGb3JtYXQgdWludDMyCiBJbmRleCAgdWludDMyCn0K"}}),e._v(" "),a("p",[e._v("The receiver will load the requested chunk from its local application via "),a("code",[e._v("LoadSnapshotChunk")]),e._v(",\nand respond with it (limited to 16 MB):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBjaHVua1Jlc3BvbnNlTWVzc2FnZSBzdHJ1Y3QgewogSGVpZ2h0ICB1aW50NjQKIEZvcm1hdCAgdWludDMyCiBJbmRleCAgIHVpbnQzMgogQ2h1bmsgICBbXWJ5dGUKIE1pc3NpbmcgYm9vbAp9Cg=="}}),e._v(" "),a("p",[e._v("Here, "),a("code",[e._v("Missing")]),e._v(" is used to signify that the chunk was not found on the peer, since an empty\nchunk is a valid (although unlikely) response.")]),e._v(" "),a("p",[e._v("The returned chunk is given to the ABCI application via "),a("code",[e._v("ApplySnapshotChunk")]),e._v(" until the snapshot\nis restored. If a chunk response is not returned within some time, it will be re-requested,\npossibly from a different peer.")]),e._v(" "),a("p",[e._v("The ABCI application is able to request peer bans and chunk refetching as part of the ABCI protocol.")]),e._v(" "),a("p",[e._v("If no state sync is in progress (i.e. during normal operation), any unsolicited response messages\nare discarded.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);