webpackJsonp([3],{105:function(n,t,e){"use strict";e.d(t,"a",function(){return d});var i,o,l=e(6),a=e(0),r=(e.n(a),e(7)),c=e(18),s=r.b.nav(i||(i=l.e(["\n    width: 100%;\n    display: flex;\n    font-size: 12px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n            font-weight: 100;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n            font-weight: 100;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n\n        & > div {\n            font-weight: 100;\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"],["\n    width: 100%;\n    display: flex;\n    font-size: 12px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n            font-weight: 100;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n            font-weight: 100;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n\n        & > div {\n            font-weight: 100;\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"]))),m=r.b.a(o||(o=l.e(["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"],["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"]))),d=function(n){return a.createElement(m,{href:n.link},a.createElement("div",{onClick:n.onClick},n.children),a.createElement("img",{src:e(106),alt:""}))};t.b=function(n){return a.createElement(s,null,a.createElement("div",null,n.list.map(function(t,e){return e===n.list.length-1?a.createElement("div",null,t.name):a.createElement(a.Fragment,null,a.createElement(c.b,{to:t.link},t.name),a.createElement("span",null,">"))})),a.createElement("div",null,n.children))}},106:function(n,t){n.exports="data:image/png;base64,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"},107:function(n,t,e){"use strict";var i,o,l=e(6),a=e(7),r=Object(a.c)(i||(i=l.e(["\nfrom { width: 0 }\n  to { width: 100% }\n"],["\nfrom { width: 0 }\n  to { width: 100% }\n"]))),c=a.b.div(o||(o=l.e(["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"],["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"])),r);t.a=c},180:function(n,t,e){"use strict";var i,o=e(6),l=e(0),a=(e.n(l),e(181)),r=e.n(a),c=e(182),s=e.n(c),m=e(183),d=e.n(m),h=e(184),p=e.n(h),u=e(185),g=e.n(u),f=e(186),x=e.n(f),w=e(7).b.div(i||(i=o.e(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    width: 100%;\n    height: 200px;\n\n    & > div {\n        width: 16%;\n        padding-bottom: 16%;\n        height: 0;\n        position: relative;\n        transform: scale(1);\n        transition: all 0.3s;\n        display: flex;\n\n        & > img {\n            position: absolute;\n            width: 70%;\n            height: 70%;\n            top: 0;\n            left: 0;\n            border-radius: 50%;\n        }\n\n        &.trans-4 {\n            transform: scale(1.28);\n            margin-bottom: 1%;\n            width: calc(16% * 1.28);\n            padding-bottom: calc(16% * 1.28);\n        }\n\n        &.trans-3 {\n            transform: scale(1.21);\n            margin-bottom: 0.6%;\n            width: calc(16% * 1.21);\n            padding-bottom: calc(16% * 1.21);\n        }\n\n        &.trans-2 {\n            transform: scale(1.14);\n            margin-bottom: 0.4%;\n            width: calc(16% * 1.14);\n            padding-bottom: calc(16% * 1.14);\n        }\n        &.trans-1 {\n            transform: scale(1.07);\n            margin-bottom: 0.1%;\n            width: calc(16% * 1.07);\n            padding-bottom: calc(16% * 1.07);\n        }\n    }\n"],["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    width: 100%;\n    height: 200px;\n\n    & > div {\n        width: 16%;\n        padding-bottom: 16%;\n        height: 0;\n        position: relative;\n        transform: scale(1);\n        transition: all 0.3s;\n        display: flex;\n\n        & > img {\n            position: absolute;\n            width: 70%;\n            height: 70%;\n            top: 0;\n            left: 0;\n            border-radius: 50%;\n        }\n\n        &.trans-4 {\n            transform: scale(1.28);\n            margin-bottom: 1%;\n            width: calc(16% * 1.28);\n            padding-bottom: calc(16% * 1.28);\n        }\n\n        &.trans-3 {\n            transform: scale(1.21);\n            margin-bottom: 0.6%;\n            width: calc(16% * 1.21);\n            padding-bottom: calc(16% * 1.21);\n        }\n\n        &.trans-2 {\n            transform: scale(1.14);\n            margin-bottom: 0.4%;\n            width: calc(16% * 1.14);\n            padding-bottom: calc(16% * 1.14);\n        }\n        &.trans-1 {\n            transform: scale(1.07);\n            margin-bottom: 0.1%;\n            width: calc(16% * 1.07);\n            padding-bottom: calc(16% * 1.07);\n        }\n    }\n"]))),b=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.childs=[],t.onMouseOver=function(n){return function(e){t.childs[n].className="trans-4",n-1>=0&&(t.childs[n-1].className="trans-3"),n-2>=0&&(t.childs[n-2].className="trans-2"),n-3>=0&&(t.childs[n-3].className="trans-1"),n+1<t.childs.length&&(t.childs[n+1].className="trans-3"),n+2<t.childs.length&&(t.childs[n+2].className="trans-2"),n+3<t.childs.length&&(t.childs[n+3].className="trans-1")}},t.onMouseOut=function(){t.childs.map(function(n){n.className=""})},t}return o.c(t,n),t.prototype.render=function(){var n=this;return l.createElement(w,null,l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(0),onMouseOut:this.onMouseOut},l.createElement("img",{src:r.a,alt:""})),l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(1),onMouseOut:this.onMouseOut},l.createElement("img",{src:s.a,alt:""})),l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(2),onMouseOut:this.onMouseOut},l.createElement("img",{src:d.a,alt:""})),l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(3),onMouseOut:this.onMouseOut},l.createElement("img",{src:p.a,alt:""})),l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(4),onMouseOut:this.onMouseOut},l.createElement("img",{src:g.a,alt:""})),l.createElement("div",{ref:function(t){return n.childs.push(t)},onMouseOver:this.onMouseOver(5),onMouseOut:this.onMouseOut},l.createElement("img",{src:x.a,alt:""})))},t}(l.Component);t.a=b},181:function(n,t,e){n.exports=e.p+"static/media/logo_web-01.950ac687.png"},182:function(n,t,e){n.exports=e.p+"static/media/logo_web-02.1de47c60.png"},183:function(n,t,e){n.exports=e.p+"static/media/logo_web-03.571c1318.png"},184:function(n,t,e){n.exports=e.p+"static/media/logo_web-04.83ae47c1.png"},185:function(n,t,e){n.exports=e.p+"static/media/logo_web-05.eecbc3a7.png"},186:function(n,t,e){n.exports=e.p+"static/media/logo_web-06.209df825.png"},187:function(n,t,e){n.exports=e.p+"static/media/brand-banner.ed2e3097.png"},188:function(n,t,e){n.exports=e.p+"static/media/brand01.9ab985ac.png"},95:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,l=e(6),a=e(0),r=(e.n(a),e(105)),c=e(7),s=e(107),m=e(180),d=c.b.div(i||(i=l.e(["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"],["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"]))),h=c.b.div(o||(o=l.e(["\n    display: flex;\n    flex-direction: column;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n\n    align-items: center;\n\n    & > * {\n        width: 70%;\n    }\n    & > p {\n        margin: 0;\n\n        &:nth-child(1) {\n            font-size: 32px;\n            font-weight: bold;\n\n            margin-bottom: 60px;\n        }\n\n        &:nth-child(2) {\n            font-size: 24px;\n            font-weight: bold;\n\n            margin-bottom: 60px;\n        }\n    }\n\n    & > img {\n        margin-bottom: 100px;\n    }\n\n    & > div {\n        margin-bottom: 60px;\n        & > *:nth-child(1) {\n            font-size: 34px;\n            font-weight: bold;\n\n            margin-bottom: 32px;\n        }\n\n        & > *:nth-child(2) {\n            font-size: 24px;\n        }\n    }\n"],["\n    display: flex;\n    flex-direction: column;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n\n    align-items: center;\n\n    & > * {\n        width: 70%;\n    }\n    & > p {\n        margin: 0;\n\n        &:nth-child(1) {\n            font-size: 32px;\n            font-weight: bold;\n\n            margin-bottom: 60px;\n        }\n\n        &:nth-child(2) {\n            font-size: 24px;\n            font-weight: bold;\n\n            margin-bottom: 60px;\n        }\n    }\n\n    & > img {\n        margin-bottom: 100px;\n    }\n\n    & > div {\n        margin-bottom: 60px;\n        & > *:nth-child(1) {\n            font-size: 34px;\n            font-weight: bold;\n\n            margin-bottom: 32px;\n        }\n\n        & > *:nth-child(2) {\n            font-size: 24px;\n        }\n    }\n"]))),p=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return l.c(t,n),t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(r.b,{list:[{name:"\ud648",link:"/"},{name:"\ube0c\ub79c\ub4dc",link:"/brand/"},{name:"\ube0c\ub79c\ub4dc \uae30\ud68d",link:"/planning"}]}),a.createElement(d,null,a.createElement(s.a,null,a.createElement("img",{src:e(187),alt:""}),a.createElement("div",{className:"desc typing"},a.createElement("h1",{className:"typing",lang:"en"},"Always Planning"),a.createElement("h2",null,"\uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4 \ube0c\ub79c\ub4dc\uc804\ub7b5\uc2e4\uc740"),a.createElement("h2",null,"\ub298 \ubcc0\ud568 \uc5c6\ub294 \uac00\uce58\ub97c \uae30\ud68d\uc758 \ubcf8\uc9c8\ub85c \uc0bc\uc2b5\ub2c8\ub2e4."))),a.createElement(h,null,a.createElement("p",null,"\uc720\ub2c8\uc5b8 \ud50c\ub808\uc774\uc2a4\uc758 \ube0c\ub79c\ub4dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),a.createElement("p",null,"\uae30\ud68d(\u4f01\u5283)\uc774\ub77c\ub294 \uae00\uc790\uc5d0\ub294 \uc0ac\ub78c(\u4eba)\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",a.createElement("br",null),"\uc0ac\ub78c\uc744 \ud5a5\ud558\ub294 \ub9c8\uc74c\uc740 \uc2dc\uac04\uc774 \ud758\ub7ec\ub3c4 \ubcc0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",a.createElement("br",null),"\uadf8\ub798\uc11c \uc6b0\ub9ac \uae30\ud68d\uc758 \ubcf8\uc9c8\uc740 \u2018\uc0ac\ub78c\u2019\uc785\ub2c8\ub2e4."),a.createElement("img",{src:e(188),alt:""}),a.createElement("div",null,a.createElement("p",{lang:"en"},"Simplicity"),a.createElement("p",null,"\uc6b0\ub9ac\uc758 \uae30\ud68d\uc740 \uc27d\uc2b5\ub2c8\ub2e4. ",a.createElement("br",null),"\ud604\uc0c1\uc740 \ubcf5\uc7a1\ud558\uc9c0\ub9cc, \ubcf8\uc9c8\uc740 \ub2e8\uc21c\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),a.createElement("div",null,a.createElement("p",{lang:"en"},"Fun"),a.createElement("p",null,"\uc6b0\ub9ac\uc758 \uae30\ud68d\uc740 \uc7ac\ubbf8\uc788\uc2b5\ub2c8\ub2e4. ",a.createElement("br",null),"\uc790\uc720\ub85c\uc6b4 \ud658\uacbd\uc5d0\uc11c \u2018\uc990\uac70\uc6c0\u2019\uc744 \ubc1c\uacac\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),a.createElement("div",null,a.createElement("p",{lang:"en"},"Touch"),a.createElement("p",null,"\uc6b0\ub9ac\uc758 \uae30\ud68d\uc740 \uc6b8\ub9bc\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",a.createElement("br",null),"\ub9c8\uc74c\uc744 \uc6c0\uc9c1\uc774\ub294 \uc2a4\ud1a0\ub9ac\uac00 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),a.createElement("div",null,a.createElement("p",{lang:"en"}),a.createElement("p",null,a.createElement(m.a,null))),a.createElement("div",null,a.createElement("iframe",{width:"100%",height:"530px",src:"https://www.youtube.com/embed/Kn91U_q4P1g",style:{marginTop:10,marginBottom:10}})))))},t}(a.Component);t.default=p}});
//# sourceMappingURL=3.b390aa0b.chunk.js.map