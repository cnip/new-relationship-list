/**
 * @id STK.comp.mobile.blackberry
 * @author Runshi Wang | runshi@staff.sina.com.cn
 */

$Import('common.mobile.shiftImg');
$Import('kit.dom.parseDOM');

STK.register('comp.mobile.blackberry',function($){

	//---常量定义区----------------------------------

	//-------------------------------------------

	return function(node, opts) {
		var that = {};
		var nodes = {};
		var shiftImg;
		//---变量定义区----------------------------------

		//----------------------------------------------

		//---DOM事件绑定的回调函数定义区---------------------
		var bindDOMFuns = {

		};
		//-------------------------------------------

		//---自定义事件绑定的回调函数定义区--------------------
		var bindCustEvtFuns = {

		};
		//----------------------------------------------

		//---广播事件绑定的回调函数定义区---------------------
		var bindListenerFuns = {

		};
		//-------------------------------------------

		//---组件的初始化方法定义区-------------------------
		/**
		 * 初始化方法
		 * @method init
		 * @private
		 */
		var init = function() {
			argsCheck();
			parseDOM();
			initPlugins();
			bindDOM();
			bindCustEvt();
			bindListener();
		};
		//-------------------------------------------

		//---参数的验证方法定义区---------------------------
		/**
		 * 参数的验证方法
		 * @method init
		 * @private
		 */
		var argsCheck = function() {};
		//-------------------------------------------

		//---Dom的获取方法定义区---------------------------
		/**
		 * Dom的获取方法
		 * @method parseDOM
		 * @private
		 */
		var parseDOM = function() {
			nodes = $.kit.dom.parseDOM($.core.dom.builder(node).list);
		};
		//-------------------------------------------

		//---模块的初始化方法定义区-------------------------
		/**
		 * 模块的初始化方法
		 * @method initPlugins
		 * @private
		 */
		var initPlugins = function() {

		};
		//-------------------------------------------

		//---DOM事件绑定方法定义区-------------------------
		/**
		 * DOM事件绑定方法
		 * @method bindDOM
		 * @private
		 */
		var bindDOM = function() {
			shiftImg = $.common.mobile.shiftImg(nodes.imgwrap);
			$.core.evt.addEvent(nodes.model, "change", function(){
				var mindex = nodes.model.selectedIndex;
				var moptions = nodes.model.options;
				nodes.download_link.href = moptions[mindex].getAttribute('download_url');
			});
		};
		//-------------------------------------------

		//---自定义事件绑定方法定义区------------------------
		/**
		 * 自定义事件绑定方法
		 * @method bindCustEvt
		 * @private
		 */
		var bindCustEvt = function() {

		};
		//-------------------------------------------

		//---广播事件绑定方法定义区------------------------
		var bindListener = function() {

		};
		//-------------------------------------------

		//---组件公开方法的定义区---------------------------
		/**
		 * 组件销毁方法
		 * @method destroy
		 */
		var destroy = function() {

		};
		//-------------------------------------------

		//---执行初始化---------------------------------
		init();
		//-------------------------------------------

		//---组件公开属性或方法的赋值区----------------------
		that.destroy = destroy;
		//-------------------------------------------

		return that;
	};
});