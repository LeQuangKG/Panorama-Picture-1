// Garden Gnome Software - Skin
// Pano2VR pro 4.1.0/3404
// Filename: Bitextco_normal.ggsk
// Generated Mon Oct 28 11:46:03 2013

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var la = this;
	this.node = [];
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.maker = skinObj.divSkin.childNodes;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='P1') {
			this.__div=document.createElement('div');
			this.__div.ggId='P1';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 199px;';
			hs+='top:  248px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+='opacity:1';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				//console.log(me.maker);
				for(var i = 0 ; i < me.maker.length; i++){
					me.maker[i].style.opacity = 0;
				}
				
				setTimeout(function(){
					me.player.openUrl("localhost:livingroom","");
					me.skin.hotspotProxyClick(me.hotspot.id);
				},800);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_21=document.createElement('div');
			this._image_21.ggId='Image 2';
			this._image_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_21.ggVisible=true;
			this._image_21.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -140px;';
			hs+='width: 37px;';
			hs+='height: 143px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_21.setAttribute('style',hs);
			this._image_21__img=document.createElement('img');
			this._image_21__img.setAttribute('src',basePath + 'images/image_21.png');
			this._image_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_21__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_21__img);
			this._image_21.appendChild(this._image_21__img);
			this.__div.appendChild(this._image_21);
		} else
		if (hotspot.skinid=='P2') {
			this.__div=document.createElement('div');
			this.__div.ggId='P2';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 274px;';
			hs+='top:  246px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl("http:\/\/www.bedroom.com","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_20=document.createElement('div');
			this._image_20.ggId='Image 2';
			this._image_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_20.ggVisible=true;
			this._image_20.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -140px;';
			hs+='width: 37px;';
			hs+='height: 143px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_20.setAttribute('style',hs);
			this._image_20__img=document.createElement('img');
			this._image_20__img.setAttribute('src',basePath + 'images/image_20.png');
			this._image_20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_20__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_20__img);
			this._image_20.appendChild(this._image_20__img);
			this.__div.appendChild(this._image_20);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='P3';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 351px;';
			hs+='top:  247px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl("http:\/\/www.kitchen.com","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_2=document.createElement('div');
			this._image_2.ggId='Image 2';
			this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_2.ggVisible=true;
			this._image_2.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -140px;';
			hs+='width: 37px;';
			hs+='height: 144px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_2.setAttribute('style',hs);
			this._image_2__img=document.createElement('img');
			this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
			this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_2__img);
			this._image_2.appendChild(this._image_2__img);
			this.__div.appendChild(this._image_2);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};