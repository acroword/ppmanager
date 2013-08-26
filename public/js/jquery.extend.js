/*
    <div class="alert">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Warning!</strong> Best check yo self, you're not looking too good.
    </div>
 */

var eol = '\n';

var warnhtml = [
  , '<div class="alert">'
  , '  <strong>Warning!</strong> {0}'
  , '</div>'
].join(eol);

var infohtml = [
  , '<div class="alert-info">'
  , '  <strong>Info!</strong> {0}'
  , '</div>'
].join(eol);

var errorhtml = [
  , '<div class="alert-error">'
  , '  <strong>Error!</strong> {0}'
  , '</div>'
].join(eol);

var successhtml = [
  , '<div class="alert-success">'
  , '  <strong>Success!</strong> {0}'
  , '</div>'
].join(eol);

(function($) {
	$.fn.warning = function(message) {
		if(!message) {
			message = '';
		}
		this.html(warnhtml.replace('{0}', message));
	}
	$.fn.info = function(message) {
		if(!message) {
			message = '';
		}
		this.html(infohtml.replace('{0}', message));
	}
	$.fn.error = function(message) {
		if(!message) {
			message = '';
		}
		this.html(errorhtml.replace('{0}', message));
	}
	$.fn.success = function(message) {
		if(!message) {
			message = '';
		}
		this.html(successhtml.replace('{0}', message));
	}
})(jQuery);